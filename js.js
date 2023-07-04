const body = document.querySelector('body');

const button1 = document.createElement('button');
button1.textContent = "Change grid squares";
button1.style.cssText = "font-weight: bolder; width: 10%; align-self: center; margin-top: 10%; border-radius: 5px; padding: 5px; border: 2px solid rgb(90, 90, 90);"
button1.setAttribute('class', 'btn1')
body.appendChild(button1);

const container = document.createElement('container');


container.style.cssText = "display: flex; flex-wrap: wrap; height: 70%; gap: 0; margin: 1% 15%; border: 5px solid black; background-color: white;"
body.appendChild(container);

function makeGrid (squares) { 
    if (squares > 100) alert('Number too high please go below 100')
    const percentSize = (100 / squares)
    const div = [];
    for (i = 1; i <= (squares * squares); i++) {
    div[i] = document.createElement('div');
    div[i].setAttribute('id', `div${i}`)
    div[i].style.cssText = `margin: 0; flex-grow: 1; min-width: ${percentSize}%; min-height: ${percentSize}%;`;
    div[i].addEventListener('mouseover', function () {
        this.style.backgroundColor = 'blue'; 
    })
    container.appendChild(div[i]);
}};
makeGrid(24)
function removeGrid() {
    const divsList = document.querySelectorAll('div');
    for (const div of divsList) {
        div.remove();
    }
}
button1.addEventListener('click', function() {
    let squareAnswer = prompt('How many squares tall/wide do you want? (only single values are valid e.g 16 or 32 etc)')
    removeGrid()
    makeGrid(squareAnswer)
})
