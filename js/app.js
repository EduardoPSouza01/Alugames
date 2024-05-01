
let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if(imagem.classList.contains('dashboard__item__img--rented')){
        alugarJogo(imagem, botao);
        conformacao_devolucao();
    }else{
        devolverJogo(imagem, botao);
    }
}


function alugarJogo(imagem, botao){
    imagem.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
    botao.innerHTML = "Alugar"; 
    jogosAlugados--;
}

function devolverJogo(imagem, botao){
    imagem.classList.add('dashboard__item__img--rented');
    botao.classList.add('dashboard__item__button--return');
    botao.innerHTML = "Devolver";
    jogosAlugados++;
}

function conformacao_devolucao(){
    alert("Obrigado por devolver o jogo!!!!");
}


document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});