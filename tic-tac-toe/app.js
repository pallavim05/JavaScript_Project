let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turn0 = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (box.innerText === "") {
            if (turn0) {
                box.innerText = '0';
                turn0 = false;
            } else {
                box.innerText = 'X';
                turn0 = true;
            }
            box.style.pointerEvents = "none"; // Prevent further clicks
            checkWinner();
        }
    });
});

const checkWinner = () => {
    for (const pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner: " + pos1Val);
                disableAllBoxes();
                return;
            }
        }
    }
};

const disableAllBoxes = () => {
    boxes.forEach(box => {
        box.style.pointerEvents = "none"; // Disable all boxes after a winner is found
    });
};

// Reset button functionality
resetBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.style.pointerEvents = "auto"; // Re-enable all boxes
    });
    turn0 = true;
    console.log("Game reset");
});
