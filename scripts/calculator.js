function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function square(a) {
    return a ** 2;
}

function sqrt(a) {
    return Math.sqrt(a)
}

function operate(operation, a, b) {
    let newValue;
    switch (operation) {
        case "add":
            newValue = add(a,b)
            break;
        case "subtract":
            newValue = add(a,b)
            break;
        case "multiply":
            newValue = add(a,b)
            break;
        case "divide":
            newValue = add(a,b)
            break;
        case "square":
            newValue = add(a,b)
            break;
        case "sqrt":
            newValue = add(a,b)
            break;
    }

}

module.exports = {add, subtract, divide, multiply, square, sqrt, operate}