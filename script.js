let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let Descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let numero = '';
let vtbranco = true;

function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';
    numero = '';
    vtbranco = false;

    for(let i=0;i<etapa.numeros;i++) {
        if(i === 0) {
        numeroHtml += '<div class="numero pisca"></div>';
        } else {
        numeroHtml += '<div class="numero"></div>';
        };
    };

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.título;
    Descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
};

function atualizaInterface() {
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item) => {
        if(item.numero === numero){
            return true;
        } else {return false;}
    });

    if(candidato.length > 0 ) {
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        Descricao.innerHTML = `Nome: ${candidato.name}<br/>Partido ${candidato.partido}`;
        aviso.style.display = 'block';
        
        let = fotosHtml = '';
        for(let i in candidato.fotos) {
            fotosHtml += `<div class="d-1-image"><img src = images/${candidato.fotos[i].url} alt=""/>${candidato.fotos[i].legenda}</div>`
        }
        lateral.innerHTML = fotosHtml;
        } else {
            seuVotoPara.style.display = 'block';
            aviso.style.display = 'block';
            Descricao.innerHTML = '<div class ="aviso--grande pisca">VOTO NULO</div>';
        }


};

function clicou(n) {
    let elNumero  = document.querySelector('.numero.pisca');
    if(elNumero !== null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

            elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca')
        } else {atualizaInterface();}
    };
};

function branco(info) {
    if(numero === '') {
        vtbranco = true;
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = '';
        Descricao.innerHTML = '<div class ="aviso--grande pisca">VOTO EM BRANCO</div>';
        }
    };

function corrige(info) {
    comecarEtapa();
};

function confirma(info) {
    let etapa = etapas[etapaAtual];
    let votoConfirmado = false;
    
    if(vtbranco === true) {
        votoConfirmado = true;
    } else if(numero.length === etapa.numeros) {
        votoConfirmado = true;
    };

    if(votoConfirmado) {
        etapaAtual++;
        if(etapas[etapaAtual] !== undefined ) {
            comecarEtapa();
        }else{
            alert('Fim !')
        }
    }
};

comecarEtapa();