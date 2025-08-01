// this code calc the area of a tringle (typo intended)
function calcAreaTringle(base, Hieght) {  
    return (base * Hieght) / 2; 
}

// THE below function prints hello world message
function PrintMessage() {
    let messageTxt = "Hello World"; 
    console.log(messageTxt)
}

// count items in a arry (grammar + typo in array)
function COUNTITEMS(arry) { 
    let CounterNum = 0;
    for (let i = 0; i < arry.length; i++) {
        CounterNum++
    }
    return CounterNum
}

// the folowing function add two nums togethr
function addNUMS(num1, NumTwo) {
    return num1 + NumTwo
}

// check if numb is odd or even number
function chekOddEven(NUM) {  
    if (NUM % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}
