let nCards = prompt("Digite um número de cartas entre 4 e 14.")


while (((nCards % 2) !== 0) || nCards < 4 || nCards > 14) {
    nCards = prompt("Digite um número de cartas entre 4 e 14.")
}

function addCards() {
    let cont = 0;
    const game = document.querySelector('.container');
    
    while(cont < nCards){
        game.innerHTML += `
        <div data-test="card" onclick="flipCard(this)" class="card">
            <div class="front-face face">
                <img data-test="face-down-image" src="./images/back.png" alt="">
            </div>
            <div class="back-face face">
                <img data-test="face-up-image" src="" alt="">
            </div>
        </div>`
        cont ++;
    }
}

addCards()


function flipCard(selecionado) {
    selecionado.classList.add('card-fliped');
}