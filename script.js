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

    for(let i=0;i<etapa.numeros;i++) {
        numeroHtml += '<div class="numero"></div>';
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.título;
    Descricao.innerHTML = '';
    aviso.innerHTML = 'none';
    latera.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function clicou(n) {
    alert('clicou em' +n)
};

function branco(info) {
    alert('clicou em'+info)
};

function corrige(info) {
    alert('clicou em'+info)
};

function confirma(info) {
    alert('clicou em'+info)
};

comecarEtapa();