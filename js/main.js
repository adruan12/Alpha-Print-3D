
document.addEventListener('DOMContentLoaded',()=>{
const pesquisa=document.getElementById('pesquisa');
const categoria=document.getElementById('filtroCategoria');
const preco=document.getElementById('filtroPreco');

function filtrar(){
document.querySelectorAll('.card').forEach(card=>{
const nome=card.querySelector('h3').textContent.toLowerCase();
const okNome=!pesquisa.value||nome.includes(pesquisa.value.toLowerCase());
const okCat=!categoria.value||card.dataset.categoria===categoria.value;
const okPreco=!preco.value||parseFloat(card.dataset.preco)<=parseFloat(preco.value);
card.style.display=(okNome&&okCat&&okPreco)?'block':'none';
});
}
if(pesquisa){pesquisa.addEventListener('input',filtrar);categoria.addEventListener('change',filtrar);preco.addEventListener('change',filtrar);}

document.querySelectorAll('.carousel').forEach(c=>{
let i=0; const imgs=c.querySelectorAll('img');
const show=n=>imgs.forEach((im,idx)=>im.classList.toggle('active',idx===n));
c.querySelector('.next').onclick=()=>{i=(i+1)%imgs.length;show(i);}
c.querySelector('.prev').onclick=()=>{i=(i-1+imgs.length)%imgs.length;show(i);}
});
});
