
let a=' so\'m';
let rubl=document.getElementById('rubl');
let dollar=document.getElementById('dollar');
let yevro=document.getElementById('yevro');
let yuan=document.getElementById('yuan');
let btn=document.getElementById('btn').onclick=converter;

function converter(e) {
    let amount=document.getElementById('input').value;
    rubl.textContent=amount*144.470+a;
    dollar.textContent=amount*10730.7+a;
    yevro.textContent=amount*12084.9+a;
    yuan.textContent=amount*1680.48+a;
}