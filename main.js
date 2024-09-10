let firstNum, secondNum, operator, displayVal;

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
                // Convert button.textContent to number and add to numData array
                numData.push(button.textContent*1);

                // Assign values to firstNum and secondNum based on index % 2
                for (let i = 0; i < numData.length; i++) {
                    if (i%2 === 0) {
                        firstNum = numData[i]
                        console.log(`firstNum assigned: ${firstNum}`);
                    } else {
                        secondNum=numData[i]
                        console.log(`secondNum assigned: ${secondNum}`);
                    }
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