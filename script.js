const allSquares = document.querySelectorAll(".square");
let pickedColour = null;
for (var i = 0; i < allSquares.length; i++) {
    allSquares[i].addEventListener("click", function (e) {
        checkSquare(e.target);
    })
}

const colourRGBValueLimit = 255;
const allColourValues = [];
for (var i = colourRGBValueLimit; i >= 0; i--) {
    allColourValues.push(i);
}

function getRedRGBValue() {
    let redValue = Math.floor(Math.random() * allColourValues.length);
    return (redValue);
}

function getBlueRGBValue() {
    let blueValue = Math.floor(Math.random() * allColourValues.length);
    return (blueValue);
}

function getGreenRGBValue() {
    let greenValue = Math.floor(Math.random() * allColourValues.length);
    return (greenValue);
}


function getCompletedRGBValue() {
    let redValue = getRedRGBValue();
    let greenValue = getGreenRGBValue();
    let blueValue = getBlueRGBValue();

    let rgbStringValues = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    return (rgbStringValues);
}

function generateColours() {
    for (var i = 0; i < allSquares.length; i++) {
        allSquares[i].removeAttribute("selectedSquare")
    }

    document.getElementById("rgb-colour").innerHTML = "Your RGB Colour: ";

    pickedColour = getCompletedRGBValue();
    let selectedSquare = allSquares[Math.floor(Math.random() * allSquares.length)];

    document.getElementById("rgb-colour").innerHTML += pickedColour.toUpperCase();
    selectedSquare.style.backgroundColor = pickedColour;
    selectedSquare.setAttribute("selectedSquare", "true")

    for (var i = 0; i < allSquares.length; i++) {
        allSquares[i].style.border = "none";
        if (allSquares[i].getAttribute("selectedSquare") != "true") {
            allSquares[i].style.backgroundColor = getCompletedRGBValue();
        }
    }
};

generateColours();