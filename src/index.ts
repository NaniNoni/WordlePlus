let word = "ptaki"
let wordAsArray = word.split("");

const lines = {
    one: document.getElementsByClassName("line-1"),
    two: document.getElementsByClassName("line-2"),
    three: document.getElementsByClassName("line-3"),
    four: document.getElementsByClassName("line-4"),
    five: document.getElementsByClassName("line-5"),
    six: document.getElementsByClassName("line-6")
};


const keyboard_buttons = document.getElementsByClassName("keyboard-button");

const current = {
    line: lines.one,
    box: () => <HTMLInputElement>current.line[0]
};

const q_btn = <HTMLButtonElement>keyboard_buttons[0];
const w_btn = <HTMLButtonElement>keyboard_buttons[1];
const e_btn = <HTMLButtonElement>keyboard_buttons[2];
const r_btn = <HTMLButtonElement>keyboard_buttons[3];
const t_btn = <HTMLButtonElement>keyboard_buttons[4];
const y_btn = <HTMLButtonElement>keyboard_buttons[5];

AddEventListeners();


function AddEventListeners () {
    q_btn.onclick = () => {
        alert("Q");
    }
    w_btn.onclick = () => {
        alert("W");
    }
    e_btn.onclick = () => {
        alert("E");
    }
    r_btn.onclick = () => {
        alert("R");
    }
    t_btn.onclick = () => {
        alert("T");
    }
    y_btn.onclick = () => {
        alert("Y");
    }
}
function AddLetter(letter: string) {
    current.box().value = letter;
}

// An example of a use case:
// CompareWords(CheckLine(current.line));

function CheckLine(line) : string[] {
    let letters: string[] = [];

    letters[0] = (<HTMLInputElement>line[0]).value;
    letters[1] = (<HTMLInputElement>line[1]).value;
    letters[2] = (<HTMLInputElement>line[2]).value;
    letters[3] = (<HTMLInputElement>line[3]).value;
    letters[4] = (<HTMLInputElement>line[4]).value;

    return letters;
}

function CompareWords (playerInput: string[]) {
    let letter_1 = playerInput[0] === wordAsArray[0];
    let letter_2 = playerInput[1] === wordAsArray[1];
    let letter_3 = playerInput[2] === wordAsArray[2];
    let letter_4 = playerInput[3] === wordAsArray[3];
    let letter_5 = playerInput[4] === wordAsArray[4];

    const wordsAreCorrect = letter_1 && letter_2 && letter_3 && letter_4 && letter_5;

    if (wordsAreCorrect) {
        Win ();
    }
}

function Win () {
    alert("YOU WON");
}








/*
function CheckAllSquares (): string[] {
    // Setting all of the squares
    let squares: string[] = [];
    squares[0] = (<HTMLInputElement>line_1[0]).value;
    squares[1] = (<HTMLInputElement>line_1[1]).value;
    squares[2] = (<HTMLInputElement>line_1[2]).value;
    squares[3] = (<HTMLInputElement>line_1[3]).value;
    squares[4] = (<HTMLInputElement>line_1[4]).value;

    squares[5] = (<HTMLInputElement>line_2[0]).value;
    squares[6] = (<HTMLInputElement>line_2[1]).value;
    squares[7] = (<HTMLInputElement>line_2[2]).value;
    squares[8] = (<HTMLInputElement>line_2[3]).value;
    squares[9] = (<HTMLInputElement>line_2[4]).value;

    squares[10] = (<HTMLInputElement>line_3[0]).value;
    squares[11] = (<HTMLInputElement>line_3[1]).value;
    squares[12] = (<HTMLInputElement>line_3[2]).value;
    squares[13] = (<HTMLInputElement>line_3[3]).value;
    squares[14] = (<HTMLInputElement>line_3[4]).value;

    squares[15] = (<HTMLInputElement>line_4[0]).value;
    squares[16] = (<HTMLInputElement>line_4[1]).value;
    squares[17] = (<HTMLInputElement>line_4[2]).value;
    squares[18] = (<HTMLInputElement>line_4[3]).value;
    squares[19] = (<HTMLInputElement>line_4[4]).value;

    squares[20] = (<HTMLInputElement>line_5[0]).value;
    squares[21] = (<HTMLInputElement>line_5[1]).value;
    squares[22] = (<HTMLInputElement>line_5[2]).value;
    squares[23] = (<HTMLInputElement>line_5[3]).value;
    squares[24] = (<HTMLInputElement>line_5[4]).value;

    return squares;
}
*/