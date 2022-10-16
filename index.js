var numberOfPlayButtons = document.querySelectorAll(".play").length;
var numberOfPauseButtons = document.querySelectorAll(".pause").length;

const trap = new Audio("sounds/trap.mp3");
const trapMetal = new Audio("sounds/trap-metal.mp3");
const boombap = new Audio("sounds/boombap.mp3");
const phonk = new Audio("sounds/phonk.mp3");
const drill = new Audio("sounds/drill.mp3");
const edm = new Audio("sounds/edm.mp3");



for (var i = 0; i < numberOfPlayButtons; i++){
    document.querySelectorAll(".play")[i].addEventListener("click", handleClick);
}

for (var i = 0; i < numberOfPauseButtons; i++){
    document.querySelectorAll(".pause")[i].addEventListener("click", handleClick2)
}

function handleClick2(){
    var buttonInnerHTML = this.className;
    pauseSound(buttonInnerHTML.split(" ")[0]);
}

function handleClick(){
    var buttonInnerHTML = this.className;
    makeSound(buttonInnerHTML.split(" ")[0]);
}

function pauseSound(key){
    switch (key){
        case "trap":
            trap.pause();
            break;
        
        case "trap-metal":
            trapMetal.pause();
            break;
        
        case "boombap":
            boombap.pause();
            break;

        case "phonk":
            phonk.pause();
            break;

        case "drill":
            drill.pause();
            break;

        case "edm":
            edm.pause();
            break;
        default: console.log();
    }
}

function makeSound(key){
    switch (key){
        case "trap":
            // var trap = new Audio("sounds/trap.mp3");
            trap.play();
            break;
        
        case "trap-metal":
            // var trapMetal = new Audio("sounds/trap-metal.mp3");
            trapMetal.play();
            break;
        
        case "boombap":
            // var boombap = new Audio("sounds/boombap.mp3");
            boombap.play();
            break;

        case "phonk":
            // var phonk = new Audio("sounds/phonk.mp3");
            phonk.play();
            break;

        case "drill":
            // var drill = new Audio("sounds/drill.mp3");
            drill.play();
            break;

        case "edm":
            // var edm = new Audio("sounds/edm.mp3");
            edm.play();
            break;
        default: console.log();
    }
}