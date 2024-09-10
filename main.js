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
        return "ERROR. Can not divide by 0";
    } else {
        return a / b;
    }
}

function resetCalculator() {
    numData = [];
    operatorData = [];
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;
    displayVal.textContent = "0"; // Reset the display to "0"
}
     
// display numbers from user input and result from calculation
function display() {
    displayVal = document.querySelector(".result");
    
    // Get the input of a button pressed to display in the calculator
    const displayKey = document.querySelectorAll(".calculator button");
    displayKey.forEach(button =>{
        button.addEventListener("click", () => {

            // Handle the clear and = differently
            if(button.textContent != "Clear" && button.textContent != "=") {
                displayVal.textContent = button.textContent;
                // Checks if button is number or operator and push it to corresponding array
                if (!isNaN(button.textContent)) {
                    // Convert button.textContent to number and add to numData array
                    numData.push(button.textContent*1);
    
                    // Get the index of the latest number added to numData
                    let currentIndex = numData.length - 1;
    
                    if (firstNum !== undefined && operator !== undefined) {
                        secondNum = numData[currentIndex]; // New input is second number for next calculation
                        console.log(`secondNum assigned: ${secondNum}`);
                    } else {
                        firstNum = numData[currentIndex];  // First input becomes firstNum
                        console.log(`firstNum assigned: ${firstNum}`);
                    }

    
                } else {
                    // Evaluate if firstNum and secondNum are already present**
                    // If an operator is pressed and there's already a secondNum, calculate first
                    if (firstNum !== undefined && secondNum !== undefined) {
                        firstNum = operate(firstNum, secondNum, operator); // Calculate using firstNum and secondNum
                        displayVal.textContent = firstNum;  // **NEW: Display the result immediately**
                        secondNum = undefined;  // **NEW: Reset secondNum for the new calculation**
                    }
                    
                    operatorData.push(button.textContent);
                    operator = button.textContent;
                    console.log(operator);
                }
            } else if (button.textContent === "Clear") {
                resetCalculator();
            } else if (button.textContent === "=") {
                // Check if both firstNum and secondNum are defined
                if (firstNum === undefined || secondNum === undefined) {
                    displayVal.textContent = "ERROR";
                } else {
                    let result = operate(firstNum, secondNum, operator);

                    // Check if the result is an off-limit value (like division by zero)
                    if (result === "ERROR. Cannot divide by 0") {
                        displayVal.textContent = result;  // Show the error message
                        resetCalculator();  // Reset calculator immediately after showing error
                    } else {
                        displayVal.textContent = result;
                        firstNum = result;  // Store the result in firstNum for the next calculation
                        secondNum = undefined;
                        operator = undefined;
                        numData = [result];  // Reset numData to the result, so next input acts as new secondNum
                    }
                }
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