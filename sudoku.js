var digitSelected = null;
var squareSelected = null;

var errors = 0;

var board = [
    "6-1---7--",
    "--589----",
    "4--------",
    "54-----81",
    "---9----2",
    "----6--4-",
    "72-------",
    "------35-",
    "--4-17---"
]

var solution = [
    "681253794",
    "375894126",
    "492176835",
    "549732681",
    "836941572",
    "217568943",
    "723685419",
    "168429357",
    "954317268"
]

window.onload = function() {
    setGame();
}

function setGame() {
     
    for (let i = 1; i<=9; i++){
        
        //create a div with id= 1 and class=number
        let digit = document.createElement("div");
        digit.id = 1;
        digit.innerText = i;
        digit.classList.add("digit");
        document.getElementsById("numbers").appendChild(digit);

    }

    for (let row = 0; row < 9; row++){
        for(let col=0; col < 9; col++){
            let square = document.createElement("div");
            square.id = row.toString() + "-" + col.toString();
            square.classList.add("square");
            document.getElementsById("board").append(square);
        }
    }
}