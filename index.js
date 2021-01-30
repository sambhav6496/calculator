let display = $('.display-text')
let number = $('.number')
let operator = $('.operator')
let equal = $('.equal')
let clear = $('.clear')
let userInput = true

let number1Value = 0;
let number2Value = 0;
let operatorFlag = false;
let operatorValue = undefined;

getNumber()
getOperator()
function getNumber(){
    number.click(function(e){
        numId = e.target.id
        if(!operatorFlag){
            if(userInput){
                number1Value = numId.toString()
                userInput = false
            }else{
                number1Value = number1Value + numId
            }
            display.text(`${number1Value}`)
        }else{
            if(userInput){
                number2Value = numId.toString()
                userInput = false
            }else{
                number2Value = number2Value + numId
            }
            display.text(`${number2Value}`)
        }
    })
}

function getOperator(){
    operator.click(function(e){
        operatorValue = e.target.id
        console.log(operatorValue)
        operatorFlag = true
        userInput = true
    })
}

equal.click(function(){
    performOperation(number1Value, number2Value, operatorValue)
})

function performOperation(number1Input, number2Input, operatorInput){
    let result = 0
    number1Input = parseFloat(number1Input)
    number2Input = parseFloat(number2Input)
    if(operatorInput === "+"){
        result = number1Input + number2Input
    }else if(operatorInput === "-"){
        result = number1Input - number2Input
    }else if(operatorInput === "*"){
        result = number1Input * number2Input
    }else if(operatorInput === "/"){
        result = number1Input / number2Input
    }
    display.text(`${result}`)
    number1Value = result
    number2Value = 0
    userInput = true
}

clear.click(function(){
    userInput = true
    number1Value = 0;
    number2Value = 0;
    operatorFlag = false;
    operatorValue = undefined;
    display.text(`${number1Value}`)
})