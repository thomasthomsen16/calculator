let firstNum, secondNum, operator, result;

let numData = [];
let operatorData = [];


function add() {
}

function subtract() {

}

function multiply() {

}

function divide() {

}

//To do: Populate array with the numbers from input and array with operator -> Have to check if input is number or operator. 

//To do: Set firstNum and secondNum to user input. firstNum can be all equal numbers in array (num%2=0) and secondNum can be all uneven numbers in array (num%2=1)

// display numbers from user input and result from calculation
function display() {
    const displayCalc = document.querySelector(".result");
    

    // Get the input of a button pressed to display in the calculator
    const displayKey = document.querySelectorAll(".calculator button");
    displayKey.forEach(button =>{
        button.addEventListener("click", () => {
            displayCalc.textContent = button.textContent;
            // Checks if button is number or operator and push it to corresponding array
            if (!isNaN(button.textContent)) {
                numData.push(button.textContent*1);
                console.log(numData);
            } else {
                operatorData.push(button.textContent);
                console.log(operatorData);
            }
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