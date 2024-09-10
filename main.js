let firstNum, secondNum, operator;


function add() {

}

function subtract() {

}

function multiply() {

}

function divide() {

}


// Performs the calculation using the add(), subtract(), multiply() and divide()
function operate(firstNum,secondNum,operator) {

    //Checks which operator the user has selected and calls the corresponding function
    if(operator === "+") {
        add(firstNum,secondNum)
    } else if (operator === "-") {
        subtract(firstNum,secondNum)
    } else if (operator === "*") {
        multiply(firstNum,secondNum)
    } else if (operator === "/"){
        divide(firstNum,secondNum)
    }
}