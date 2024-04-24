let gameSeq = [];
let userSeq = [];
let btnColor = ["red", "yellow", "blue", "green"];
let level = 0; 
let started = false;

let h2 = document.querySelector("h2");

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 1000);
} 
.
function levelUp() {
    level++;
    h2.innerText = `Level ${level}`
    let randNo = Math.floor(Math.random() * 4);
    let randColor = btnColor[randNo];
    let randBtn = document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
}
document.addEventListener("keypress", function() {
    if(started == false) {
        levelUp();
        started = true;
    }
});