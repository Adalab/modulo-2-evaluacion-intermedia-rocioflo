'use strict';

//Constantes

const inputNumber = document.querySelector('.js_input');
const inputButton = document.querySelector('.js_btn');
const textHint = document.querySelector('.js_hint');
const textTries = document.querySelector('.js_tries');


//Función del número aleatorio

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100)

console.log(`Número a adivinar: ${randomNumber}`);

//Input del botón

function guessNumber() {
    const inputGuess = inputNumber.value;
    const guess = parseInt(inputGuess);

    if (guess === randomNumber) {
        textHint.innerHTML = "¡Has ganado, campeona!";
    }
    else if (guess > randomNumber && guess <= 100) {
        textHint.innerHTML = "¡Demasiado alto!";
    }
    else if (guess < randomNumber) {
        textHint.innerHTML = "¡Demasiado bajo!";
    }
    else {
        textHint.innerHTML = "El número debe estar entre 1 y 100";
    }
}

//Función jefa, cuentaclicks y listener

let countTries = 0;

function handleClick(ev) {
    ev.preventDefault();
    guessNumber();

    countTries += 1;
    console.log(`Número de intentos: ${countTries}`);
    textTries.innerHTML = `Número de intentos: ${countTries}`;
};

inputButton.addEventListener('click', handleClick);