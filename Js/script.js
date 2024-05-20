// Creo una griglia con 100 boxes

const gridElement = document.querySelector('section#grid_100');


for (let index = 0; index < 100; index++) {
    const squareElement = document.createElement('article'); 
    squareElement.classList.add('square');
    squareElement.addEventListener('click', function(){
        squareElement.classList.add('active');
        console.log((index) + 1);
    })

    squareElement.append((index) + 1);
    gridElement.appendChild(squareElement);
    const refreshButton = document.querySelector('button#refresh');

refreshButton.addEventListener('click', function(){squareElement.classList.remove('active');
}) 
}

