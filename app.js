// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");
// let drawContainer = document.querySelector(".draw-container");

// let turnO = true;

// const winPatterns = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8]
// ];

// const enableBoxes = () => {
//     for(let box of boxes){
//         box.disabled = false;
//         box.innerText = "";
//         box.style.backgroundColor = "rgb(205, 211, 215)";
//     }
// };

// const disableBoxes = () => {
//     for(let box of boxes){
//         box.disabled = true;
//     }
// };

// const resetGame = () => {
//     turnO = true;
//     enableBoxes();
//     msgContainer.classList.add("hide");
//     drawContainer.classList.add("draw-hide");
// };

// const highlightWinner = (pattern) => {
//     pattern.forEach(index => {
//         boxes[index].style.backgroundColor = "#9AE6B4";
//     });
// };

// const showWinner = (winner) => {
//     msg.innerText = `Congratulations, winner is ${winner}`;
//     msgContainer.classList.remove("hide");
//     drawContainer.classList.add("draw-hide");
//     disableBoxes();
// };

// const checkWinner = () => {
//     for(let pattern of winPatterns){
//         let pos1 = boxes[pattern[0]].innerText;
//         let pos2 = boxes[pattern[1]].innerText;
//         let pos3 = boxes[pattern[2]].innerText;

//         if(pos1 !== "" && pos1 === pos2 && pos2 === pos3){
//             showWinner(pos1);
//             highlightWinner(pattern);
//             return; // stop checking
//         }
//     }
// };

// const checkForDraw = () => {
//     let filled = 0;
//     boxes.forEach((box) => {
//         if (box.innerText !== "") filled++;
//     });

//     if (filled === 9) {
//         drawContainer.classList.remove("draw-hide");
//         msgContainer.classList.add("hide");
//         disableBoxes();
//     }
// };

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         if(turnO){
//             box.innerText = "O";
//             box.style.color = "green";
//             turnO = false;
//         } else {
//             box.innerText = "X";
//             box.style.color = "red";
//             turnO = true;
//         }

//         box.disabled = true;
        
//         checkWinner();
//         checkForDraw();
//     });
// });

// newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let drawContainer = document.querySelector(".draw-container");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "rgb(205, 211, 215)";
    }
    drawContainer.classList.add("draw-hide");
};

// const resetGame = () => {
//     turnO = true;
//     enableBoxes();
//     msgContainer.classList.add("hide");
// };

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    drawContainer.classList.add("draw-hide");
};


const gameDraw = () => {
    drawContainer.classList.remove("draw-hide");
};

const checkForDraw = () => {
    let filled = 0;

    boxes.forEach((box) => {
        if (box.innerText !== "") filled++;
    });

    if (filled === 9) {
        gameDraw();
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerText = "O";
            box.style.color = "green";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "red";
            turnO = true;   // FIXED (was "true" as a STRING)
        }

        box.disabled = true;

        checkWinner();
        checkForDraw();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    msg.innerHTML = `🎉 Winner: <b>${winner}</b>`;
    msgContainer.classList.remove("hide");
    drawContainer.classList.add("draw-hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {

            // ⭐ Highlight winning boxes
            pattern.forEach(index => {
                boxes[index].style.backgroundColor = "#98f7b3";
            });

            showWinner(pos1);
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
