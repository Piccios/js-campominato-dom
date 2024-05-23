
const gridElement = document.querySelector('section#grid_100');

const playButton = document.querySelector('button#play');

const scoreEl = document.querySelector('div#score')
let points = 0

playButton.addEventListener('click', function () {
    const bombs = generateBombs(100);
    generateNewGame(100, gridElement, bombs)
})



// Functions //////////////////////////////////////////////////


// Function that generates a new game//////////////////////////

function generateNewGame(numberOfCells, containerElement, bombs) {
    containerElement.innerHTML = '';
    for (let index = 0; index < numberOfCells; index++) {
        const squareElement = document.createElement('article');
        squareElement.classList.add('square');
        squareElement.addEventListener('click', function () {
            if (bombs.includes(index + 1)) {
                squareElement.classList.add('bomb');
                alert('Hai cliccato una bomba! Hai perso!');
                revealBombs(containerElement, bombs);
                endOfGame(containerElement);
            } else {
                squareElement.classList.add('active');
                points++;
                scoreElement.textContent = `Score: ${points}`;
            } console.log((index) + 1) + "points: " + points;
        }, { once: true });
        squareElement.append((index) + 1);
        gridElement.appendChild(squareElement);
    }
}



// Function to generate bombs in a random pattern ////////////////

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



// Function that reveals the bombs on the grid //////////////////

function revealBombs(containerElement, bombs) {
    const squares = containerElement.querySelectorAll('.square');
    squares.forEach((square, index) => {
        if (bombs.includes(index + 1)) {
            square.classList.add('revealed-bomb');
        }
    });
}



// Function that disables the grid when the game ends ////////////

function endOfGame(containerElement) {
    const squares = containerElement.querySelectorAll('.square');
    squares.forEach(square => {
        square.classList.add('disable');
    })
}





