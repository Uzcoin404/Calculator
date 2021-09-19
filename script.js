const main = document.querySelector('.main');
const calc = document.querySelector('.calc');
const calcInput = document.querySelector('.calc__input input');
const calcNumber = document.querySelectorAll('.calc__items');
const calcChar = document.querySelectorAll('.calc__char');
const calcEqual = document.querySelector('.calc__equal');
const backspace = document.querySelector('.backspace');
const calcDelete = document.querySelector('.delete');
const calcIcon = document.querySelector('#calc__icon');
const day = document.querySelector('#day');
const night = document.querySelector('#night');
for (let i = 0; i < calcNumber.length; i++) {
    calcNumber[i].addEventListener('click', function(){
        calcInput.value += calcNumber[i].innerHTML;
    });
}
function calculatorEqual(){
    let endInput = calcInput.value.substr(calcInput.value.length-1);
    if (endInput == '+' || endInput == '-' || endInput == '*' || endInput == '/' || endInput == '%' || endInput == '.') {
        calcInput.value = "couldn't equal";
    }
    else if (calcInput.value == '') {
        calcInput = 'nothing is included';
    }
    else{
        calcInput.value = eval(calcInput.value);
    }
}   
calcEqual.addEventListener('click', function(){
    calculatorEqual();
});
backspace.addEventListener('click', function(){
    calcInput.value = calcInput.value.slice(0, -1);
});
calcDelete.addEventListener('click', function(){
    calcInput.value = "";
});
day.addEventListener('click', function(){
    main.classList.add('day');
    main.classList.remove('night');
})
night.addEventListener('click', function(){
    main.classList.add('night');
    main.classList.remove('day');
})
var mousePosition,
    offset = [0,0],
    isDown = false;

calcIcon.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        calcIcon.offsetLeft - e.clientX,
        calcIcon.offsetTop - e.clientY
    ];
    this.classList.add('active');
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
    calcIcon.classList.remove('active');
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {
    
            x : event.clientX,
            y : event.clientY
    
        };
        calc.style.left = (mousePosition.x + offset[0]) + 'px';
        calc.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);  
document.addEventListener("keydown", function(event) {
    if (event.keyCode == 13) {
        calculatorEqual();
    }
    if (event.keyCode == 46) {
        calcInput.value = "";
    }
    if (event.keyCode == 8) {
        calcInput.value = calcInput.value.slice(0, -1);
    }
    if (event.keyCode == 107) {
        calcInput.value += '+';
    }
    if (event.keyCode == 109) {
        calcInput.value += '-';
    }
    if (event.keyCode == 106) {
        calcInput.value += '*';
    }
    if (event.keyCode == 111) {
        calcInput.value += '/';
    }
    if (event.keyCode == 96) {
        calcInput.value += '0';
    }
    if (event.keyCode == 97) {
        calcInput.value += '1';
    }
    if (event.keyCode == 98) {
        calcInput.value += '2';
    }
    if (event.keyCode == 99) {
        calcInput.value += '3';
    }
    if (event.keyCode == 100) {
        calcInput.value += '4';
    }
    if (event.keyCode == 101) {
        calcInput.value += '5';
    }
    if (event.keyCode == 102) {
        calcInput.value += '6';
    }
    if (event.keyCode == 103) {
        calcInput.value += '7';
    }
    if (event.keyCode == 104) {
        calcInput.value += '8';
    }
    if (event.keyCode == 105) {
        calcInput.value += '9';
    }
    if (event.keyCode == 110) {
        calcInput.value += '.';
    }
});