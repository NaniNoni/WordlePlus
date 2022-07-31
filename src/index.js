var word = "ptaki";
var wordAsArray = word.split("");
var lines = {
    one: document.getElementsByClassName("line-1"),
    two: document.getElementsByClassName("line-2"),
    three: document.getElementsByClassName("line-3"),
    four: document.getElementsByClassName("line-4"),
    five: document.getElementsByClassName("line-5"),
    six: document.getElementsByClassName("line-6")
};
var letter_holders = document.getElementsByClassName("letter-holder");
var keyboard_buttons = document.getElementsByClassName("keyboard-button");
var current = {
    boxIndex: 0,
    box: function () { return letter_holders[current.boxIndex]; }
};
var submitted = false;
AddKeyboardListeners();
AddSpecialListeners();
function AddKeyboardListeners() {
    var q_btn = keyboard_buttons[0];
    var w_btn = keyboard_buttons[1];
    var e_btn = keyboard_buttons[2];
    var r_btn = keyboard_buttons[3];
    var t_btn = keyboard_buttons[4];
    var y_btn = keyboard_buttons[5];
    var u_btn = keyboard_buttons[6];
    var i_btn = keyboard_buttons[7];
    var o_btn = keyboard_buttons[8];
    var p_btn = keyboard_buttons[9];
    q_btn.onclick = function () {
        CanSubmitAndAddLetter("q");
    };
    w_btn.onclick = function () {
        CanSubmitAndAddLetter("w");
    };
    e_btn.onclick = function () {
        CanSubmitAndAddLetter("e");
    };
    r_btn.onclick = function () {
        CanSubmitAndAddLetter("r");
    };
    t_btn.onclick = function () {
        CanSubmitAndAddLetter("t");
    };
    y_btn.onclick = function () {
        CanSubmitAndAddLetter("y");
    };
    u_btn.onclick = function () {
        CanSubmitAndAddLetter("u");
    };
    i_btn.onclick = function () {
        CanSubmitAndAddLetter("i");
    };
    o_btn.onclick = function () {
        CanSubmitAndAddLetter("o");
    };
    p_btn.onclick = function () {
        CanSubmitAndAddLetter("p");
    };
}
function AddSpecialListeners() {
    var enter_btn = keyboard_buttons[19];
    var del_btn = keyboard_buttons[27];
    enter_btn.onclick = function () {
        if (CanSubmit()) {
            Submit();
        }
    };
    del_btn.onclick = function () {
        alert("DELETE");
    };
}
function Submit() {
    if (submitted)
        return;
    current.boxIndex++;
    console.log("NEXTLINE");
    console.log(current.boxIndex);
}
function CanSubmitAndAddLetter(letter) {
    if (current.boxIndex <= 4) {
        if ((letter_holders[4].value) !== "")
            return true;
        current.box().value = letter;
        if (current.boxIndex !== 4)
            current.boxIndex++;
    }
    else if (current.boxIndex <= 9) {
        if ((letter_holders[9].value) !== "")
            return true;
        current.box().value = letter;
        if (current.boxIndex !== 9)
            current.boxIndex++;
    }
    else if (current.boxIndex <= 14) {
        if ((letter_holders[14].value) !== "")
            return true;
        current.box().value = letter;
        if (current.boxIndex !== 14)
            current.boxIndex++;
    }
    else if (current.boxIndex <= 19) {
        if ((letter_holders[19].value) !== "")
            return true;
        current.box().value = letter;
        if (current.boxIndex !== 19)
            current.boxIndex++;
    }
    else if (current.boxIndex <= 24) {
        if ((letter_holders[24].value) !== "")
            return true;
        current.box().value = letter;
        if (current.boxIndex !== 24)
            current.boxIndex++;
    }
    else if (current.boxIndex <= 29) {
        if ((letter_holders[29].value) !== "")
            return true;
        current.box().value = letter;
        if (current.boxIndex !== 29)
            current.boxIndex++;
    }
    else {
        console.log("boxIndex: ".concat(current.boxIndex));
        return true;
    }
    console.log("boxIndex: ".concat(current.boxIndex));
    current.box = function () { return letter_holders[current.boxIndex]; };
}
function CanSubmit() {
    if (current.boxIndex < 4) {
        current.boxIndex++;
    }
    else {
        return true;
    }
    console.log("boxIndex: ".concat(current.boxIndex));
    current.box = function () { return letter_holders[current.boxIndex]; };
}
// An example of a use case:
// CompareWords(GetLine(current.line));
function GetLine(line) {
    var letters = [];
    letters[0] = line[0].value;
    letters[1] = line[1].value;
    letters[2] = line[2].value;
    letters[3] = line[3].value;
    letters[4] = line[4].value;
    return letters;
}
function CompareWords(playerInput) {
    var letter_1 = playerInput[0] === wordAsArray[0];
    var letter_2 = playerInput[1] === wordAsArray[1];
    var letter_3 = playerInput[2] === wordAsArray[2];
    var letter_4 = playerInput[3] === wordAsArray[3];
    var letter_5 = playerInput[4] === wordAsArray[4];
    var wordsAreCorrect = letter_1 && letter_2 && letter_3 && letter_4 && letter_5;
    if (wordsAreCorrect) {
        Win();
    }
}
function Win() {
    alert("YOU WON");
}
