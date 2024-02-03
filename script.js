const resultElem = document.getElementById('result');

function display(value) {
    resultElem.value += value;
}

function clearDisplay() {
    resultElem.value = '';
}

function calculateResult() {
    try {
        resultElem.value = eval(resultElem.value);
    } catch(error) {
        resultElem.value = 'Error'
    }
}

function clearFirst() {
    const resultElemCurrentValue = resultElem.value;
    resultElem.value = resultElemCurrentValue.substring(0, resultElemCurrentValue.length - 1);
}