var coinFlip = Math.ceil((Math.random() * 10));
window.console.log(coinFlip);
var choice = window.prompt(" Select  'Heads' or 'Tails' ");
var result;

// Points 1 to 7

// if (coinFlip<5){
//     result = "Heads"
// }
// else{
//     result = "Tails"
// }

// if(result == "Heads" && choice == "Heads") {
//     window.document.write("The flip was heads and you chose heads...you win!");
// }
// else if(result == "Heads" && choice == "Tails") {
//     window.document.write("The flip was heads but you chose tails...you lose!");
// }
// else if(result == "Tails" && choice == "Heads") {
//     window.document.write("The flip was tails but you chose heads...you lose!");
// }
// else if(result == "Tails" && choice == "Tails") {
//     window.document.write("The flip was tails and you chose tails...you win!");
// }

// Point 8

(coinFlip < 5) ? result = true : result = false;


if(result && (choice == "Heads")) {
    window.document.write("The flip was heads and you chose heads...you win!");
}

else if(result && (choice == "Tails")) {
    window.document.write("The flip was heads but you chose tails...you lose!");
}

else if(!result && (choice == "Heads")) {
    window.document.write("The flip was tails but you chose heads...you lose!");
}

else if(!result && (choice == "Tails")) {
    window.document.write("The flip was tails and you chose tails...you win!");
}