// Opcional: define URLs reais de SEO depois da escolha do domínio.
// Uso: node scripts/configure-domain.mjs https://www.seudominio.com.br
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const raw=process.argv[2];
if(!raw){console.error('Informe o domínio HTTPS real como argumento.');process.exit(1);}
const parsed=new URL(raw);
if(parsed.protocol!=='https:'||parsed.username||parsed.password||parsed.search||parsed.hash||parsed.pathname!=='/')throw new Error('Use a origem HTTPS do domínio, sem caminho, credenciais ou parâmetros.');
const origin=parsed.origin;
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../public_html');
let html=fs.readFileSync(path.join(root,'index.html'),'utf8');
html=html.replace(/<link rel="canonical"[^>]*>\s*/g,'').replace(/<meta property="og:url"[^>]*>\s*/g,'');
html=html.replace('</head>',`<link rel="canonical" href="${origin}/">\n<meta property="og:url" content="${origin}/">\n</head>`);
fs.writeFileSync(path.join(root,'index.html'),html);
fs.writeFileSync(path.join(root,'robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
fs.writeFileSync(path.join(root,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin}/</loc></url></urlset>\n`);
console.log('Domínio configurado. Publique novamente os arquivos de public_html e atualize o ZIP se necessário.');
