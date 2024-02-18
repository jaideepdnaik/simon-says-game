let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game Started!");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 800);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;


    let randomIndex = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIndex];
    let randomButton = document.querySelector(`.${randomColor}`)
        // console.log(randomIndex);
        // console.log(randomColor);
        // console.log(randomButton);

    gameSeq.push(randomColor);
    console.log(gameSeq);

    gameFlash(randomButton);
}

function checkAns(index) {
    // console.log("Current Level : ", level);
    // let index = level - 1;

    if (userSeq[index] == gameSeq[index]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 500);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}