// Catálogo local: edite os produtos aqui e os cards correspondentes no index.html.
// Aplicações são referências de consulta; nunca confirmar compatibilidade só pelo veículo.
const WHATSAPP = '5547996401236';
const products = {
  gel44: {name:'Gel óptico · 4,4 cm',type:'pad',keywords:'megane mégane renault 44 4,4 4.4 circular redondo moldado',description:'Gel óptico moldado para acoplamento entre o sensor de chuva e o para-brisa. A imagem fornecida indica diâmetro de 4,4 cm.',applications:'Consulte aplicações para Mégane e outros veículos. Confirme formato, abertura e medidas do sensor antes de comprar.',images:['gel-44.jpg'],facts:['Formato circular com abertura','Medida indicada no material: 4,4 cm','Preço e disponibilidade sob consulta']},
  redondo: {name:'Gel óptico · Redondo',type:'pad',keywords:'audi a3 a4 a6 a8 q5 q7 circular redondo moldado',description:'Gel óptico redondo para instalação e reinstalação de sensores de chuva. O formato e as medidas devem corresponder ao sensor instalado.',applications:'Consulte aplicações A3, A4, A6, A8, Q5 e Q7. Ano, versão e sensor precisam ser confirmados pelo atendimento.',images:['formatos.jpg','gel-33.jpg','gel-31.jpg'],facts:['Aplicação sujeita à identificação do sensor','Galeria de referência: diferentes formatos e medidas','Preço e disponibilidade sob consulta']},
  gel5: {name:'Gel óptico · 5 ml',type:'liquid',keywords:'renault megane mégane grand tour fluence 5ml 5 ml',description:'Apresentação de 5 ml de gel para sensor de chuva, conforme o produto informado no catálogo comercial.',applications:'Consulte aplicações Mégane, Grand Tour e Fluence. Confirme as orientações de uso, a apresentação e a compatibilidade antes da compra.',images:[],facts:['Apresentação: 5 ml','Modo de aplicação a confirmar com o atendimento','Preço e disponibilidade sob consulta']}
};
const wa = message => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
const productMessage = p => `Olá! Vi o ${p.name} no site da HATHY e gostaria de confirmar a compatibilidade e solicitar um orçamento. Meu veículo é: `;
document.querySelectorAll('[data-whatsapp]').forEach(a => a.href=wa('Olá! Conheci a HATHY pelo site e gostaria de informações sobre gel óptico para sensor de chuva.'));
document.querySelectorAll('[data-help]').forEach(a => a.href=wa('Olá! Preciso de ajuda para escolher o gel óptico. Vou enviar uma foto do sensor e os dados do veículo.'));
document.querySelectorAll('[data-product-wa]').forEach(a => a.href=wa(productMessage(products[a.dataset.productWa])));
document.getElementById('year').textContent=new Date().getFullYear();
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
let selectedFilter='all';
const search=document.getElementById('search');
function filterProducts(){
 const terms=normalize(search.value).split(/\s+/).filter(Boolean);let count=0;
 document.querySelectorAll('.product-card').forEach(card=>{
  const product=products[card.dataset.id];const haystack=normalize(product.name+' '+product.keywords);
  const visible=(selectedFilter==='all'||product.type===selectedFilter)&&terms.every(term=>haystack.includes(term));
  card.hidden=!visible;if(visible)count++;
 });
 document.getElementById('result-count').textContent=`${count} ${count===1?'produto para explorar':'produtos para explorar'}`;
 document.getElementById('empty-state').hidden=count>0;
}
search.addEventListener('input',filterProducts);
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 selectedFilter=button.dataset.filter;
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});filterProducts();
}));
document.getElementById('clear-search').addEventListener('click',()=>{search.value='';document.querySelector('[data-filter="all"]').click();search.focus();});
const dialog=document.getElementById('product-dialog');
function openProduct(id){
 const p=products[id];if(!p)return;
 const media=p.images.length?`<img id="gallery-main" src="assets/${p.images[0]}" alt="Referência visual de ${p.name}"><div class="thumbs">${p.images.map((image,i)=>`<button class="${i===0?'selected':''}" data-gallery="${image}" aria-label="Ver imagem ${i+1}" aria-pressed="${i===0}"><img src="assets/${image}" alt=""></button>`).join('')}</div><p class="dialog-note">Imagens de referência. Confirme o formato específico com o atendimento.</p>`:`<div class="dialog-volume">5<small> ml</small><p>GEL ÓPTICO HATHY®</p></div><p class="dialog-note">Representação da quantidade. Não representa a embalagem do produto.</p>`;
 document.getElementById('dialog-content').innerHTML=`<div class="dialog-layout"><div class="dialog-media">${media}</div><div><p class="eyebrow">ENCONTRE A CONEXÃO CERTA</p><h2 id="dialog-title">${p.name}</h2><p>${p.description}</p><ul>${p.facts.map(f=>`<li>${f}</li>`).join('')}</ul><p>${p.applications}</p><a class="button" href="${wa(productMessage(p))}" target="_blank" rel="noopener noreferrer">Consultar este produto <span><svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></span></a></div></div>`;
 dialog.showModal();document.body.classList.add('lock-scroll');
 dialog.querySelectorAll('[data-gallery]').forEach(button=>button.addEventListener('click',()=>{document.getElementById('gallery-main').src='assets/'+button.dataset.gallery;dialog.querySelectorAll('[data-gallery]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button));});}));
}
document.querySelectorAll('[data-details]').forEach(button=>button.addEventListener('click',()=>openProduct(button.dataset.details)));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>document.body.classList.remove('lock-scroll'));

// Cards com giro acessível: apenas a face visível recebe foco e leitura assistiva.
function setCardFace(id, flipped) {
 const card=document.querySelector(`.product-card[data-id="${id}"]`);
 const front=card.querySelector('.card-front');
 const back=card.querySelector('.card-back');
 card.classList.toggle('is-flipped',flipped);
 front.inert=flipped;back.inert=!flipped;
 front.setAttribute('aria-hidden',String(flipped));
 back.setAttribute('aria-hidden',String(!flipped));
 card.querySelectorAll('[data-flip]').forEach(b=>b.setAttribute('aria-expanded',String(flipped)));
 (flipped?card.querySelector('[data-unflip]'):card.querySelector('[data-flip]')).focus({preventScroll:true});
}
document.querySelectorAll('[data-flip]').forEach(b=>b.addEventListener('click',()=>setCardFace(b.dataset.flip,true)));
document.querySelectorAll('[data-unflip]').forEach(b=>b.addEventListener('click',()=>setCardFace(b.dataset.unflip,false)));
