<!DOCTYPE html>

<html lang="en-US">
<head>
  <title>Not Bubsy 3D</title>
<style>
  .flex-container {
    display: flex;
    justify-content: center;
  }

  .flex-container > div {
    background-color: black;
    font-family: 'Courier New';
    color: rgb(6, 240, 6);
    text-align: center;
    margin: 10px;
    padding: 20px;
    font-size: 30px;
    align-items: flex-end;
  }
  .terminalbox {
    display: flex;
    align-items: flex-end;
    overflow: hidden;
  }
  .terminalbox > p {
    font-family: 'Courier New';
    color: rgb(6, 240, 6);
    text-align: left;
    margin: 10px;
    padding: 20px;
    font-size: 20px;
    overflow: hidden;
  }
  .terminalbox > div {
    font-family: 'Courier New';
    color: rgb(6, 240, 6);
    text-align: left;
    margin: 10px;
    padding: 20px;
    font-size: 20px;
    overflow: hidden;
  }

  .flex-container2 {
    display: flex;
    justify-content: space-around;
  }

  .flex-container2 > input {
    background-color: black;
    font-family: 'Courier New';
    color: rgb(6, 240, 6);
    margin: 10px;
    padding: 20px;
    font-size: 30px;
  }
  .popup{
    width: 400px;
    background: #cfcfcf;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%,-50%) scale(0.1);
    text-align: center;
    padding: 0 30px 30px;
    color: #333;
    visibility: hidden;
    transition: transform 0.3s, top 0.3s;
  }
  .open-popup{
    visibility: visible;
    top: 50%;
    transform: translate(-50%,-23%) scale(1);
  }
  .popup img{
    width: 100px;
    margin-top: -40px;
  }
  .popup h2{
    font-size: 30px;
    font-weight: 500;
    margin: 10px 0 10px;
  }
  .popup button{
    width: 100%;
    margin-top: 50px;
    padding: 10px 0;
    background: #ff941c;
    color: #fff;
    border: 0;
    outline: none;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
</style>
</head>
<body>
  
  <div class="flex-container" style="height: 400px;">
    <div style="flex-grow: 1;flex-shrink: 0;background-color: White;"></div>
    <div id="emptu" class="terminalbox" style="flex-grow: 8">
        <p id="terminal">THIS IS THE TERMINAL <br> TYPE "PLAY" TO PLAY</p>
    </div>
    <div style="flex-grow: 1;flex-shrink: 0;background-color: White;"></div>  
  </div>

  <div class="flex-container2">
    <div style="flex-grow: 1;flex-shrink: 0;background-color: White;"></div>
    <input class="uc-text-smooth" type="text" id="textinput" style="flex-grow: 4;"></input>
    <div style="flex-grow: 1;flex-shrink: 0;background-color: White;"></div>
  </div>
  <div class="popup" id="signin">penis</div>


  <script>
    function openPopup(){
      document.getElementById("signin").classList.add("open-popup");
    }
    function closePopup(){
      document.getElementById("signin").classList.remove("open-popup");
    }
  </script>
  <script>
  const forceKeyPressUppercase = (e) => {
    let el = e.target;
    let charInput = e.keyCode;
    if((charInput >= 97) && (charInput <= 122)) { // lowercase
      if(!e.ctrlKey && !e.metaKey && !e.altKey) { // no modifier key
        let newChar = charInput - 32;
        let start = el.selectionStart;
        let end = el.selectionEnd;
        el.value = el.value.substring(0, start) + String.fromCharCode(newChar) + el.value.substring(end);
        el.setSelectionRange(start+1, start+1);
        e.preventDefault();
      }
    }
  };

  document.querySelectorAll(".uc-text-smooth").forEach(function(current) {
    current.addEventListener("keypress", forceKeyPressUppercase);
  });
  </script>
  <script>
    let terminallimit = "13 lines";
    let gamestate = "0"
    let time = 0;
    let points = 0;
    const party = [0, 0, 0, 0, 1];
    let encountercountdown = 2;
    let levelcount = 0;
    let inpbox = document.getElementById("textinput");
    let uinp = document.getElementById("textinput").value;
    let phealth = 7;
    let atkstat = 1;
    let garfhealth = 0;
    let dalihealth = 0;
    let kithealth = 0;
    let monahealth = 0;
    let ophealth = 7;
    const partyhp = []
    partyhp[0] = garfhealth
    partyhp[1] = dalihealth
    partyhp[2] = monahealth
    partyhp[3] = kithealth
    const get = [0, 0, 0, 0]

    inpbox.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        uinp = document.getElementById("textinput").value;
        enter();
        document.getElementById("textinput").value = ""
      }
    });
    
    function timeincrease() {time++}
    function terminaltext() {
      return document.getElementById("terminal").innerHTML
    }
    function attack() {
      let doctor = Math.floor(Math.random() * 4) + atkstat - 1;
      ophealth -= doctor;
      writeterm("YOU DID " + doctor + " DAMAGE");
    }
    function writeterm(inputtext) {
      document.getElementById("terminal").innerHTML = terminaltext() + "<br>" + inputtext;
    }
    function grabinput() {
      let userchoice = doc.getElementById("textinput").value;
      return userchoice;
    }
    function enter() {
      if (gamestate == "0") {
        gamestate0();
      } else if (gamestate == "1") {
        gamestate1();
      } else if (gamestate == "-1") {
        win1();
      } else if (gamestate == "2") {
        turn();
      } else if (gamestate == "3") {
        recruit();
      } else if (gamestate == "L") {
        writeterm("YOU DIED")
        writeterm("TIME: " + time)
      } else if (gamestate == "4") {
        boss()
      }
    }
    function gamestate0() {
      if (uinp == "PLAY") {
        console.log("play start")
        setInterval(timeincrease, 1000);
        gamestate = "1";
        writeterm("WHAT WOULD YOU LIKE TO DO?");
        writeterm("RECRUIT A NEW TEAMMATE");
        writeterm("FIND ENEMY, FIGHT BOSS");
      } else {
        writeterm('TYPE "PLAY" TO PLAY');
      }
    }
    function gamestate1() {
      console.log(uinp)
      if (uinp == "RECRUIT") {
        console.log(uinp)
        writeterm("RECRUIT: GARFIELD, MORGANA, DALI, MR. KITTY")
        gamestate = "3";
      } else if (uinp == "FIND ENEMY") {
        writeterm("YOU ARE IN FRONT OF AN ENEMY")
        randenc()
      } else if (uinp == "FIGHT BOSS") {
        ophealth = 20
        gamestate = "4"
        writeterm("THE BOSS STANDS BEFORE YOU");
        writeterm("YOU MUST DEFEAT HIM")
      } else if (uinp == "WIN") {
        gamestate = "-1";
        win();
      } else if (uinp == "POP") {
        openPopup();
      } else if (uinp == "UNPOP") {
        closePopup();
      } else if (uinp == "CHECK") {
        checkm();
      } else if (uinp == "PENIS") {writeterm("hehe, penis")}
    }
    function checkm() {
      writeterm("PARTY:")
      if (party[0] == 1) {writeterm("GARFIELD")}
      if (party[1] == 1) {writeterm("DALI")}
      if (party[2] == 1) {writeterm("MORGANA")}
      if (party[3] == 1) {writeterm("MR. KITTY")}
      writeterm("ATTACK: " + atkstat);
      writeterm("PARTY HEALTH: " + partyhp);
    }
    function randenc() {
      gamestate = "2"
      ophealth = 7
    }
    function recruit() {
      if (uinp == "GARFIELD") {
        garfield();
        gamestate = "2";
        get[0] = 1;
      } else if (uinp == "MORGANA") {
        mona();
        gamestate = "2";
        get[2] = 1;
      } else if (uinp == "DALI") {
        dali();
        gamestate = "2";
        get[1] = 1;
      } else if (uinp == "MR. KITTY") {
        mrkitty();
        gamestate = "2";
        get[3] = 1;
      } else if (uinp == "MR KITTY") {
        mrkitty();
        gamestate = "2";
        get[3] = 1;
      }
    }
    function garfield() {
      writeterm("YOU'RE FIGHTING GARFIELD");
      writeterm("DEFEAT HIM TO RECRUIT HIM");
      ophealth = 7;
    }
    function dali() {
      writeterm("YOU'RE FIGHTING DALI");
      writeterm("DEFEAT HIM TO RECRUIT HIM");
      ophealth = 7;
    }
    function mona() {
      writeterm("YOU'RE FIGHTING MORGANA");
      writeterm("DEFEAT HIM TO RECRUIT HIM");
      ophealth = 7;
    }
    function mrkitty() {
      writeterm("YOU'RE FIGHTING MR. KITTY");
      writeterm("DEFEAT HIM TO RECRUIT HIM");
      ophealth = 7;
    }
    function playerturn(){
      if (uinp == "ATTACK") {
        attack();
        console.log("attack");
      } else if (uinp == "PERSONA") {
        writeterm("YOU CAN'T CHANGE PERSONAS");
      } else if (uinp == "CHECK") {
        writeterm("PLAYER HEALTH: " + phealth);
        writeterm("OPPONENT HEALTH: " + ophealth);
      } else if (uinp == "WIN") {
        gamestate = "-1";
      } else if (uinp == "TIME") {
        writeterm("TIME: " + time);
      } else {}
    }
    function opturn() {
      let cent = Math.floor(Math.random() * 5);
      while (phealth > 0) {
        cent = Math.floor(Math.random() * 5);
        if (partyhp[cent] > 0) {
          cent -= 1;
          if (cent == 0) {
            writeterm("GARFIELD TOOK 1 DAMAGE");
          } else if (cent == 1) {
            writeterm("DALI TOOK 1 DAMAGE");
          } else if (cent == 2) {
            writeterm("MORGANA TOOK 1 DAMAGE");
          } else if (cent == 3) {
            writeterm("MR. KITTY TOOK 1 DAMAGE");
          } else {writeterm("YOU TOOK 1 DAMAGE")}
          break
        }
      }
    }
    function turn() {
      playerturn();
      if (party[0] == 1) {
        writeterm("GARFIELD ATTACKS");
        ophealth -= Math.floor(Math.random() * (2 - 1) ) + 1;
      }
      if (party[1] == 1) {
        writeterm("DALI ATTACKS");
        ophealth -= Math.floor(Math.random() * (2 - 1) ) + 1;
      }
      if (party[2] == 1) {
        writeterm("MORGANA ATTACKS");
        ophealth -= Math.floor(Math.random() * (2 - 1) ) + 1;
      }
      if (party[3] == 1) {
        writeterm("MR. KITTY ATTACKS");
        ophealth -= Math.floor(Math.random() * (2 - 1) ) + 1;
      }
      opturn()
      if (ophealth <= 0) {winbattle()}
      if (phealth <= 0) {gamestate = "L"}
    }
    function bossturn() {
      let bent = Math.floor(Math.random() * 5);
      let davidt = Math.floor(Math.random() * (2 - 1) ) + 1;
      while (phealth > 0) {
        cent = Math.floor(Math.random() * 5);
        if (partyhp[cent] > 0) {
          cent -= davidt;
          if (cent == 0) {
            writeterm("GARFIELD TOOK " + davidt + " DAMAGE");
          } else if (cent == 1) {
            writeterm("DALI TOOK " + davidt + " DAMAGE");
          } else if (cent == 2) {
            writeterm("MORGANA TOOK " + davidt + " DAMAGE");
          } else if (cent == 3) {
            writeterm("MR. KITTY TOOK " + davidt + " DAMAGE");
          } else {writeterm("YOU TOOK " + davidt + " DAMAGE")}
          break
        }
      }
    }
    function boss() {
      playerturn()
      if (party[0] == 1) {
        writeterm("GARFIELD ATTACKS");
        ophealth -= Math.floor(Math.random() * (2 - 1) ) + 1;
      }
      if (party[1] == 1) {
        writeterm("DALI ATTACKS");
        ophealth -= Math.floor(Math.random() * (2 - 1) ) + 1;
      }
      if (party[2] == 1) {
        writeterm("MORGANA ATTACKS");
        ophealth -= Math.floor(Math.random() * (2 - 1) ) + 1;
      }
      if (party[3] == 1) {
        writeterm("MR. KITTY ATTACKS");
        ophealth -= Math.floor(Math.random() * (2 - 1) ) + 1;
      }
      bossturn()
      if (ophealth <= 0) {
        win1()
        gamestate = "-1"
      }
      if (phealth <= 0) {
        writeterm("YOU DIED")
        writeterm("TIME: " + time)
        gamestate = "L"
      }
    }
    function healthreset() {
      phealth = 7;
      if (party[0] == 1) {garfhealth = 7}
      if (party[1] == 1) {dalihealth = 7}
      if (party[2] == 1) {monahealth = 7}
      if (party[3] == 1) {kithealth = 7}
    }
    function encountcheck() {
      console.log("Encounter check")
      encountercountdown = encountercountdown - 1;
      if (encountercountdown == 0) {
        levelcount += 1;
        encountercountdown = 1 + levelcount;
        atkstat += 1
        writeterm("YOU LEVELED UP");
        writeterm("YOUR ATTACK: " + atkstat)
      }
    }
    function winbattle() {
      phealth = 7;
      writeterm("THE OPPONENT HAS BEEN DEFFEATED");
      gamestate = "1";
      writeterm("WHAT WOULD YOU LIKE TO DO?");
      writeterm("RECRUIT A NEW TEAMMATE");
      writeterm("GARFIELD, MORGANA, DALI, MR. KITTY");
      writeterm("FIND ENEMY, FIGHT BOSS");
      encountcheck();
      if (get[0] == 1) {
        garfget();
        get[0] = 2;
      }
      if (get[1] == 1) {
        daliget();
        get[1] = 2;
      }
      if (get[2] == 1) {
        monaget();
        get[2] = 2;
      }
      if (get[3] == 1) {
        kitget();
        get[3] = 2;
      }
    }
    function garfget() {
      writeterm("YOU HAVE GARFIELD NOW");
      console.log("g");
      garfhealth = 7;
      party[0] = 1;
      gamestate = "1";
    }
    function monaget() {
      writeterm("YOU HAVE MORGANA NOW");
      console.log("m");
      monahealth = 7;
      party[2] = 1;
      gamestate = "1";
    }
    function daliget() {
      writeterm("YOU HAVE DALI NOW");
      console.log("d");
      dalihealth = 7;
      party[1] = 1;
      gamestate = "1";
    }
    function kitget() {
      writeterm("YOU HAVE MR. KITTY NOW");
      console.log("k");
      kithealth = 7;
      party[3] = 1;
      gamestate = "1";
    }
    function win1() {
      writeterm("THE BOSS HAS BEEN DEFEATED")
      let partywincount = 0;
      if (party[0] == 1) {
        partywincount += 1;
      }
      if (party[1] == 1) {
        partywincount += 1;
      }
      if (party[2] == 1) {
        partywincount += 1;
      }
      if (party[3] == 1) {
        partywincount += 1;
      }
      if (partywincount == 0) {
        points += 100;
      } else if (partywincount == 1) {
        points += 75;
      } else if (partywincount == 2) {
        points += 50;
      } else if (partywincount == 3) {
        points += 25;
      } else {points += 10}
      writeterm("CONGRATULATIONS, YOU WON!");
      writeterm("YOUR TIME: " + time);
      writeterm("YOUR HEALTH: " + phealth);
      writeterm("YOUR POINTS: " + points);
      writeterm("YOU HAVE " + partywincount + " PARTY MEMBERS OUT OF 4");
    }
  </script>
</body>
</html>
