let nCards = Number(prompt("Digite um número de cartas entre 4 e 14."));

while (((nCards % 2) !== 0) || nCards < 4 || nCards > 14) {
    nCards = Number(prompt("Digite um número de cartas entre 4 e 14."));
}

const parrots = [
    "./images/img1.gif",
    "./images/img2.gif",
    "./images/img3.gif",
    "./images/img4.gif",
    "./images/img5.gif",
    "./images/img6.gif",
    "./images/img7.gif",
];

const rParrots = [];

/* Prefiro usar o Fisher Yates shuffle como metodo de randomização*/
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function randomParrots(num) {
    shuffleArray(parrots);
    for (let i = 0; i < (num / 2); i++) {
        rParrots.push(parrots[i]);
        rParrots.push(parrots[i]);
    }
    shuffleArray(rParrots);
}

function addCards() {
    randomParrots(nCards);
    let cont = 0;
    const game = document.querySelector('.container');
    while (cont < nCards) {
        game.innerHTML += `
        <div data-test="card" onclick="flipCard(this)" class="card">
            <div class="front-face face">
                <img data-test="face-down-image" src="./images/back.png" alt="">
            </div>
            <div class="back-face face">
                <img data-test="face-up-image" src="${rParrots[cont]}" alt="">
            </div>
        </div>`;
        cont++;
    }
}

addCards()

let rounds = 0;
let flippedCards = 0;
let flipedPar = 0;
let srcCard = "";

function checkPar(srcw, card){
    if (srcw.querySelector('img').src === card.querySelector('.back-face>img').src){
        srcCard = "";
        flippedCards = 0;
        flipedPar++;
    }else if(srcw.querySelector('img').src !== card.querySelector('.back-face>img').src){
        srcCard = "";
        srcw.parentNode.classList.remove('card-flipped');
        card.classList.remove('card-flipped');
        flippedCards = 0;
    }
    if(flipedPar === nCards/2){
        prompt(`Você ganhou em ${rounds} jogadas! A duração do jogo foi de Y segundos!`)
    }
}

function flipCard(selecionado) {
    if ((selecionado.classList.contains('card-flipped') === false) && flippedCards < 1) {
        selecionado.classList.add('card-flipped');
        srcCard = selecionado.querySelector('.back-face');
        flippedCards++;
        rounds++;
    }else if((selecionado.classList.contains('card-flipped') === false) && flippedCards === 1){
        selecionado.classList.add('card-flipped');
        flippedCards++;
        rounds++;
        setTimeout(checkPar, 1000, srcCard, selecionado)
    }
}