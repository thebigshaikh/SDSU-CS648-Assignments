//STEP 1
function halfNumber(number){
    var b = number/2;
    window.console.log("Half of ",number, " is ", b);
    return b;
}   



//STEP 2
function squareNumber(number){
    var result = number * number;
    window.console.log("The result of squaring the number ", number, " is ", result);
    return result;
}

//STEP 3
function percentOf(a, b)
{
    var result = a/b * 100;
    window.console.log(a," is ",result, "% of ",b);
    return result;
}

//STEP 4
function findModulus(a, b)
{
    var result = a % b;
    window.console.log(result," is the modulus of ",a, " and ",b);
    return result;
}

//STEP 5

function sumNumbers(numbers){
    var sum = 0;
    var index = 0;
    for (index = 0; index < numbers.length; index++) {
        sum = sum + parseInt(numbers[index]);
        window.console.log(sum);
    }
    return sum;
}

function main() {
    var choice, number, number1, number2, numberArray;
    while(choice !== 6) {
        choice = parseInt(window.prompt("Menu:\n1: Half a Number\n2: Square a Number\n3: Percent of a Number\n4: Modulus of Numbers\n5: Find sum of numbers\n6: Exit"));
        if(choice === 1) {
            number = window.prompt("Enter a number");
            window.alert(halfNumber(number));
        }
        else if(choice === 2) {
            number = window.prompt("Enter a number");
            window.alert(squareNumber(number));
        }
        else if(choice === 3) {
            number1 = window.prompt("Enter first number");
            number2 = window.prompt("Enter second number");
            window.alert(percentOf(number1, number2));
        }
        else if(choice === 4) {
            number1 = window.prompt("Enter first number");
            number2 = window.prompt("Enter second number");
            window.alert(findModulus(number1, number2));
        }
        else if(choice === 5) {
            number = window.prompt("Enter numbers separated by commas");
            numberArray = number.split(",");
            window.alert(sumNumbers(numberArray));
        }
        else if(choice === 6){
            break;
        }
    }
}

main();