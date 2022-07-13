let word = "ptaki";
let wordAsArray = word.split("");
const line_1 = document.getElementsByClassName("line-1");
const line_2 = document.getElementsByClassName("line-2");
const line_3 = document.getElementsByClassName("line-3");
const line_4 = document.getElementsByClassName("line-4");
const line_5 = document.getElementsByClassName("line-5");
const lines = {
    one: line_1,
    two: line_2,
    three: line_3,
    four: line_4,
    five: line_5
};
const keyboard_buttons = document.getElementsByClassName("keyboard-button");
const current = {
    line: lines.one,
    box: this.line[0]
};
let a_btn = keyboard_buttons[0];
function AddEventListeners() {
    //a_btn.addEventListener("click", AddLetter);
}
function AddLetter(letter) {
    current.box.value = letter;
}
CompareWords(CheckLine(lines.one));
function CheckLine(line) {
    let letters = [];
    letters[0] = line[0].value;
    letters[1] = line[1].value;
    letters[2] = line[2].value;
    letters[3] = line[3].value;
    letters[4] = line[4].value;
    return letters;
}
function CompareWords(playerInput) {
    let letter_1 = playerInput[0] === wordAsArray[0];
    let letter_2 = playerInput[1] === wordAsArray[1];
    let letter_3 = playerInput[2] === wordAsArray[2];
    let letter_4 = playerInput[3] === wordAsArray[3];
    let letter_5 = playerInput[4] === wordAsArray[4];
    const wordsAreCorrect = letter_1 && letter_2 && letter_3 && letter_4 && letter_5;
    if (wordsAreCorrect) {
        Win();
    }
}
function Win() {
    alert("YOU WON");
}
function CheckAllSquares() {
    // Setting all of the squares
    let squares = [];
    squares[0] = line_1[0].value;
    squares[1] = line_1[1].value;
    squares[2] = line_1[2].value;
    squares[3] = line_1[3].value;
    squares[4] = line_1[4].value;
    squares[5] = line_2[0].value;
    squares[6] = line_2[1].value;
    squares[7] = line_2[2].value;
    squares[8] = line_2[3].value;
    squares[9] = line_2[4].value;
    squares[10] = line_3[0].value;
    squares[11] = line_3[1].value;
    squares[12] = line_3[2].value;
    squares[13] = line_3[3].value;
    squares[14] = line_3[4].value;
    squares[15] = line_4[0].value;
    squares[16] = line_4[1].value;
    squares[17] = line_4[2].value;
    squares[18] = line_4[3].value;
    squares[19] = line_4[4].value;
    squares[20] = line_5[0].value;
    squares[21] = line_5[1].value;
    squares[22] = line_5[2].value;
    squares[23] = line_5[3].value;
    squares[24] = line_5[4].value;
    return squares;
}
