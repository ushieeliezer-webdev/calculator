const calculationBox = document.getElementById('calculation-box');
const digitsBtns = document.querySelectorAll(".digits-container input[type='button']");
const deleteBtn = document.getElementById('delete-btn');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const remainder = document.getElementById('remainder');
const caret = document.getElementById('caret');
const calculate = document.getElementById('calculate');

digitsBtns.forEach(digitsBtn => {
    digitsBtn.addEventListener('click', () => {
        calculationBox.value += digitsBtn.value;
    })
})

deleteBtn.addEventListener('click', () => {
    calculationBox.value = calculationBox.value.slice(0, -1);
})

multiply.addEventListener('click', () => {
    calculationBox.value += '*';
})

plus.addEventListener('click', () => {
    calculationBox.value += '+';
})

minus.addEventListener('click', () => {
    calculationBox.value += '-';
})

divide.addEventListener('click', () => {
    calculationBox.value += '/';
})

remainder.addEventListener('click', () => {
    calculationBox.value += '%';
})

caret.addEventListener('click', () => {
    calculationBox.value += '^';
})

calculate.addEventListener('click', () => {
    const expression = calculationBox.value.replace(/\^/g, '**');
    calculationBox.value = eval(expression);
})