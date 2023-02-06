---
layout: default
permalink: ./games
title: Play Word Nerd
search_eclude: true
---
meta name="viewport" content="width=device-width, initial-scale=1.0">
<h1 style="color:black">Games</h1>
<h2 style="color:black">Purr-dle</h2>

<table>
    <tr>
        <td><img src="{{site.baseurl}}//images/logo.png" height="60" title="Frontend" alt=""></td>
        <td><a href="{{site.baseurl}}/frontend/overview">Word Nerd</a></td>
    </tr>
</table>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Word Nerd</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet"/>
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>
<body>
    <h1> Word Nerd</h1>
    
    <div id="game-board">

    </div>
<script
src="https://code.jquery.com/jquery-3.6.0.min.js"
integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script src="script.js" type="module"></script>
</body>
</html>

<body>
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
</body>

<script>
let popup1 = document.getElementById("howto-popup")
function openPopup1(){
    popup1.classList.add("open-popup");
}
function closePopup1(){
    popup1.classList.remove("open-popup");
}

</script>
</body>

<body> 
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
            <buttobody {background-color: #f1f0e2;}

            h1 {
              /* Title Design */
                text-align: center;
                font-family: Luminari, Courier;
                color: #7C826B;
                font-size: 4rem;
                text-decoration: underline;
            }
            
            
            .howto-container, .settings-container{
                width: 100%
                background: #3c5077;
                display: flex;
                align-items: center;
                justify-content: left;
            }
            
            /* How To and Settings button design: */
            .howto-button{
                font-size: 1.5rem;
                font-weight: 600;
                font-family: Courier, Times New Roman,Times, Serif;
            
                padding: 0.5rem;
                margin: 3px;
                cursor: pointer;
                text-transform: uppercase;
                cursor: pointer;
            
                color: #a36c54;
                background-color: #ebd1ae;
                border: 2px solid #7C826B;
            }
            
            .howto-popup{
                width: 200px
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
            .howto-button:hover, .settings-button:hover, .keyboard-button:hover {
              background-color:#d9b88d;
              transition: 0.3s;
            }
            
            /* Mouse click outline: */
            .howto-button:focus, .settings-button:focus, .keyboard-button:focus {
              outline-color: transparent;
              outline-style:solid;
              box-shadow: 0 0 0 2px #58a95f;
              transition: 0.3s;
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
            
            
            
            #game-board {
              display: flex;
              align-items: center;
              flex-direction: column;
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
            }n class="keyboard-button">b</button>
            <button class="keyboard-button">n</button>
            <button class="keyboard-button">m</button>
        </div>
    </div>
</body>

<style>
    body {background-color: #f1f0e2;}

    h1 {
      /* Title Design */
        text-align: center;
        font-family: Luminari, Courier;
        color: #7C826B;
        font-size: 4rem;
        text-decoration: underline;
    }
    
    
    .howto-container, .settings-container{
        width: 100%
        background: #3c5077;
        display: flex;
        align-items: center;
        justify-content: left;
    }
    
    /* How To and Settings button design: */
    .howto-button, .settings-button{
        font-size: 1.5rem;
        font-weight: 600;
        font-family: Courier, Times New Roman,Times, Serif;
    
        padding: 0.5rem;
        margin: 3px;
        cursor: pointer;
        text-transform: uppercase;
        cursor: pointer;
    
        color: #a36c54;
        background-color: #ebd1ae;
        border: 2px solid #7C826B;
    }
    
    .howto-popup, .settings-popup{
        width: 200px
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
    
    .howto-popup h2, .settings-popup h2{
        font-weight: 30px
        margin: 30px 0 10px
    }
    
    .howto-popup button, .settings-popup button{
        width: 10%
        margin-top: 2px;]
        font-size: 18px;
        border-radius: 4px;
        cursor: pointer;
    
        font-family: Courier, Times New Roman,Times, Serif;
    }
    
    .howto-popup button:hover, .settings-popup button:hover{
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
    .howto-button:hover, .settings-button:hover, .keyboard-button:hover {
      background-color:#d9b88d;
      transition: 0.3s;
    }
    
    /* Mouse click outline: */
    .howto-button:focus, .settings-button:focus, .keyboard-button:focus {
      outline-color: transparent;
      outline-style:solid;
      box-shadow: 0 0 0 2px #58a95f;
      transition: 0.3s;
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
    
    
    
    #game-board {
      display: flex;
      align-items: center;
      flex-direction: column;
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