var keys = ["A", "S", "D", "F", "G", "H", "J", "W", "E", "T", "Y", "U"];
document.addEventListener("keydown", function(event) {
    let audio;
    let key = event.key.toUpperCase();

    if (keys.indexOf(key) > -1) {
        audio = new Audio("assets/" + key + ".mp3");
        audio.play();
    } else {
        console.warn("Unsupported key is pressed");
    }
});