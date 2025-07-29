let gameseq = [];
let userseq = [];

let btns = ["yellow" , "red" , "green" , "purple" ];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelup();
    }

    
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    } , 400)
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    } , 400)
}

function levelup() {
userseq=[];
level++;
h2.innerText = `Level ${level}`;
let randIdx = Math.floor(Math.random() * 3);
let randColor = btns[randIdx];
let randbtn = document.querySelector(`.${randColor}`);
// console.log(randIdx);
// console.log(randColor);
// console.log(randbtn);
gameseq.push(randColor);
console.log(gameseq);

gameFlash(randbtn);


}

function checkAns(idx) {


if(userseq[idx] == gameseq[idx]){
    if(userseq.length == gameseq.length){
        setTimeout(levelup,1000);
    }

}
else{
    h2.innerHTML= `Game over ! Your Score was <b>${level}</b> <br> Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    } , 250)

    reset();
}


}



function btnpress() {
   let btn = this;
   userFlash(btn);
   let userColor = btn.getAttribute("id");
   userseq.push(userColor);
   checkAns(userseq.length-1);

}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click" , btnpress);
}

function reset() {
    started =false;
    gameseq = [];
    userseq = [];
    level = 0 ;

}