// I start off with creating array where computer gets to choose any of the letters randomly later
var MacBookPro = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Next, determining how MacBookPro randomly choose a letter
var MacBookGuess = MacBookPro[Math.floor(Math.random() * MacBookPro.length)];


//Creating variables and setting the initial values
var wins = 0;
var losses = 0;
var guesses = 8;
var triesLeft = 8;
var tried = [];
var MacChoice = null;

//grabs an element and applies amount of tries left
var function1 = function () {
    document.querySelector("#guessLeft").innerHTML = "Guesses left: " + triesLeft;
};

var function2 = function () {
    document.querySelector("#yourGuess").innerHTML = "Guesses you made so far!: " + tried.join(', '); //every try will be joined in the bracket 
};

var function3 = function () {
    this.MacChoice = this.MacBookPro[Math.floor(Math.random() * this.MacBookPro.length)];
};

// RESETS EVERYTHING!!!

var reset = function () {
    guesses = 8;
    triesLeft = 8;
    tried = [];

    function1(); function2(); function3();
}




// Onkey Up event, input gets pushed to tried and joins the bracket, if/else statement tests 
document.onkeyup = function (event) {
    triesLeft--;

    var myChoice = String.fromCharCode(event.keyCode).toLowerCase();


    tried.push(myChoice);

    function1();
    function2();


    if (triesLeft > 0) {
        if (myChoice == MacChoice) {
            wins++;
            document.querySelector("#win").innerHTML = "Wins: " + wins;
            alert("YOUR ARE HELL OF A PSYCHIC!");

            reset();
        }

    } else if (triesLeft == 0) {
        losses++;
        document.querySelector("#loss").innerHTML = "Losses:" + losses;
        alert("Unfortunately, you are not a PSYCHIC!");
        reset();

    }

}

