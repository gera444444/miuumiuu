const buttonYes = document.querySelector(".да");
const buttonNo = document.querySelector(".не");

let buttonYesFontSize = 2;
let buttonNoFontSize = 2;

buttonNo.addEventListener("click", doYesMore);
buttonYes.addEventListener("click", buttonYesPushed);

function doYesMore (){
    buttonYesFontSize += .4;
    buttonYes.style.fontSize = buttonYesFontSize + "em";
    buttonNoFontSize += .2;
    buttonYes.style.fontSize = buttonNoFontSize + "em";
}

function buttonYesPushed(){
    location.href = "./page2.html";
}
