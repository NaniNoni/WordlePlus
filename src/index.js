"use strict";
let word = "ptaki";
let wordAsArray = word.split("");
const letter_holders = document.getElementsByClassName("letter-holder");
const keyboard_buttons = document.getElementsByClassName("keyboard-button");
const current = {
    boxIndex: 0,
    box: () => letter_holders[current.boxIndex]
};
const lines = {
    one: document.getElementsByClassName("line-1"),
    two: document.getElementsByClassName("line-2"),
    three: document.getElementsByClassName("line-3"),
    four: document.getElementsByClassName("line-4"),
    five: document.getElementsByClassName("line-5"),
    six: document.getElementsByClassName("line-6")
};
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Grey"] = 2] = "Grey";
})(Color || (Color = {}));
AddKeyboardListeners();
AddSpecialListeners();
function AddKeyboardListeners() {
    const q_btn = keyboard_buttons[0];
    const w_btn = keyboard_buttons[1];
    const e_btn = keyboard_buttons[2];
    const r_btn = keyboard_buttons[3];
    const t_btn = keyboard_buttons[4];
    const y_btn = keyboard_buttons[5];
    const u_btn = keyboard_buttons[6];
    const i_btn = keyboard_buttons[7];
    const o_btn = keyboard_buttons[8];
    const p_btn = keyboard_buttons[9];
    const a_btn = keyboard_buttons[10];
    const s_btn = keyboard_buttons[11];
    const d_btn = keyboard_buttons[12];
    const f_btn = keyboard_buttons[13];
    const g_btn = keyboard_buttons[14];
    const h_btn = keyboard_buttons[15];
    const j_btn = keyboard_buttons[16];
    const k_btn = keyboard_buttons[17];
    const l_btn = keyboard_buttons[18];
    const z_btn = keyboard_buttons[20];
    const x_btn = keyboard_buttons[21];
    const c_btn = keyboard_buttons[22];
    const v_btn = keyboard_buttons[23];
    const b_btn = keyboard_buttons[24];
    const n_btn = keyboard_buttons[25];
    const m_btn = keyboard_buttons[26];
    q_btn.onclick = () => {
        AddLetter("q");
    };
    w_btn.onclick = () => {
        AddLetter("w");
    };
    e_btn.onclick = () => {
        AddLetter("e");
    };
    r_btn.onclick = () => {
        AddLetter("r");
    };
    t_btn.onclick = () => {
        AddLetter("t");
    };
    y_btn.onclick = () => {
        AddLetter("y");
    };
    u_btn.onclick = () => {
        AddLetter("u");
    };
    i_btn.onclick = () => {
        AddLetter("i");
    };
    o_btn.onclick = () => {
        AddLetter("o");
    };
    p_btn.onclick = () => {
        AddLetter("p");
    };
    a_btn.onclick = () => {
        AddLetter("a");
    };
    s_btn.onclick = () => {
        AddLetter("s");
    };
    d_btn.onclick = () => {
        AddLetter("d");
    };
    f_btn.onclick = () => {
        AddLetter("f");
    };
    g_btn.onclick = () => {
        AddLetter("g");
    };
    h_btn.onclick = () => {
        AddLetter("h");
    };
    j_btn.onclick = () => {
        AddLetter("j");
    };
    k_btn.onclick = () => {
        AddLetter("k");
    };
    l_btn.onclick = () => {
        AddLetter("l");
    };
    z_btn.onclick = () => {
        AddLetter("z");
    };
    x_btn.onclick = () => {
        AddLetter("x");
    };
    c_btn.onclick = () => {
        AddLetter("c");
    };
    v_btn.onclick = () => {
        AddLetter("v");
    };
    b_btn.onclick = () => {
        AddLetter("b");
    };
    n_btn.onclick = () => {
        AddLetter("n");
    };
    m_btn.onclick = () => {
        AddLetter("m");
    };
}
function AddSpecialListeners() {
    const enter_btn = keyboard_buttons[19];
    const del_btn = keyboard_buttons[27];
    enter_btn.onclick = () => {
        if (CanSubmit())
            Submit();
    };
    del_btn.onclick = () => {
        alert("DELETE");
    };
}
function ReturnLineFromNumber(lineNum) {
    switch (lineNum) {
        case 1:
            return lines.one;
        case 2:
            return lines.two;
        case 3:
            return lines.three;
        case 4:
            return lines.four;
        case 5:
            return lines.five;
        case 6:
            return lines.six;
        default:
            console.error("function ReturnLineFromNumber() caused an error and therefore returned lines.one");
            return lines.one;
    }
}
function Submit() {
    let input = CompareWords(GetWordFromLine(GetLine()));
    for (let i = 0; i < input.length; i++) {
        if (input[i].color() === Color.Green)
            ReturnLineFromNumber(GetLine())[i].setAttribute("style", "background-color: green");
        else if (input[i].color() === Color.Yellow)
            ReturnLineFromNumber(GetLine())[i].setAttribute("style", "background-color: yellow");
    }
    if (input[0].color() === Color.Green && input[1].color() === Color.Green && input[2].color() === Color.Green && input[3].color() === Color.Green && input[4].color() === Color.Green)
        Win();
    current.boxIndex++;
}
function AddLetter(letter) {
    if (current.boxIndex <= 4) {
        if ((letter_holders[4].value) !== "")
            return;
        current.box().value = letter;
        if (current.boxIndex !== 4)
            current.boxIndex++;
    }
    else if (current.boxIndex <= 9) {
        if ((letter_holders[9].value) !== "")
            return;
        current.box().value = letter;
        if (current.boxIndex !== 9)
            current.boxIndex++;
    }
    else if (current.boxIndex <= 14) {
        if ((letter_holders[14].value) !== "")
            return;
        current.box().value = letter;
        if (current.boxIndex !== 14)
            current.boxIndex++;
    }
    else if (current.boxIndex <= 19) {
        if ((letter_holders[19].value) !== "")
            return;
        current.box().value = letter;
        if (current.boxIndex !== 19)
            current.boxIndex++;
    }
    else if (current.boxIndex <= 24) {
        if ((letter_holders[24].value) !== "")
            return;
        current.box().value = letter;
        if (current.boxIndex !== 24)
            current.boxIndex++;
    }
    else if (current.boxIndex <= 29) {
        if ((letter_holders[29].value) !== "")
            return;
        current.box().value = letter;
        if (current.boxIndex !== 29)
            current.boxIndex++;
    }
    else {
        return;
    }
    console.log(`boxIndex: ${current.boxIndex}`);
    current.box = () => letter_holders[current.boxIndex];
}
function CanSubmit() {
    if (current.boxIndex === 4 || current.boxIndex === 9 || current.boxIndex === 14 || current.boxIndex === 19 || current.boxIndex === 24 || current.boxIndex === 29) {
        return true;
    }
    return false;
}
function GetLine() {
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
function GetWordFromLine(lineNum) {
    if (lineNum === 1) {
        let values = [];
        for (let i = 0; i <= 4; i++) {
            values.push(letter_holders[i].value);
        }
        return values;
    }
    else if (lineNum === 2) {
        let values = [];
        for (let i = 5; i <= 9; i++) {
            values.push(letter_holders[i].value);
        }
        return values;
    }
    else if (lineNum === 3) {
        let values = [];
        for (let i = 10; i <= 14; i++) {
            values.push(letter_holders[i].value);
        }
        return values;
    }
    else if (lineNum === 4) {
        let values = [];
        for (let i = 15; i <= 19; i++) {
            values.push(letter_holders[i].value);
        }
        return values;
    }
    else if (lineNum === 5) {
        let values = [];
        for (let i = 20; i <= 24; i++) {
            values.push(letter_holders[i].value);
        }
        return values;
    }
    else if (lineNum === 6) {
        let values = [];
        for (let i = 25; i <= 29; i++) {
            values.push(letter_holders[i].value);
        }
        return values;
    }
    else {
        console.error("function GetWordFromLine() is causing an error");
        return ["e", "r", "r", "o", "r"];
    }
}
function CompareWords(playerInput) {
    const letter_1 = {
        character: playerInput[0],
        color: () => {
            if (letter_1.character === wordAsArray[0])
                return Color.Green;
            else {
                for (let i = 1; i < wordAsArray.length; i++) {
                    if (letter_1.character === wordAsArray[i])
                        return Color.Yellow;
                }
            }
            return Color.Grey;
        }
    };
    const letter_2 = {
        character: playerInput[1],
        color: () => {
            if (letter_2.character === wordAsArray[1])
                return Color.Green;
            else {
                for (let i = 1; i < wordAsArray.length; i++) {
                    if (letter_2.character === wordAsArray[i])
                        return Color.Yellow;
                }
            }
            return Color.Grey;
        }
    };
    const letter_3 = {
        character: playerInput[2],
        color: () => {
            if (letter_3.character === wordAsArray[2])
                return Color.Green;
            else {
                for (let i = 1; i < wordAsArray.length; i++) {
                    if (letter_3.character === wordAsArray[i])
                        return Color.Yellow;
                }
            }
            return Color.Grey;
        }
    };
    const letter_4 = {
        character: playerInput[3],
        color: () => {
            if (letter_4.character === wordAsArray[3])
                return Color.Green;
            else {
                for (let i = 1; i < wordAsArray.length; i++) {
                    if (letter_4.character === wordAsArray[i])
                        return Color.Yellow;
                }
            }
            return Color.Grey;
        }
    };
    const letter_5 = {
        character: playerInput[4],
        color: () => {
            if (letter_5.character === wordAsArray[4])
                return Color.Green;
            else {
                for (let i = 1; i < wordAsArray.length; i++) {
                    if (letter_5.character === wordAsArray[i])
                        return Color.Yellow;
                }
            }
            return Color.Grey;
        }
    };
    return [
        letter_1,
        letter_2,
        letter_3,
        letter_4,
        letter_5
    ];
}
function Win() {
    alert("YOU WON");
}
