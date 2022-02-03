/*
Define variables that hold application state, cache DOM elements, hold lookup data (constants), etc.
Select elements in the DOM.
Listen for browser events, such as click, being dispatched by DOM elements.
Manipulate a DOM element's content and style.
*/


let result;
let color;

/*cached elements*/
const input = document.getElementById('input');
const count = document.getElementById('count');
const controls = document.getElementById('controls');

/*functions*/
function init () {
    result = 0;
    render();
}

init();

function render () {
    count.textContent = result;
    count.style.color = color;
}

function calc (e) {
    if (e.target.id === 'plus') {
        result += parseInt(input.value);
    } else if (e.target.id === 'minus') {
        result -= parseInt(input.value);
    }

    color = (result >= 0) ? 'black' : 'red';
    render();
}

/*event listeners*/
controls.addEventListener('click', calc);