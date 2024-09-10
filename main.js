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

        

//To do: Set firstNum and secondNum to user input. firstNum can be all equal numbers in array (num%2=0) and secondNum can be all uneven numbers in array (num%2=1)

// display numbers from user input and result from calculation
function display() {
    displayVal = document.querySelector(".result");
    
    // Get the input of a button pressed to display in the calculator
    const displayKey = document.querySelectorAll(".calculator button");
    displayKey.forEach(button =>{
        button.addEventListener("click", () => {
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