let word = "ptaki"
let wordAsArray = word.split("");

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
    const a_btn = <HTMLButtonElement>keyboard_buttons[10];
    const s_btn = <HTMLButtonElement>keyboard_buttons[11];
    const d_btn = <HTMLButtonElement>keyboard_buttons[12];
    const f_btn = <HTMLButtonElement>keyboard_buttons[13];
    const g_btn = <HTMLButtonElement>keyboard_buttons[14];
    const h_btn = <HTMLButtonElement>keyboard_buttons[15];
    const j_btn = <HTMLButtonElement>keyboard_buttons[16];
    const k_btn = <HTMLButtonElement>keyboard_buttons[17];
    const l_btn = <HTMLButtonElement>keyboard_buttons[18];
    const z_btn = <HTMLButtonElement>keyboard_buttons[20];
    const x_btn = <HTMLButtonElement>keyboard_buttons[21];
    const c_btn = <HTMLButtonElement>keyboard_buttons[22];
    const v_btn = <HTMLButtonElement>keyboard_buttons[23];
    const b_btn = <HTMLButtonElement>keyboard_buttons[24];
    const n_btn = <HTMLButtonElement>keyboard_buttons[25];
    const m_btn = <HTMLButtonElement>keyboard_buttons[26];


    q_btn.onclick = () => {
        AddLetter("q");
    }
    w_btn.onclick = () => {
        AddLetter("w");
    }
    e_btn.onclick = () => {
        AddLetter("e");
    }
    r_btn.onclick = () => {
        AddLetter("r");
    }
    t_btn.onclick = () => {
        AddLetter("t");
    }
    y_btn.onclick = () => {
        AddLetter("y");
    }
    u_btn.onclick = () => {
        AddLetter("u");
    }
    i_btn.onclick = () => {
        AddLetter("i");
    }
    o_btn.onclick = () => {
        AddLetter("o");
    }
    p_btn.onclick = () => {
        AddLetter("p");
    }
    a_btn.onclick = () => {
        AddLetter("a");
    }
    s_btn.onclick = () => {
        AddLetter("s");
    }
    d_btn.onclick = () => {
        AddLetter("d");
    }
    f_btn.onclick = () => {
        AddLetter("f");
    }
    g_btn.onclick = () => {
        AddLetter("g");
    }
    h_btn.onclick = () => {
        AddLetter("h");
    }
    j_btn.onclick = () => {
        AddLetter("j");
    }
    k_btn.onclick = () => {
        AddLetter("k");
    }
    l_btn.onclick = () => {
        AddLetter("l");
    }
    z_btn.onclick = () => {
        AddLetter("z");
    }
    x_btn.onclick = () => {
        AddLetter("x");
    }
    c_btn.onclick = () => {
        AddLetter("c");
    }
    v_btn.onclick = () => {
        AddLetter("v");
    }
    b_btn.onclick = () => {
        AddLetter("b");
    }
    n_btn.onclick = () => {
        AddLetter("n");
    }
    m_btn.onclick = () => {
        AddLetter("m");
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
    
    //current.boxIndex++;

    if (CompareWords(GetWordFromLine(GetLine()))) {
        Win();
    }
}

function AddLetter(letter: string) {
    if (current.boxIndex <= 4) {
        if (((<HTMLInputElement>letter_holders[4]).value) !== "")
            return;

        current.box().value = letter;
        console.log(GetLine());

        if (current.boxIndex !== 4)
            current.boxIndex++;
    }
    else if (current.boxIndex <= 9) {
        if (((<HTMLInputElement>letter_holders[9]).value) !== "")
            return;

        current.box().value = letter;
        console.log(GetLine());

        if (current.boxIndex !== 9)
            current.boxIndex++;
    }
    else if (current.boxIndex <= 14) {
        if (((<HTMLInputElement>letter_holders[14]).value) !== "")
            return;

        current.box().value = letter;
        console.log(GetLine());

        if (current.boxIndex !== 14)
            current.boxIndex++;
    }
    else if (current.boxIndex <= 19) {
        if (((<HTMLInputElement>letter_holders[19]).value) !== "")
            return;

        current.box().value = letter;
        console.log(GetLine());

        if (current.boxIndex !== 19)
            current.boxIndex++;
    }
    else if (current.boxIndex <= 24) {
        if (((<HTMLInputElement>letter_holders[24]).value) !== "")
            return;

        current.box().value = letter;
        console.log(GetLine());

        if (current.boxIndex !== 24)
            current.boxIndex++;
    }
    else if (current.boxIndex <= 29) {
        if (((<HTMLInputElement>letter_holders[29]).value) !== "")
            return;

        current.box().value = letter;
        console.log(GetLine());

        if (current.boxIndex !== 29)
            current.boxIndex++;
    }
    else {
        console.log(`boxIndex: ${current.boxIndex}`);
        return;
    }

    console.log(`boxIndex: ${current.boxIndex}`);
    current.box = () => <HTMLInputElement>letter_holders[current.boxIndex];
}

function CanSubmit() {
    if (current.boxIndex < 4) {
        current.boxIndex++;
    } else {
        return true;
    }

    console.log(`boxIndex: ${current.boxIndex}`);
    current.box = () => <HTMLInputElement>letter_holders[current.boxIndex];
}

function GetLine() : number {
    if (current.boxIndex <= 4)
        return 1;
    
    else if (current.boxIndex > 4 && current.boxIndex <= 9)
        return 2;
    
    else if (current.boxIndex > 9 && current.boxIndex <= 14)
        return 3;
    
    else if (current.boxIndex > 14 && current.boxIndex <= 19)
        return 4;
    
    else if (current.boxIndex > 19 && current.boxIndex <= 24)
        return 5;
    
    else if (current.boxIndex > 24 && current.boxIndex <= 29)
        return 6;
    
    else {
        console.error("function GetLine() doesn't work!");
        return 0;
    }
}

function GetWordFromLine (lineNum: number) {
    if (lineNum === 1) {
        return [
            (<HTMLInputElement>letter_holders[0]).value,
            (<HTMLInputElement>letter_holders[1]).value,
            (<HTMLInputElement>letter_holders[2]).value,
            (<HTMLInputElement>letter_holders[3]).value,
            (<HTMLInputElement>letter_holders[4]).value
        ];
    }
    else if (lineNum === 2) {
        return [
            (<HTMLInputElement>letter_holders[5]).value,
            (<HTMLInputElement>letter_holders[6]).value,
            (<HTMLInputElement>letter_holders[7]).value,
            (<HTMLInputElement>letter_holders[8]).value,
            (<HTMLInputElement>letter_holders[9]).value
        ];
    }
    else if (lineNum === 3) {
        return [
            (<HTMLInputElement>letter_holders[10]).value,
            (<HTMLInputElement>letter_holders[11]).value,
            (<HTMLInputElement>letter_holders[12]).value,
            (<HTMLInputElement>letter_holders[13]).value,
            (<HTMLInputElement>letter_holders[14]).value
        ];
    }
    else if (lineNum === 4) {
        return [
            (<HTMLInputElement>letter_holders[15]).value,
            (<HTMLInputElement>letter_holders[16]).value,
            (<HTMLInputElement>letter_holders[17]).value,
            (<HTMLInputElement>letter_holders[18]).value,
            (<HTMLInputElement>letter_holders[19]).value
        ];
    }
    else if (lineNum === 5) {
        return [
            (<HTMLInputElement>letter_holders[20]).value,
            (<HTMLInputElement>letter_holders[21]).value,
            (<HTMLInputElement>letter_holders[22]).value,
            (<HTMLInputElement>letter_holders[23]).value,
            (<HTMLInputElement>letter_holders[24]).value
        ];
    }
    else if (lineNum === 6) {
        return [
            (<HTMLInputElement>letter_holders[25]).value,
            (<HTMLInputElement>letter_holders[26]).value,
            (<HTMLInputElement>letter_holders[27]).value,
            (<HTMLInputElement>letter_holders[28]).value,
            (<HTMLInputElement>letter_holders[29]).value
        ];
    }

    else {
        console.error("function GetWordFromLine() is causing an error");
        return ["e", "r", "r", "o", "r"];
    }
}

function CompareWords (playerInput: string[]) : boolean {
    let letter_1 = playerInput[0] === wordAsArray[0];
    let letter_2 = playerInput[1] === wordAsArray[1];
    let letter_3 = playerInput[2] === wordAsArray[2];
    let letter_4 = playerInput[3] === wordAsArray[3];
    let letter_5 = playerInput[4] === wordAsArray[4];

    return letter_1 && letter_2 && letter_3 && letter_4 && letter_5;
}

function Win () {
    alert("YOU WON");
}