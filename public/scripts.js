const letters = ["_", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
                 "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
                 "v", "w", "x", "y", "z"]

let index = 0;
let audio;

// onscroll = (event) => {
//     // event.preventDefault();
//     // event.stopPropagation();
onwheel = (event) => {
    event.preventDefault();
    event.stopPropagation();

    index -= Math.round(event.wheelDelta / 360);
    let len = letters.length;
    index = ((index % len) + len) % len;
    document.querySelector("h2").innerHTML = letters[index];

    try {
        audio.pause()
    } catch {}
    audio = new Audio(`audio/${letters[index]}.m4a`);
    audio.play();
};

onclick = (event) => {
    if (event.button == 0) {
        document.querySelector("h1").innerHTML += letters[index];
        try {
            audio.pause()
        } catch {}
        audio = new Audio(`audio/${letters[index]}.m4a`);
        audio.play();
    }
};

// This handles right click
oncontextmenu = (event) => {
    event.preventDefault();
    if (event.button == 2) {
        str = document.querySelector("h1").innerHTML
        document.querySelector("h1").innerHTML = str.substring(0, str.length - 1);
        try {
            audio.pause()
        } catch {}
        audio = new Audio("audio/backspace.m4a");
        audio.play();
    }
};
