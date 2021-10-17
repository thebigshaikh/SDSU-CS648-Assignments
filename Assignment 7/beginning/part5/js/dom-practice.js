/*eslint-env browser*/

//STEP 1
function alertMessage(){
    window.alert("I have been clicked 1");

}
//STEP 2
function init (){
var clickbutton = document.getElementById("domElement");
clickbutton.onclick = function(){
    window.alert("I have been clicked 2");
};

//STEP 3
var clickbuttonEL = document.getElementById("eventListener");
clickbuttonEL.addEventListener("click", printMessage);

function printMessage() {
    window.alert("I have been clicked 3");
};

//STEP 4
var clickbuttonEL2 = document.getElementById("eventListener2");
clickbuttonEL2.addEventListener("click", function () {
    window.alert("I have been clicked 4");
});
};
//STEP 5

window.addEventListener("load", init);
