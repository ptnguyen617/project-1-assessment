/*
Define variables that hold application state, cache DOM elements, hold lookup data (constants), etc.
Select elements in the DOM.
Listen for browser events, such as click, being dispatched by DOM elements.
Manipulate a DOM element's content and style.
*/


let result;
let blackRed;

const input = document.getElementById('input');
const count = document.getElementById('count');
const controls = document.getElementById('controls');

function init () {
    result = 0;
    render();
}

init();

function render () {
    count.textContent = result;
    count.style.color = blackRed;
}

function calculate (sum) {
    if (sum.target.id === 'plus') {
        result += parseInt(input.value);
    } else if (sum.target.id === 'minus') {
        result -= parseInt(input.value);
    }

    blackRed = (result >= 0) ? 'red' : 'black';
    render();
}
controls.addEventListener('click', calculate);