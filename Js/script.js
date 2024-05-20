// Creo una griglia con 100 boxes

const gridElement = document.querySelector('section#grid_100');

const playButton = document.querySelector('button#play');


playButton.addEventListener('click', function () {
    const bombs = generateBombs(100);
    generateNewGame(100, gridElement, bombs)
})

function generateNewGame(numberOfCells, containerElement, bombs) {
    containerElement.innerHTML = '';
    // Ciclo per creare i quadrati della griglia    
    for (let index = 0; index < numberOfCells; index++) {
        const squareElement = document.createElement('article');
        squareElement.classList.add('square');
        // Event listener per il click su ogni quadrato
        squareElement.addEventListener('click', function () {
            if (bombs.includes(index + 1)) {
                squareElement.classList.add('bomb');
                alert('Hai cliccato una bomba! Hai perso!');
                revealBombs(containerElement, bombs);
                endOfGame(containerElement);
            } else {
                squareElement.classList.add('active');
            } console.log((index) +1 );
        }, { once: true });

        squareElement.append((index) + 1);
        gridElement.appendChild(squareElement);

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

// Funzione per rivelare tutte le bombe

function revealBombs(containerElement, bombs) {
    const squares = containerElement.querySelectorAll('.square');
    squares.forEach((square, index) => {
        if (bombs.includes(index + 1)) {
            square.classList.add('revealed-bomb');
        }
    });
}

// Funzione per disabilitare il gioco una volta perso

function endOfGame(containerElement) {
    const squares = containerElement.querySelectorAll('.square');
    squares.forEach(square => {
        square.classList.add('disable');
    })
}





