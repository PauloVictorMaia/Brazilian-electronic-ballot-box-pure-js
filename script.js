let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let Descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let latera = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;

function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.título;
    Descricao.innerHTML = '';
    aviso.innerHTML = 'none';
    latera.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function clicou(n) {
    
};

function branco() {

};

function corrige() {

};

function confirma() {

};

comecarEtapa();