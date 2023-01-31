const display = document.querySelector('.display');

function addValue (value) {
    display.innerHTML += value;
}

function square () {
    let input = eval(display.innerHTML);
    let result = Math.pow(input, 2);
    display.innerHTML = "";
    display.innerHTML = result;
}

function squareRoot () {
    let input = eval(display.innerHTML);
    let result = Math.sqrt(input);
    display.innerHTML = "";
    display.innerHTML = result;
}

function logarithm () {
    let input = eval(display.innerHTML);
    let result = Math.log10(input);
    display.innerHTML = "";
    display.innerHTML = result;
}

function erase () {
    let value = display.innerHTML;
    value = value.substring(0, value.length-1);
    display.innerHTML = value;
}

function calculate () {
    let result = eval(display.innerHTML);
    display.innerHTML = "";
    display.innerHTML = result;
}

function clearScreen () {
    display.innerHTML = "";
}

/********************************************************************************************
ajout d'une fonctionnalité permettant d'entrer les chiffres et les opérateurs avec le clavier
*********************************************************************************************/

document.addEventListener ('keydown', (event) => {
    const keyName = event.key;
    switch (keyName) {
        case '0' : addValue(0); break;
        case '1' : addValue(1); break;
        case '2' : addValue(2); break;
        case '3' : addValue(3); break;
        case '4' : addValue(4); break;
        case '5' : addValue(5); break;
        case '6' : addValue(6); break;
        case '7' : addValue(7); break;
        case '8' : addValue(8); break;
        case '9' : addValue(9); break;
        case '+' : addValue('+'); break;
        case '-' : addValue('-'); break;
        case '/' : addValue('/'); break;
        case '*' : addValue('*'); break;
        case '(' : addValue('('); break;
        case ')' : addValue(')'); break;
        case '.' : addValue('.'); break;
        case 'Backspace' : erase(); break;
        case 'Enter' : calculate(); break;
        case '=' : calculate(); break;
    }
});

