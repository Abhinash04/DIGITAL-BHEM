// DOM elements
let backBtn = document.querySelector('.container .back-btn');
let scientificBtnsBox = document.querySelector('.container .scientific-btns');
let input = document.querySelector('.container .input-box .input-value');
let result = document.querySelector('.container .input-box .result');
let container = document.querySelector('.container');
let allBtns = document.querySelectorAll('.container .btn');
let box = document.getElementById("calc-display");

// Event listener for toggling scientific buttons
backBtn.addEventListener('click', () => {
    scientificBtnsBox.classList.toggle('active');
});

// Function to append the clicked button value to the display
function toScreen(x) {
    box.value += x;
}

// Function to evaluate the expression and display the result
function answer() {
    try {
        let res = eval(box.value);
        box.value = res;
        input.value = res;  
    } catch (error) {
        box.value = 'Error';
    }
}

// Function to delete the last character from the display
function deleteLastCharacter() {
    let currentInput = box.value;
    box.value = currentInput.substring(0, currentInput.length - 1);
}

// Function to handle keyboard input
function handleKeyPress(event) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '%', '.', '(', ')'].includes(key)) {
        toScreen(key);
    } else if (key === 'Enter') {
        answer();
    } else if (key === 'Backspace') {
        deleteLastCharacter();
    }
}

// Event listener for keyboard input
document.addEventListener('keydown', handleKeyPress);

// Function to calculate square
function sqr() {
    let num = parseFloat(box.value);
    box.value = num * num;
    input.value = box.value;  
}

// Function to calculate square root
function squareRoot() {
    let num = parseFloat(box.value);
    box.value = Math.sqrt(num);
    input.value = box.value;  
}

// Function to calculate cube
function cube() {
    let num = parseFloat(box.value);
    box.value = num * num * num;
    input.value = box.value;  
}

// Function to calculate cube root
function cubeRoot() {
    let num = parseFloat(box.value);
    box.value = Math.cbrt(num);
    input.value = box.value;  
}

// Function to calculate trigonometric functions
function trigFunction(func) {
    let num = parseFloat(box.value);
    switch (func) {
        case 'sin':
            box.value = Math.sin(num);
            break;
        case 'cos':
            box.value = Math.cos(num);
            break;
        case 'tan':
            box.value = Math.tan(num);
            break;
        case 'asin':
            box.value = Math.asin(num);
            break;
        case 'acos':
            box.value = Math.acos(num);
            break;
        case 'atan':
            box.value = Math.atan(num);
            break;
    }
    input.value = box.value;  // Update input to store the result
}

// Function to calculate logarithm
function log() {
    let num = parseFloat(box.value);
    box.value = Math.log10(num);
    input.value = box.value;  
}

// Function to calculate natural logarithm
function ln() {
    let num = parseFloat(box.value);
    box.value = Math.log(num);
    input.value = box.value;  
}

// Function to clear the display
function clearScreen() {
    box.value = '';
    input.value = '';  
}

// Event listeners for button clicks
for (let item of allBtns) {
    item.addEventListener('click', (e) => {
        let btnText = e.target.innerHTML;
        if (btnText == '×') {
            btnText = '*';
        } else if (btnText == '÷') {
            btnText = '/';
        } else if (btnText == '=') {
            answer();
            return;
        } else if (btnText == 'π') {
            btnText = '3.14';
        } else if (btnText == 'e') {
            btnText = '2.71';
        }
        input.value += btnText;
        toScreen(btnText);
    });
}

// Scientific calculator functions
let calculate = () => {
    result.value = eval(input.value);
    input.value = result.value;  
    box.value = result.value;    
};

let sin = () => {
    result.value = Math.sin(result.value);
    input.value = result.value;  
    box.value = result.value;    
};

let cos = () => {
    result.value = Math.cos(result.value);
    input.value = result.value;  
    box.value = result.value;    
};

let tan = () => {
    result.value = Math.tan(result.value);
    input.value = result.value;  
    box.value = result.value;    
};

let fact = () => {
    var i, number, x;
    x = 1;
    number = result.value;
    for (i = 1; i <= number; i++) {
        x = x * i;
    }
    result.value = x;
    input.value = result.value;  
    box.value = result.value;    
};

let pi = () => {
    input.value += '3.14';
    toScreen('3.14');
};

let root = () => {
    result.value = Math.sqrt(result.value, 2);
    input.value = result.value;  
    box.value = result.value;    
};

let e = () => {
    input.value += '2.71';
    toScreen('2.71');
};

let pow = () => {
    result.value = Math.pow(result.value, 2);
    input.value = result.value;  
    box.value = result.value;    
};

// Backspace functionality
let backSpace = () => {
    input.value = input.value.substr(0, input.value.length - 1);
    box.value = box.value.substr(0, box.value.length - 1);  
};

// Adding event listener for backspace button
document.querySelector('.backspace-btn').addEventListener('click', backSpace);