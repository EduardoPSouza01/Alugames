
function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if(imagem.classList.contains('dashboard__item__img--rented')){
        alugarJogo(imagem, botao);
    }else{
        devolverJogo(imagem, botao);
    }
}


function alugarJogo(imagem, botao){
    imagem.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
    botao.innerHTML = "Alugar"; 
}

function devolverJogo(imagem, botao){
    imagem.classList.add('dashboard__item__img--rented');
    botao.classList.add('dashboard__item__button--return');
    botao.innerHTML = "Devolver";
}

