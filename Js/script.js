// Creo una griglia con 100 boxes

const gridElement = document.querySelector('section#grid_100');

const playButton = document.querySelector('button#play');


playButton.addEventListener('click', function(){
    generateNewGame(100, gridElement)
})

function generateNewGame(numberOfCells, containerElement){
    containerElement.innerHTML = '';
for (let index = 0; index < numberOfCells; index++) {
    const squareElement = document.createElement('article'); 
    squareElement.classList.add('square');
    squareElement.addEventListener('click', function(){
        squareElement.classList.add('active');
        console.log((index) + 1);
        let points = 0;
        

    }, {once : true})

    squareElement.append((index) + 1);
    gridElement.appendChild(squareElement);
    const refreshButton = document.querySelector('button#play');

refreshButton.addEventListener('click', function(){squareElement.classList.remove('active');
}) 
}}


// Creo un array di 16 numeri casuali, non ripetibili, da 1 a 100 che inseriro' nella funzione della griglia

let bombs = [];

for (let index = 0; index < 16; index++ ){
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (bombs.indexOf(randomNumber) !== bombs.index){
        bombs.push(randomNumber);
    }
    bombs
}




