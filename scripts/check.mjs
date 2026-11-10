import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const manifest=JSON.parse(await fs.readFile(path.join(root,'data/editions.json'),'utf8'));
for(const edition of manifest.editions.filter(e=>!e.planned)){
const dist=path.join(root,'dist/editions',String(edition.year));
const context={window:{}};vm.runInNewContext(await fs.readFile(path.join(dist,'assets/data.js'),'utf8'),context);
const sessions=context.window.BDX_DATA.sessions;
const source=JSON.parse(await fs.readFile(path.join(root,edition.catalog),'utf8'));
assert.equal(sessions.length,source.sessions.length);
assert.equal(context.window.BDX_DATA.edition.year,edition.year);
assert.ok(sessions.every(t=>edition.days.some(d=>d.id===t.day)),'Chaque jour appartient à cette édition');
assert.equal(new Set(sessions.map(t=>t.id)).size,sessions.length,'Identifiants uniques');
for(const status of ['complete','partial','absent'])assert.equal(sessions.filter(t=>t.status===status).length,source.sessions.filter(t=>t.status===status).length);
const counts={};
for(const t of sessions){
  assert.match(t.source,/^https:\/\/bdxio.fr\/talks\/\d+$/);
  assert.ok(t.title&&t.time&&t.room&&t.speakers.length,'Métadonnées obligatoires');
  assert.ok(!t.html.includes('<script'),'Pas de script dans le Markdown rendu');
  for(const s of t.speakers){for(const link of s.links)assert.match(link.url,/^https?:\/\//);if(s.photo)await fs.access(path.join(dist,s.photo));}
  if(t.noteFile)await fs.access(path.join(dist,'notes',t.noteFile));
  if(t.status==='complete'){assert.ok(t.words>=380);assert.ok(t.html.includes('<p>'));assert.ok(t.toc.length>0);}
  counts[t.day]=(counts[t.day]||0)+1;
}

for(const name of ['index.html','assets/app.js','assets/style.css','assets/favicon.svg'])await fs.access(path.join(dist,name));
const app=await fs.readFile(path.join(dist,'assets/app.js'),'utf8');new vm.Script(app);
const page=await fs.readFile(path.join(dist,'index.html'),'utf8');assert.ok(page.includes('lang="fr"'));assert.ok(page.includes('id="talk-dialog"'));
console.log('Vérifications OK : édition '+edition.year+', '+sessions.length+' sessions.');
}
const home={window:{}};vm.runInNewContext(await fs.readFile(path.join(root,'dist/assets/data.js'),'utf8'),home);assert.equal(home.window.BDX_DATA.edition.year,manifest.defaultYear);

