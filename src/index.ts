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

const letter_holders = document.getElementsByClassName("letter-holder");

const keyboard_buttons = document.getElementsByClassName("keyboard-button");

const current = {
    boxIndex: 0,
    box: () => <HTMLInputElement>letter_holders[current.boxIndex]
};

let submitted = false;

AddKeyboardListeners();
AddSpecialListeners();

function AddKeyboardListeners () {
    const q_btn = <HTMLButtonElement>keyboard_buttons[0];
    const w_btn = <HTMLButtonElement>keyboard_buttons[1];
    const e_btn = <HTMLButtonElement>keyboard_buttons[2];
    const r_btn = <HTMLButtonElement>keyboard_buttons[3];
    const t_btn = <HTMLButtonElement>keyboard_buttons[4];
    const y_btn = <HTMLButtonElement>keyboard_buttons[5];
    const u_btn = <HTMLButtonElement>keyboard_buttons[6];
    const i_btn = <HTMLButtonElement>keyboard_buttons[7];
    const o_btn = <HTMLButtonElement>keyboard_buttons[8];
    const p_btn = <HTMLButtonElement>keyboard_buttons[9];

    q_btn.onclick = () => {
        CanSubmitAndAddLetter("q");
    }
    w_btn.onclick = () => {
        CanSubmitAndAddLetter("w");
    }
    e_btn.onclick = () => {
        CanSubmitAndAddLetter("e");
    }
    r_btn.onclick = () => {
        CanSubmitAndAddLetter("r");
    }
    t_btn.onclick = () => {
        CanSubmitAndAddLetter("t");
    }
    y_btn.onclick = () => {
        CanSubmitAndAddLetter("y");
    }
    u_btn.onclick = () => {
        CanSubmitAndAddLetter("u");
    }
    i_btn.onclick = () => {
        CanSubmitAndAddLetter("i");
    }
    o_btn.onclick = () => {
        CanSubmitAndAddLetter("o");
    }
    p_btn.onclick = () => {
        CanSubmitAndAddLetter("p");
    }
}

function AddSpecialListeners () {
    const enter_btn = <HTMLInputElement>keyboard_buttons[19];
    const del_btn = <HTMLInputElement>keyboard_buttons[27];

    enter_btn.onclick = () => {
        if (CanSubmit()) {
            Submit();
        }
    }
    del_btn.onclick = () => {
        alert("DELETE");
    }
}

function Submit () {
    if (submitted) return;
    
    current.boxIndex++;
    console.log("NEXTLINE");
    console.log(current.boxIndex);
}

function CanSubmitAndAddLetter(letter: string) : boolean {
    if (current.boxIndex <= 4) {
        if (((<HTMLInputElement>letter_holders[4]).value) !== "")
            return true;

        current.box().value = letter;
        
        if (current.boxIndex !== 4)
            current.boxIndex++;
    }
    else if (current.boxIndex <= 9) {
        if (((<HTMLInputElement>letter_holders[9]).value) !== "")
            return true;

        current.box().value = letter;
        
        if (current.boxIndex !== 9)
            current.boxIndex++;
    }
    else if (current.boxIndex <= 14) {
        if (((<HTMLInputElement>letter_holders[14]).value) !== "")
            return true;

        current.box().value = letter;
        
        if (current.boxIndex !== 14)
            current.boxIndex++;
    }
    else if (current.boxIndex <= 19) {
        if (((<HTMLInputElement>letter_holders[19]).value) !== "")
            return true;

        current.box().value = letter;
        
        if (current.boxIndex !== 19)
            current.boxIndex++;
    }
    else if (current.boxIndex <= 24) {
        if (((<HTMLInputElement>letter_holders[24]).value) !== "")
            return true;

        current.box().value = letter;
        
        if (current.boxIndex !== 24)
            current.boxIndex++;
    }
    else if (current.boxIndex <= 29) {
        if (((<HTMLInputElement>letter_holders[29]).value) !== "")
            return true;

        current.box().value = letter;
        
        if (current.boxIndex !== 29)
            current.boxIndex++;
    }
    else {
        console.log(`boxIndex: ${current.boxIndex}`);
        return true;
    }

    console.log(`boxIndex: ${current.boxIndex}`);
    current.box = () => <HTMLInputElement>letter_holders[current.boxIndex];
}

function CanSubmit() : boolean {
    if (current.boxIndex < 4) {
        current.boxIndex++;
    } else {
        return true;
    }

    console.log(`boxIndex: ${current.boxIndex}`);
    current.box = () => <HTMLInputElement>letter_holders[current.boxIndex];
}

// An example of a use case:
// CompareWords(GetLine(current.line));

function GetLine(line) : string[] {
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