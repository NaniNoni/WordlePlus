var word = "ptaki";
var wordAsArray = word.split("");
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
    var a_btn = keyboard_buttons[10];
    var s_btn = keyboard_buttons[11];
    var d_btn = keyboard_buttons[12];
    var f_btn = keyboard_buttons[13];
    var g_btn = keyboard_buttons[14];
    var h_btn = keyboard_buttons[15];
    var j_btn = keyboard_buttons[16];
    var k_btn = keyboard_buttons[17];
    var l_btn = keyboard_buttons[18];
    var z_btn = keyboard_buttons[20];
    var x_btn = keyboard_buttons[21];
    var c_btn = keyboard_buttons[22];
    var v_btn = keyboard_buttons[23];
    var b_btn = keyboard_buttons[24];
    var n_btn = keyboard_buttons[25];
    var m_btn = keyboard_buttons[26];
    q_btn.onclick = function () {
        AddLetter("q");
    };
    w_btn.onclick = function () {
        AddLetter("w");
    };
    e_btn.onclick = function () {
        AddLetter("e");
    };
    r_btn.onclick = function () {
        AddLetter("r");
    };
    t_btn.onclick = function () {
        AddLetter("t");
    };
    y_btn.onclick = function () {
        AddLetter("y");
    };
    u_btn.onclick = function () {
        AddLetter("u");
    };
    i_btn.onclick = function () {
        AddLetter("i");
    };
    o_btn.onclick = function () {
        AddLetter("o");
    };
    p_btn.onclick = function () {
        AddLetter("p");
    };
    a_btn.onclick = function () {
        AddLetter("a");
    };
    s_btn.onclick = function () {
        AddLetter("s");
    };
    d_btn.onclick = function () {
        AddLetter("d");
    };
    f_btn.onclick = function () {
        AddLetter("f");
    };
    g_btn.onclick = function () {
        AddLetter("g");
    };
    h_btn.onclick = function () {
        AddLetter("h");
    };
    j_btn.onclick = function () {
        AddLetter("j");
    };
    k_btn.onclick = function () {
        AddLetter("k");
    };
    l_btn.onclick = function () {
        AddLetter("l");
    };
    z_btn.onclick = function () {
        AddLetter("z");
    };
    x_btn.onclick = function () {
        AddLetter("x");
    };
    c_btn.onclick = function () {
        AddLetter("c");
    };
    v_btn.onclick = function () {
        AddLetter("v");
    };
    b_btn.onclick = function () {
        AddLetter("b");
    };
    n_btn.onclick = function () {
        AddLetter("n");
    };
    m_btn.onclick = function () {
        AddLetter("m");
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
        console.log("boxIndex: ".concat(current.boxIndex));
        return;
    }
    console.log("boxIndex: ".concat(current.boxIndex));
    current.box = function () { return letter_holders[current.boxIndex]; };
}
function CanSubmit() {
    if (current.boxIndex < 4) {
        current.boxIndex++;
    }
    else {
        return;
    }
    console.log("boxIndex: ".concat(current.boxIndex));
    current.box = function () { return letter_holders[current.boxIndex]; };
}
function CompareWords(playerInput) {
    var letter_1 = playerInput[0] === wordAsArray[0];
    var letter_2 = playerInput[1] === wordAsArray[1];
    var letter_3 = playerInput[2] === wordAsArray[2];
    var letter_4 = playerInput[3] === wordAsArray[3];
    var letter_5 = playerInput[4] === wordAsArray[4];
    return letter_1 && letter_2 && letter_3 && letter_4 && letter_5;
}
function Win() {
    alert("YOU WON");
}
