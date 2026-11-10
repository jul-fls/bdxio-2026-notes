import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const catalog=JSON.parse(await fs.readFile(path.join(root,'data/catalog.json'),'utf8'));
const slug=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const speakers=[...new Map(catalog.sessions.flatMap(t=>t.speakers).map(s=>[s.name,s])).values()];
const report=[];
async function get(url){return fetch(url,{signal:AbortSignal.timeout(12000),headers:{'User-Agent':'Mozilla/5.0'}})}
async function resolve(s){
 const file=path.join(root,'public/assets/speakers',slug(s.name)+'.jpg');
 try{await fs.access(file);return;}catch{}
 const linkedin=s.links.find(l=>l.label==='linkedin');const github=s.links.find(l=>l.label==='github');
 const source=linkedin||github;
 if(!source){report.push({name:s.name,status:'no-profile'});return;}
 try{
 let image;
 if(linkedin){
 const response=await get(source.url);if(!response.ok)throw Error('LinkedIn HTTP '+response.status);
 const html=await response.text();
 const tags=html.match(/<meta\b[^>]*>/gi)||[];
 for(const tag of tags){if(!/(?:property|name)=["']og:image["']/i.test(tag))continue;image=tag.match(/content=["']([^"']+)/i)?.[1]?.replace(/&amp;/g,'&');}
 if(!image||!image.includes('media.licdn.com'))throw Error('Portrait public LinkedIn indisponible');
 }else{const user=new URL(github.url).pathname.split('/').filter(Boolean)[0];image='https://github.com/'+encodeURIComponent(user)+'.png?size=400';}
 const response=await get(image);if(!response.ok||!response.headers.get('content-type')?.startsWith('image/'))throw Error('Portrait HTTP '+response.status);
 const bytes=Buffer.from(await response.arrayBuffer());if(bytes.length<100)throw Error('Image vide');
 await fs.writeFile(file,bytes);report.push({name:s.name,status:'downloaded',provider:linkedin?'linkedin':'github',source:source.url});
 }catch(error){report.push({name:s.name,status:'unavailable',provider:linkedin?'linkedin':'github',reason:error.message});}
}
for(let i=0;i<speakers.length;i+=5)await Promise.all(speakers.slice(i,i+5).map(resolve));
await fs.writeFile(path.join(root,'data/portrait-report.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
