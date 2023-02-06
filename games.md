<html lang="en"><head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

<script>
function wrap_img(fn) {

    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        var elements = document.querySelectorAll(".post img");
        Array.prototype.forEach.call(elements, function(el, i) {
            if (el.getAttribute("title") && (el.className != "emoji")) {
                const caption = document.createElement('figcaption');
                var node = document.createTextNode(el.getAttribute("title"));
                caption.appendChild(node);
                const wrapper = document.createElement('figure');
                wrapper.className = 'image';
                el.parentNode.insertBefore(wrapper, el);
                el.parentNode.removeChild(el);
                wrapper.appendChild(el);
                wrapper.appendChild(caption);
            }
        });
		initBoard()
    } else { document.addEventListener('DOMContentLoaded', fn); }
}
window.onload = wrap_img;  
    
document.addEventListener("DOMContentLoaded", function(){
    // add link icon to anchor tags
    var elem = document.querySelectorAll(".anchor-link")
    elem.forEach(e => (e.innerHTML = '<i class="fas fa-link fa-xs"></i>'));
    });
</script>
</head>
<body><header class="site-header">

<body>
<script>
src="https://code.jquery.com/jquery-3.6.0.min.js"
integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    <h1>Purr-dle</h1>
    
<div id="game-board">
<div class="howto-container">
    <button type="submit" class="howto-button" onclick="openPopup1()">How to Play</button>
    <div class="howto-popup" id="howto-popup">
            <h2>How to Play</h2>
            <p>Guess the word in 6 tries.</p>
            <p>Each guess must be a valid 5-letter word.</p>
            <p>The color of the squares will change to show how close your guess was to the word.</p>
            <p>Green - Letter is in the word and in the correct spot.</p>
            <p>Yellow - Letter is in the word but in the wrong spot.</p>
            <p>Grey - Letter is not in the word in any spot.</p>
            <button type="button" onclick="closePopup1()">Close</button>
            </div>
    </div>
</div>

<script>
let popup1 = document.getElementById("howto-popup")
function openPopup1(){
    popup1.classList.add("open-popup");
}
function closePopup1(){
    popup1.classList.remove("open-popup");
}
</script>
    

<div id="keyboard">
        <div class="row1">
            <button class="keyboard-button">q</button>
            <button class="keyboard-button">w</button>
            <button class="keyboard-button">e</button>
            <button class="keyboard-button">r</button>
            <button class="keyboard-button">t</button>
            <button class="keyboard-button">y</button>
            <button class="keyboard-button">u</button>
            <button class="keyboard-button">i</button>
            <button class="keyboard-button">o</button>
            <button class="keyboard-button">p</button>
            <button class="keyboard-button">Del</button>
        </div>
        <div class="row2">
            <button class="keyboard-button">a</button>
            <button class="keyboard-button">s</button>
            <button class="keyboard-button">d</button>
            <button class="keyboard-button">f</button>
            <button class="keyboard-button">g</button>
            <button class="keyboard-button">h</button>
            <button class="keyboard-button">j</button>
            <button class="keyboard-button">k</button>
            <button class="keyboard-button">l</button>
            <button class="keyboard-button">Enter</button>
        </div>
        <div class="row3">
            <button class="keyboard-button">z</button>
            <button class="keyboard-button">x</button>
            <button class="keyboard-button">c</button>
            <button class="keyboard-button">v</button>
            <button class="keyboard-button">b</button>
            <button class="keyboard-button">n</button>
            <button class="keyboard-button">m</button>
        </div>
</div>

<style>
 {background-color: #f1f0e2;}
    h1 {
      /* Title Design */
        text-align: center;
        font-family: Serif;
        color: #000000;
        font-size: 4rem;
    }
    .howto-container{
        width: 100%
        background: #3c5077;
        display: flex;
        align-items: center;
        justify-content: left;
    }
    /* How To button design: */
    .howto-button{
        font-size: 1.5rem;
        font-weight: 600;
        font-family: Courier, Times New Roman,Times, Serif;
        padding: 0.5rem;
        cursor: pointer;
        text-transform: uppercase;
        color: #a36c54;
        background-color: #ebd1ae;
        border: 2px solid #7C826B;
    }
    .howto-popup{
        width: 100px
        background: #f6f4ee
        border-radius: 5px;
        postion: absolute;
        top: 0
        left: 50%
        transform: translate(-50%,-50%) scale(0.1);
        padding: 0 30px 30px;
        visibility: hidden;
        font-size: 1.5rem;
        font-weight: 600;
        font-family: Courier, Times New Roman,Times, Serif;
        border: 2px solid #7C826B;
        color: #a36c54;
        background-color: #f6f4ee;
    }
    .open-popup{
      visibility: visible;
      top: 50%
    }
    .howto-popup h2{
        font-weight: 30px
        margin: 30px 0 10px
    }
    .howto-popup button{
        width: 10%
        margin-top: 2px;]
        font-size: 18px;
        border-radius: 4px;
        cursor: pointer;
        font-family: Courier, Times New Roman,Times, Serif;
    }
    .howto-popup button:hover{
      background-color:#e2e2e2;
      transition: 0.3s;
    }
    /* Keyboard button display: */
       #keyboard {
        margin: 1rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      #keyboard div {
        display: flex;
      }
      .row2 {
        margin: 0.3rem 0;
      }
    /* Keyboard button design: */
      .keyboard-button {
        font-size: 1.5rem;
        font-weight: 600;
        font-family: Courier, Times New Roman,Times, Serif;
        padding: 0.5rem;
        margin: 0 3px;
        cursor: pointer;
        text-transform: uppercase;
        color: #7c826b;
        background-color: #ebd1ae;
        border: 2px solid #a36c54;
      }
    /* Mouse hover over button color change: */
    .howto-button:hover, .keyboard-button:hover {
      background-color:#d9b88d;
      transition: 0.1s;
    } outline: */
    .howto-button:focus, .keyboard-button:focus {
      outline-color: transparent;
      outline-style:solid;
      box-shadow: 0 0 0 2px #ff941c;
      transition: 0.1s;
    }
    .container {
      width: 100%;
      height: 100vh;
      background: #3c5077
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
        align-items: center;
    }
    .game-board {
      display: flex;
      align-items: center;
      flex-direction: column;
      display: inline-block
    }
    .letter-box {
      border: 2px solid gray;
      border-radius: 3px;
      margin: 2px;
      font-size: 2.5rem;
      font-weight: 700;
      height: 3rem;
      width: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
    }
    .filled-box {
      border: 2px solid black;
    }
    .letter-row {
      display: flex;
    } 
</style>
<script>  
    const NUMBER_OF_GUESSES = 6;
    let guessesRemaining = NUMBER_OF_GUESSES;
    let currentGuess = [];
    let nextLetter = 0;
    //let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
    //console.log(rightGuessString)
    function initBoard() {
        let board = document.getElementById("game-board");
        for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
            let row = document.createElement("div")
            row.className = "letter-row"
            for (let j = 0; j < 5; j++) {
                let box = document.createElement("div")
                box.className = "letter-box"
                row.appendChild(box)
            }
            board.appendChild(row)
        }
    }
    document.addEventListener("keyup", (e) => {    
        if (guessesRemaining === 0) {
            return
        }
        let pressedKey = String(e.key)
        if (pressedKey === "Backspace" && nextLetter !== 0) {
            deleteLetter()
            return
        }
        if (pressedKey === "Enter") {
            checkGuess()
            return
        }
        let found = pressedKey.match(/[a-z]/gi)
        if (!found || found.length > 1) {
            return
        } else {
            insertLetter(pressedKey)
        }
    })
    function insertLetter (pressedKey) {
        if (nextLetter === 5) {
            return
        }
        pressedKey = pressedKey.toLowerCase()
        let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
        let box = row.children[nextLetter]
        box.textContent = pressedKey
        box.classList.add("filled-box")
        currentGuess.push(pressedKey)
        nextLetter += 1
    }
    function deleteLetter () {
        let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
        let box = row.children[nextLetter - 1]
        box.textContent = ""
        box.classList.remove("filled-box")
        currentGuess.pop()
        nextLetter -= 1
    }
    function checkGuess () {
        let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
        let guessString = ''
        let rightGuess = Array.from(rightGuessString)
        for (const val of currentGuess) {
            guessString += val
        }
        if (guessString.length != 5) {
            alert("Not enough letters!")
            return
        }
        for (let i = 0; i < 5; i++) {
            let letterColor = ''
            let box = row.children[i]
            let letter = currentGuess[i]
            let letterPosition = rightGuess.indexOf(currentGuess[i])
            // is letter in the correct guess
            if (letterPosition === -1) {
                letterColor = 'grey'
            } else {
                // now, letter is definitely in word
                // if letter index and right guess index are the same
                // letter is in the right position 
                if (currentGuess[i] === rightGuess[i]) {
                    // shade green 
                    letterColor = 'green'
                } else {
                    // shade box yellow
                    letterColor = 'yellow'
                }
                rightGuess[letterPosition] = "#"
            } 
            let delay = 250 * i
            setTimeout(()=> {
                //shade box
                box.style.backgroundColor = letterColor
                shadeKeyBoard(letter, letterColor)
            }, delay)
        }   
        if (guessString === rightGuessString) {
            alert("You guessed right! Game over!")
            guessesRemaining = 0
            return
        } else {
            guessesRemaining -= 1;
            currentGuess = [];
            nextLetter = 0;
            if (guessesRemaining === 0) {
                alert("You've run out of guesses! Game over!")
                alert(`The right word was: "${rightGuessString}"`)
            }
        }
    }
    function shadeKeyBoard(letter, color) {
        for (const elem of document.getElementsByClassName("keyboard-button")) {
            if (elem.textContent === letter) {
                let oldColor = elem.style.backgroundColor
                if (oldColor === 'green') {
                    return
                } 
                if (oldColor === 'yellow' && color !== 'green') {
                    return
                }
                elem.style.backgroundColor = color
                break
            }
        }
    }
	document.getElementById("keyboard").addEventListener("click", (e) => {
        const target = e.target
        if (!target.classList.contains("keyboard-button")) {
            return
        }
        let key = target.textContent
        if (key === "Del") {
            key = "Backspace"
        } 
        document.dispatchEvent(new KeyboardEvent("keyup", {'key': key}))
	});
</script> 
