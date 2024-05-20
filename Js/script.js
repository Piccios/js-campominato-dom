// Creo una griglia con 100 boxes

const gridElement = document.querySelector('section#grid_100');

const playButton = document.querySelector('button#play');


playButton.addEventListener('click', function () {
    generateNewGame(100, gridElement)
})

function generateNewGame(numberOfCells, containerElement,bombs) {
    containerElement.innerHTML = '';
    // Creo una lista di numeri casuali da 1 a "numero di celle"
    for (let index = 0; index < numberOfCells; index++) {
        const squareElement = document.createElement('article');
        squareElement.classList.add('square');
    // Event listener per il click su ogni quadrato
    squareElement.addEventListener('click', function () {
        if (bombs.includes(index + 1)) {
        squareElement.classList.add('bomb');
        alert('Hai cliccato una bomba! Hai perso!');
        } else {
        squareElement.classList.add('active');
        }
},  { once: true });

        squareElement.append((index) + 1);
        gridElement.appendChild(squareElement);
        const refreshButton = document.querySelector('button#play');

        refreshButton.addEventListener('click', function () {
            squareElement.classList.remove('active');
        })
    }
}


// Funzione per generare le bombe
function generateBombs(numberOfCells) {
    let bombs = [];
    while (bombs.length < 16) {
        let randomNumber = Math.floor(Math.random() * numberOfCells) + 1;
        if (!bombs.includes(randomNumber)) {
            bombs.push(randomNumber);
        }
    }
    return bombs;
}




