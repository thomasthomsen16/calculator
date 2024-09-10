let firstNum, secondNum, operator, result;


function add() {
}

function subtract() {

}

function multiply() {

}

function divide() {

}

// display numbers from user input and result from calculation
function display() {
    const result = document.querySelector(".result");

    // Get the input of a button pressed to display in the calculator
    const displayKey = document.querySelectorAll(".calculator button");
    displayKey.forEach(button =>{
        button.addEventListener("click", () => {
            result.textContent = button.textContent;
        })
    })
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
display();