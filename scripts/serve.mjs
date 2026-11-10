import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../dist');
const port=Number(process.env.PORT||4173);
const host=process.env.HOST||'127.0.0.1';
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.md':'text/markdown; charset=utf-8','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.webp':'image/webp','.json':'application/json; charset=utf-8'};
http.createServer(async(req,res)=>{try{const uri=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const target=path.resolve(root,'.'+uri+(uri.endsWith('/')?'index.html':''));if(target!==root&&!target.startsWith(root+path.sep)){res.writeHead(403).end();return;}const body=await fs.readFile(target);res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});res.end(body);}catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'}).end('Fichier introuvable');}}).listen(port,host,()=>console.log(`Local: http://127.0.0.1:${port}`));
