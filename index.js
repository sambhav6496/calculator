let display = $('.display-text')
let number = $('.number')
let operator = $('.operator')
let equal = $('.equal')
let clear = $('.clear')
let userInput = true

let number1Value = "";
let operatorValue = undefined;

getNumber()
getOperator()
function getNumber(){
    number.click(function(e){
        numId = e.target.id
        number1Value = number1Value + numId
        display.text(`${number1Value}`)
})
}


function getOperator(){
    operator.click(function(e){
        operatorValue = e.target.id
        number1Value = number1Value + operatorValue
        display.text(`${number1Value}`)
    })
}

equal.click(function(){
    let result = eval(number1Value)
    display.text(`${result}`)
    number1Value = ""
})


clear.click(function(){
    number1Value =""
})