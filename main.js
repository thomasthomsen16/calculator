let firstNum, secondNum, operator, displayVal;

let numData = [];
let operatorData = [];

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if (b === 0) {
        alert("Error. Can not divide by 0");  // Handle divide by zero case
        return "ERROR";
    } else {
        return a / b;
    }
}
     
// display numbers from user input and result from calculation
function display() {
    displayVal = document.querySelector(".result");
    
    // Get the input of a button pressed to display in the calculator
    const displayKey = document.querySelectorAll(".calculator button");
    displayKey.forEach(button =>{
        button.addEventListener("click", () => {
            //  Handle the "Clear" button separately
            if(button.textContent === "Clear") {
                
            }
            if(button.textContent != "Clear" && button.textContent != "=") {
                displayVal.textContent = button.textContent;
                // Checks if button is number or operator and push it to corresponding array
                if (!isNaN(button.textContent)) {
                    // Convert button.textContent to number and add to numData array
                    numData.push(button.textContent*1);
    
                    // Get the index of the latest number added to numData
                    let currentIndex = numData.length - 1;
    
                    // Assign values to firstNum and secondNum based on index
                    if (currentIndex % 2 === 0) {
                        firstNum = numData[currentIndex];
                        console.log(`firstNum assigned: ${firstNum}`);
                    } else {
                        secondNum = numData[currentIndex];
                        console.log(`secondNum assigned: ${secondNum}`);
                    }
    
                } else {
                    operatorData.push(button.textContent);
                    operator = button.textContent;
                    console.log(operator);
                }
            } else if (button.textContent === "Clear") {
                // Clears all array and variables used in the calculator at btn press "Clear"
                numData = [];
                operatorData = [];
                firstNum = undefined;
                secondNum = undefined;
                operator = undefined;
                displayVal.textContent = "0";  // Reset to "0" or an empty string
                return; // Do nothing, as the clear button is already handled
            } else if (button.textContent === "=") {
                displayVal.textContent = operate(firstNum,secondNum,operator);
            }
        })
    })
}

// Performs the calculation using the add(), subtract(), multiply() and divide()
function operate(firstNum,secondNum,operator) {

    //Checks which operator the user has selected and calls the corresponding function
    if(operator === "+") {
        return add(firstNum,secondNum)
    } else if (operator === "-") {
        return subtract(firstNum,secondNum)
    } else if (operator === "*") {
        return multiply(firstNum,secondNum)
    } else if (operator === "/"){
        return divide(firstNum,secondNum)
    }
}
display();
