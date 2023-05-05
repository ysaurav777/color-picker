let home = document.getElementById("colorPickerContainer");
let spec = document.getElementById("selectedColorHexCode");

function button11() {
    let colorName = document.getElementById("button1").textContent;
    home.style.backgroundColor = colorName;
    spec.textContent = colorName;
}

function button22() {
    let colorName = document.getElementById("button2").textContent;
    home.style.backgroundColor = colorName;
    spec.textContent = colorName;
}

function button33() {
    let colorName = document.getElementById("button3").textContent;
    home.style.backgroundColor = colorName;
    spec.textContent = colorName;
}

function button44() {
    let colorName = document.getElementById("button4").textContent;
    home.style.backgroundColor = colorName;
    spec.textContent = colorName;
}