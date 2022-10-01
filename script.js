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

let sound1 = new Audio("audio/sound1.mp3");
let sound2 = new Audio("audio/sound2.mp3");
let sound3 = new Audio("audio/sound3.mp3");

for (let i = 0; i < calcNumber.length; i++) {
    calcNumber[i].addEventListener('click', function(){
        calcInput.value += calcNumber[i].innerHTML;
        playSound(sound1, "audio/sound1.mp3");
    });
}

function playSound(sound, path) {
    sound.pause();
    sound = new Audio(path);
    sound.play();
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
document.addEventListener('keydown', function(w){
    console.log(w.which);
});
calcEqual.addEventListener('click', function(){
    calculatorEqual();
    playSound(sound3, "audio/sound3.mp3");
});
backspace.addEventListener('click', function(){
    calcInput.value = calcInput.value.slice(0, -1);
    playSound(sound2, "audio/sound2.mp3");
});
calcDelete.addEventListener('click', function(){
    calcInput.value = "";
    playSound(sound2, "audio/sound2.mp3");
});
day.addEventListener('click', function(){
    main.classList.add('day');
    main.classList.remove('night');
    night.style.transform = 'rotate(360deg)'
})
night.addEventListener('click', function(){
    main.classList.add('night');
    main.classList.remove('day');
    day.style.transform = 'rotate(360deg)'
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
    if (event.keyCode == 13 || event.keyCode == 187) {
        calculatorEqual();
        playSound(sound3, "audio/sound3.mp3");
    }
    if (event.keyCode == 46) {
        calcInput.value = "";
        playSound(sound2, "audio/sound2.mp3");
    }
    if (event.keyCode == 8) {
        calcInput.value = calcInput.value.slice(0, -1);
        playSound(sound2, "audio/sound2.mp3");
    }
    if (event.keyCode == 107) {
        calcInput.value += '+';
    }
    if (event.keyCode == 109 || event.keyCode == 189) {
        calcInput.value += '-';
    }
    if (event.keyCode == 106) {
        calcInput.value += '*';
    }
    if (event.keyCode == 111) {
        calcInput.value += '/';
    }
    if (event.keyCode == 96 || event.keyCode == 48) {
        calcInput.value += '0';
    }
    if (event.keyCode == 97 || event.keyCode == 49) {
        calcInput.value += '1';
    }
    if (event.keyCode == 98 || event.keyCode == 50) {
        calcInput.value += '2';
    }
    if (event.keyCode == 99 || event.keyCode == 51) {
        calcInput.value += '3';
    }
    if (event.keyCode == 100 || event.keyCode == 52) {
        calcInput.value += '4';
    }
    if (event.keyCode == 101 || event.keyCode == 53) {
        calcInput.value += '5';
    }
    if (event.keyCode == 102 || event.keyCode == 54) {
        calcInput.value += '6';
    }
    if (event.keyCode == 103 || event.keyCode == 55) {
        calcInput.value += '7';
    }
    if (event.keyCode == 104 || event.keyCode == 56) {
        calcInput.value += '8';
    }
    if (event.keyCode == 105 || event.keyCode == 57) {
        calcInput.value += '9';
    }
    if (event.keyCode == 110) {
        calcInput.value += '.';
    }
});