import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const manifest=JSON.parse(await fs.readFile(path.join(root,'data/editions.json'),'utf8'));
const available=manifest.editions.filter(e=>!e.planned);
if(!available.some(e=>e.year===manifest.defaultYear))throw Error('Édition par défaut absente');
if(new Set(manifest.editions.map(e=>e.year)).size!==manifest.editions.length)throw Error('Années dupliquées');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function inline(text){
  const codes=[];text=text.replace(/`([^`]+)`/g,(_,s)=>`\u0000${codes.push('<code>'+esc(s)+'</code>')-1}\u0000`);
  let out=esc(text).replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1 ↗</a>').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/\*([^*\n]+)\*/g,'<em>$1</em>');
  return out.replace(/\u0000(\d+)\u0000/g,(_,i)=>codes[+i]);
}
export function markdown(source,prefix){
  const lines=source.replace(/\r/g,'').split('\n');const html=[],toc=[];let i=0,heading=0;
  while(i<lines.length){
    const line=lines[i];if(!line.trim()){i++;continue;}
    if(line.startsWith('```')){const code=[];i++;while(i<lines.length&&!lines[i].startsWith('```'))code.push(lines[i++]);i++;html.push('<pre><code>'+esc(code.join('\n'))+'</code></pre>');continue;}
    if(/^#{1,3} /.test(line)){const match=line.match(/^(#{1,3}) (.*)/);const id=prefix+'-h'+(++heading);html.push(`<h${match[1].length} id="${id}">${inline(match[2])}</h${match[1].length}>`);toc.push({id,text:match[2]});i++;continue;}
    if(line.trim().startsWith('|')&&lines[i+1]?.match(/^\s*\|?\s*:?-{2,}/)){const cells=s=>s.trim().replace(/^\||\|$/g,'').split('|').map(v=>v.trim());const headers=cells(line);i+=2;const rows=[];while(i<lines.length&&lines[i].trim().startsWith('|'))rows.push(cells(lines[i++]));html.push('<div class="table-scroll"><table><thead><tr>'+headers.map(v=>'<th scope="col">'+inline(v)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map(v=>'<td>'+inline(v)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>');continue;}
    if(/^\s*(?:- |\d+\. )/.test(line)){const ordered=/^\s*\d+\./.test(line);const tag=ordered?'ol':'ul';const items=[];while(i<lines.length&&new RegExp(ordered?'^\\s*\\d+\\. ':'^\\s*- ').test(lines[i]))items.push(lines[i++].replace(/^\s*(?:- |\d+\. )/,''));html.push(`<${tag}>`+items.map(v=>'<li>'+inline(v)+'</li>').join('')+`</${tag}>`);continue;}
    if(line.startsWith('> ')){const block=[];while(i<lines.length&&lines[i].startsWith('> '))block.push(lines[i++].slice(2));html.push('<blockquote>'+inline(block.join(' '))+'</blockquote>');continue;}
    if(/^---+$/.test(line.trim())){html.push('<hr>');i++;continue;}
    const paragraph=[];while(i<lines.length&&lines[i].trim()&&!/^(?:#{1,3} |```|> |\s*- |\s*\d+\. |\|)/.test(lines[i]))paragraph.push(lines[i++]);
    if(!paragraph.length){html.push('<p>'+inline(lines[i++])+'</p>');continue;}
    const p=paragraph.join(' ');const cls=/^\*(?:Sources?|Notes)\s*:/.test(p)?'source-note':/^\*\*[^*]+\*\*$/.test(p)?'section-label':'';html.push(`<p${cls?` class="${cls}"`:''}>${inline(p)}</p>`);
  }
  return {html:html.join('\n'),toc};
}
async function buildEdition(edition,dist,isRoot){
const catalog=JSON.parse(await fs.readFile(path.join(root,edition.catalog),'utf8'));
await fs.mkdir(dist,{recursive:true});
await fs.cp(path.join(root,'public'),dist,{recursive:true});
await fs.cp(path.join(root,edition.content),path.join(dist,'notes'),{recursive:true});
const sessions=[];
for(const session of catalog.sessions){
  const t=structuredClone(session);let md='';
  if(t.noteFile)md=await fs.readFile(path.join(root,edition.content,t.noteFile),'utf8');
  const text=md.replace(/^# .+\n/,'').replace(/^\*\*[^\n]+\*\*\s*\n/,'').trim();
  const result=markdown(text,t.id);t.html=result.html;t.toc=result.toc;
  t.words=md?md.trim().split(/\s+/).length:0;
  const first=md.match(/## (?:Ouverture et fil du talk|Le sujet)\n+([^\n]+)/)?.[1]||'';t.intro=first.replace(/\*|`/g,'');
  if(!t.category)t.category='Vie de la conférence';
  t.speakers=await Promise.all(t.speakers.map(async s=>{const name=slug(s.name)+'.jpg';try{await fs.access(path.join(dist,'assets/speakers',name));return {...s,photo:'./assets/speakers/'+name};}catch{return {...s,photo:''};}}));
  t.search=normalize([t.title,t.category,t.roomLabel,...t.speakers.map(s=>s.name),md].join(' '));
  delete t.slot;sessions.push(t);
}
const payload=JSON.stringify({edition,editions:manifest.editions.map(e=>({year:e.year,planned:!!e.planned,href:(isRoot?'./':'../../')+'editions/'+e.year+'/'})),updated:catalog.updated,source:catalog.source,sessions}).replace(/</g,'\\u003c');
await fs.writeFile(path.join(dist,'assets/data.js'),'window.BDX_DATA = '+payload+';\n');
await fs.copyFile(path.join(root,'README.md'),path.join(dist,'DEPLOIEMENT.md')).catch(()=>{});
console.log(`Site construit : ${sessions.length} sessions, ${sessions.filter(t=>t.status==='complete').length} carnets développés.\n${dist}`);

}
for(const edition of available){
 await buildEdition(edition,path.join(root,'dist/editions',String(edition.year)),false);
 if(edition.year===manifest.defaultYear)await buildEdition(edition,path.join(root,'dist'),true);
}
