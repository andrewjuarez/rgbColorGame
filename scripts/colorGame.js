var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(255, 255, 255)",
    "rgb(0, 0, 0)"
]

var squares =  document.querySelectorAll(".square");
var randomIndex = Math.floor((Math.random() * 5) + 1);
var pickedColor = colors[randomIndex];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var scoreNumberDisplay = document.getElementById("scoreNumber");

colorDisplay.textContent = pickedColor;

var score = 0;
var wrongCount = 0;

function randomizeColor() {
    var r = Math.floor((Math.random() * 255));
    var g = Math.floor((Math.random() * 255));
    var b = Math.floor((Math.random() * 255));

    var color = "rgb(" + r + ", " + g +", " + b + ")";
    return color;
}

function correctSelection() {
    score++;
    wrongCount = 0;
    scoreNumberDisplay.textContent = score;
    messageDisplay.style.color = "rgb(0, 255, 0)";
    messageDisplay.textContent = "Awesome Job!";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = pickedColor;
    }
    
}

function resetColors() {
    
    for(var i = 0; i < squares.length; i++) {
        var newColor = randomizeColor();
        squares[i].style.backgroundColor = newColor;
        colors[i] = newColor;
    }
    randomIndex = Math.floor((Math.random() * 5) + 1);
    pickedColor = colors[randomIndex];
    colorDisplay.textContent = pickedColor;
}

function wrongSelection() {
    messageDisplay.style.color = "rgb(255, 0, 0)";
    messageDisplay.textContent = "Try Again!";
    wrongCount++;

    console.log("Wrong count incremented: " + wrongCount);
}

// initialize starting colors and event click listeners
for(var i = 0; i < squares.length; i++){
    // Set the initial colors for ea. square
    squares[i].style.backgroundColor = colors[i];

    //add click listeners for ea. square
    squares[i].addEventListener("click", function(){
        if(this.style.backgroundColor == pickedColor)
        {
            correctSelection();
            resetColors();
        }
        else {
            wrongSelection();
            this.style.backgroundColor = "#232323";
        }
    });
}


