function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        alert("NO");
        return "Clear and try again";
    }
    return a / b;
}

function operate(operator, num1, num2) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    }
}

function clearAll() {
    num1 = '';
    operator = '';
    num2 = '';
    solution = '';
    opQuery.textContent = operator;
    firstNumber.textContent = num1;
    secondNumber.textContent = num2;
}

function doesEquals() {
    if (operator == '+') {
        solution = add(parseInt(num1),parseInt(num2));
    } else if (operator == '-') {
        solution = subtract(parseInt(num1),parseInt(num2));
    } else if (operator == '*') {
        solution = multiply(parseInt(num1),parseInt(num2));
    } else if (operator == '/') {
        solution = divide(parseInt(num1),parseInt(num2));
    }
    firstNumber.textContent = solution;
}

let num1 = '';
let operator = '';
let num2 = '';
let solution = '';

const numpad = document.querySelector(".numpad");
for (let i = 0; i < 10; i++) {
    const btn = document.createElement("button");
    btn.textContent = `${i}`;
    btn.classList.add("digit");
    numpad.append(btn);
}

const operations = document.querySelector(".operations");
const op = ["+", "-", "*", "/", "=", "clear"];
for (opButton in op) {
    const btn = document.createElement("button");
    btn.textContent = `${op[opButton]}`;
    btn.classList.add("action");
    if (opButton < 4) {
        btn.classList.add("arithmetic");
    } else if (opButton == 4) {
        btn.classList.add("equal");
    } else {
        btn.classList.add("clear");
    }
    operations.append(btn);
}

const firstNumber = document.querySelector(".num1");
const secondNumber = document.querySelector(".num2");
const opQuery = document.querySelector(".operatorDisplay");

const digits = document.querySelectorAll(".digit");
digits.forEach(num => {
    num.addEventListener("click", () => {
        if (!operator) {
            num1 += num.textContent;
            firstNumber.textContent = num1;
        } else {
            num2 += num.textContent;
            secondNumber.textContent = num2;
        }
    })
});

const math = document.querySelectorAll(".arithmetic");
math.forEach(sym => {
    sym.addEventListener("click", () => {
        if (num1 && num2) {
            doesEquals();
            num1 = solution;
            solution = '';
            num2 = '';
            secondNumber.textContent = num2;
        }
        operator = sym.textContent;
        opQuery.textContent = operator;
    })
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", clearAll);

const answer = document.querySelector(".answer");

const equals = document.querySelector(".equal");
equals.addEventListener("click", doesEquals);

const allButtons = document.querySelectorAll("button");
allButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (solution) {
            let tempSolution = solution;
            clearAll();
            num1 = tempSolution;
            firstNumber.textContent = num1;
        }
    })
})

