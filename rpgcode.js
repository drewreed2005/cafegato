function openPopup(){
    document.getElementById("signin").classList.add("open-popup");
}
function closePopup(){
    document.getElementById("signin").classList.remove("open-popup");
}
    
let gamestate = "0"
let time = 0;
let timefinish = 0;
let points = 0;
const party = [0, 0, 0, 0, 1];
let encountercountdown = 2;
let levelcount = 0;
let inpbox = document.getElementById("textinput");
let uinp = document.getElementById("textinput").value;
let phealth = 7;
let atkstat = 1;
let ophealth = 7;
let pp = 10
let ppfactor = 0
let healfactor = 0
const partyhp = [6, 0, 0, 0, 0]
const get = [0, 0, 0, 0]

function statupdate(num, healthparty, healthvalue) {
    let element = document.getElementById("stats").children[num];
    let newNode = document.createTextNode(healthparty + ": " + healthvalue);
    element.replaceChild(newNode, element.childNodes[0]);
}

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
function heal(){
    if (pp >= 1){
        pp -= 1
        statupdate(1, "MANA", pp)
        garfunkle = Math.floor(Math.random()*2) + 1 + healfactor
        partyhp[0] += garfunkle
        writeterm("YOU HEALED " + garfunkle + " HEALTH")
        statupdate(0, "HP", partyhp[0])
    } else {writeterm("YOU DO NOT HAVE ENOUGH MANA")}
}
function enter() {
    if (gamestate == "0") {
        gamestate0();
    } else if (gamestate == "1") {
        gamestate1();
    } else if (gamestate == "-1") {
        win1();
    } else if (gamestate == "2") {
        turn(0);
    } else if (gamestate == "3") {
        recruit();
    } else if (gamestate == "L") {
        writeterm("YOU DIED")
        writeterm("TIME: " + time)
    } else if (gamestate == "4") {
        turn(1)
    }
}
function gamestate0() {
    if (uinp == "PLAY") {
        console.log("play start")
        setInterval(timeincrease, 1000);
        gamestate = "1";
        writeterm("<br>WHAT WOULD YOU LIKE TO DO?");
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
    } else if (uinp == "FIND ENEMY" || uinp == "ENEMY") {
        writeterm("<br>YOU ARE IN FRONT OF AN ENEMY")
        writeterm("YOU CAN ATTACK, USE AGI, HEAL, AND CHECK STATUS")
        randenc()
    } else if (uinp == "FIGHT BOSS" || uinp == "BOSS") {
        ophealth = 30
        gamestate = "4"
        writeterm("<br>THE BOSS STANDS BEFORE YOU");
        writeterm("YOU MUST DEFEAT HIM")
        writeterm("YOU CAN ATTACK, USE AGI, HEAL, AND CHECK STATUS")
    } else if (uinp == "WIN") {
        gamestate = "-1";
        timefinish = time
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
    writeterm("<br>PARTY:")
    if (party[0] == 1) {writeterm("GARFIELD")}
    if (party[1] == 1) {writeterm("DALI")}
    if (party[2] == 1) {writeterm("MORGANA")}
    if (party[3] == 1) {writeterm("MR. KITTY")}
    if (party[0] == 0 && party[1] == 0 && party[2] == 0 && party[3] == 0) {writeterm("EMPTY")}
    writeterm("ATTACK: " + atkstat);
    writeterm("PARTY HEALTH: " + partyhp);
    writeterm("MANA: " + pp)
}
function randenc() {
    gamestate = "2"
    ophealth = 10
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
    writeterm("<br>YOU'RE FIGHTING GARFIELD");
    writeterm("DEFEAT HIM TO RECRUIT HIM");
    writeterm("YOU CAN ATTACK, USE AGI, HEAL, AND CHECK STATUS")
    ophealth = 12;
}
function dali() {
    writeterm("<br>YOU'RE FIGHTING DALI");
    writeterm("DEFEAT HIM TO RECRUIT HIM");
    writeterm("YOU CAN ATTACK, USE AGI, HEAL, AND CHECK STATUS")
    ophealth = 12;
}
function mona() {
    writeterm("<br>YOU'RE FIGHTING MORGANA");
    writeterm("DEFEAT HIM TO RECRUIT HIM");
    writeterm("YOU CAN ATTACK, USE AGI, HEAL, AND CHECK STATUS")
    ophealth = 12;
}
function mrkitty() {
    writeterm("<br>YOU'RE FIGHTING MR. KITTY");
    writeterm("DEFEAT HIM TO RECRUIT HIM");
    writeterm("YOU CAN ATTACK, USE AGI, HEAL, AND CHECK STATUS")
    ophealth = 12;
}
function agi(){
    if (pp >= 3) {
        console.log("agi")
        pp -= 3
        statupdate(1, "MANA", pp)
        ophealth -= Math.floor(atkstat * 1.25) + 6
        writeterm("AGI DEALS " + (Math.floor(atkstat * 1.25) + 6) + " DAMAGE")
    } else{writeterm("YOU DO NOT HAVE ENOUGH MANA")}
}
function playerturn(){
    if (uinp == "ATTACK") {
        attack();
        console.log("attack");
    } else if (uinp == "PERSONA") {
        writeterm("YOU CAN'T CHANGE PERSONAS");
    } else if (uinp == "CHECK") {
        writeterm("PLAYER HEALTH: " + partyhp[0]);
        writeterm("OPPONENT HEALTH: " + ophealth);
        writeterm("MANA: " + pp)
        writeterm("TIME: " + time)
    } else if (uinp == "WIN") {
        gamestate = "-1";
        timefinish = time
    } else if (uinp == "AGI") {
        agi()
    } else if (uinp = "HEAL") {heal()}
}
function opturn() {
    let cent = Math.floor(Math.random() * 5);
    while (partyhp[0] > 0) {
        console.log("one while loop")
        cent = Math.floor(Math.random() * 5);
        if (partyhp[cent] > 0) {
            partyhp[cent] -= 1;
            if (cent == 1) {
                writeterm("GARFIELD TOOK 1 DAMAGE");
                statupdate(2, "GARFIELD", partyhp[1])
            } else if (cent == 2) {
                writeterm("DALI TOOK 1 DAMAGE");
                statupdate(4, "DALI", partyhp[2])
            } else if (cent == 3) {
                writeterm("MORGANA TOOK 1 DAMAGE");
                statupdate(3, "MORGANA", partyhp[3])
            } else if (cent == 4) {
                writeterm("MR. KITTY TOOK 1 DAMAGE");
                statupdate(5, "MR. KITTY", partyhp[4])
            } else {
                writeterm("YOU TOOK 1 DAMAGE")
                statupdate(0, "HP", partyhp[0])
            }
            break
        }
    }
}
function turn(bic) {
    playerturn();
    if (party[0] == 1) {
        writeterm("GARFIELD ATTACKS");
        ophealth -= Math.floor(Math.random() * (3 - 1) ) + 1;
    }
    if (party[1] == 1) {
        writeterm("DALI ATTACKS");
        ophealth -= Math.floor(Math.random() * (3 - 1) ) + 1;
    }
    if (party[2] == 1) {
        writeterm("MORGANA ATTACKS");
        ophealth -= Math.floor(Math.random() * (3 - 1) ) + 1;
    }
    if (party[3] == 1) {
        writeterm("MR. KITTY ATTACKS");
        ophealth -= Math.floor(Math.random() * (3 - 1) ) + 1;
    }
    if (bic == 0) {
        if (ophealth <= 0) {
            winbattle()
        } else {opturn()}
    } else if (bic == 1) {
        if (ophealth <= 0) {
        timefinish = time
        win1()
        openPopup()
        gamestate = "-1"
        } else {bossturn()}
    }
    if (partyhp[0] <= 0) {
        writeterm("<br>YOU DIED")
        writeterm("TIME: " + time)
        gamestate = "L"
    }
}
function bossturn() {
    let bent = Math.floor(Math.random() * 5);
    let davidt = Math.floor(Math.random() * (3 - 1) ) + 1;
    while (partyhp[0] > 0) {
        bent = Math.floor(Math.random() * 5);
        if (partyhp[bent] > 0) {
            partyhp[bent] -= davidt;
            if (bent == 1) {
                writeterm("GARFIELD TOOK " + davidt + " DAMAGE");
                statupdate(2, "GARFIELD", partyhp[1])
            } else if (bent == 2) {
                writeterm("DALI TOOK " + davidt + " DAMAGE");
                statupdate(4, "DALI", partyhp[2])
            } else if (bent == 3) {
                writeterm("MORGANA TOOK " + davidt + " DAMAGE");
                statupdate(3, "MORGANA", partyhp[3])
            } else if (bent == 4) {
                writeterm("MR. KITTY TOOK " + davidt + " DAMAGE");
                statupdate(5, "MR. KITTY", partyhp[4])
            } else {
                writeterm("YOU TOOK " + davidt + " DAMAGE")
                statupdate(0, "HP", partyhp[0])
            }
            break
        }
    }
}
function boss() {
    playerturn()
    if (party[0] == 1) {
        writeterm("GARFIELD ATTACKS");
        ophealth -= Math.floor(Math.random() * (3 - 1) ) + 1;
    }
    if (party[1] == 1) {
        writeterm("DALI ATTACKS");
        ophealth -= Math.floor(Math.random() * (3 - 1) ) + 1;
    }
    if (party[2] == 1) {
        writeterm("MORGANA ATTACKS");
        ophealth -= Math.floor(Math.random() * (3 - 1) ) + 1;
    }
    if (party[3] == 1) {
        writeterm("MR. KITTY ATTACKS");
        ophealth -= Math.floor(Math.random() * (3 - 1) ) + 1;
    }
    bossturn()
    if (ophealth <= 0) {
        timefinish = time
        win1()
        openPopup()
        gamestate = "-1"
    }
    if (partyhp[0] <= 0) {
        writeterm("<br>YOU DIED")
        writeterm("TIME: " + time)
        gamestate = "L"
    }
}
function healthreset() {
    partyhp[0] = 6;
    if (party[0] == 1) {partyhp[1] = 7}
    if (party[1] == 1) {partyhp[2] = 7}
    if (party[2] == 1) {partyhp[3] = 7}
    if (party[3] == 1) {partyhp[4] = 7}
    statupdate(0, "HP", partyhp[0])
    statupdate(5, "MR. KITTY", partyhp[4])
    statupdate(3, "MORGANA", partyhp[3])
    statupdate(4, "DALI", partyhp[2])
    statupdate(2, "GARFIELD", partyhp[1])
}
function encountcheck() {
    console.log("Encounter check")
    encountercountdown = encountercountdown - 1;
    if (encountercountdown == 0) {
        levelcount += 1;
        encountercountdown = 1 + levelcount;
        if (levelcount == 2) {healfactor = 1}
        if (levelcount == 3) {ppfactor = 5}
        atkstat += 1
        writeterm("YOU LEVELED UP");
        writeterm("YOUR ATTACK: " + atkstat + "<br>")
        pp = 10 + ppfactor
        statupdate(1, "MANA", pp)
    }
}
function winbattle() {
    writeterm("<br>THE OPPONENT HAS BEEN DEFFEATED");
    gamestate = "1";
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
    healthreset()
    encountcheck();
    writeterm("WHAT WOULD YOU LIKE TO DO?");
    writeterm("RECRUIT A NEW TEAMMATE");
    writeterm("FIND ENEMY, FIGHT BOSS");
}
function garfget() {
    writeterm("YOU HAVE GARFIELD NOW");
    document.getElementById("garfhp").style.display = "block"
    partyhp[1] = 7;
    party[0] = 1;
    gamestate = "1";
}
function monaget() {
    writeterm("YOU HAVE MORGANA NOW");
    document.getElementById("monahp").style.display = "block"
    partyhp[3] = 7;
    party[2] = 1;
    gamestate = "1";
}
function daliget() {
    writeterm("YOU HAVE DALI NOW");
    document.getElementById("dalihp").style.display = "block"
    partyhp[2] = 7;
    party[1] = 1;
    gamestate = "1";
}
function kitget() {
    writeterm("YOU HAVE MR. KITTY NOW");
    document.getElementById("kithp").style.display = "block"
    partyhp[4] = 7;
    party[3] = 1;
    gamestate = "1";
}
function win1() {
    writeterm("<br>THE BOSS HAS BEEN DEFEATED")
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
    writeterm("CONGRATULATIONS, YOU WON!");
    writeterm("YOUR TIME: " + timefinish);
    writeterm("YOUR HEALTH: " + partyhp[0]);
    writeterm("YOUR LEVEL: " + levelcount);
    writeterm("YOUR MANA: " + pp);
    writeterm("YOU HAVE " + partywincount + " PARTY MEMBERS OUT OF 4");
}


// prepare HTML result container for new output
const resultContainer = document.getElementById("result");
// prepare URL's to allow easy switch from deployment and localhost
const url = "https://cgato.duckdns.org/api/pisses"
//const url = "https://flask.nighthawkcodingsociety.com/api/users"
const create_fetch = url + '/create';
const read_fetch = url + '/';
const del_url = "https://cgato.duckdns.org/api/pisses/delete";

// Load users on page entry
read_pisses();
    
    
// Display User Table, data is fetched from Backend Database
function read_pisses() {
    // prepare fetch options
    const read_options = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
    };

    // fetch the data from API
    fetch(read_fetch, read_options)
        // response is a RESTful "promise" on any successful fetch
        .then(response => {
        // check for response errors
            if (response.status !== 200) {
                const errorMsg = 'Database read error: ' + response.status;
                console.log(errorMsg);
                const tr = document.createElement("tr");
                const td = document.createElement("td");
                td.innerHTML = errorMsg;
                tr.appendChild(td);
                resultContainer.appendChild(tr);
                return;
            }
        // valid response will have json data
            response.json().then(data => {
                console.log(data);
                data.sort(function(a, b){return a.time - b.time})
                console.log(data);
                for (let row in data) {
                    console.log(data[row]);
                    add_row(data[row]);
                }
            })
        })
    // catch fetch errors (ie ACCESS to server blocked)
        .catch(err => {
            console.error(err);
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            td.innerHTML = err;
            tr.appendChild(td);
            resultContainer.appendChild(tr);
        });
}
    
function create_piss(){
    document.getElementById("level").value = levelcount
    document.getElementById("time").value = timefinish
    //Validate Password (must be 6-20 characters in len)
    //verifyPassword("click");
    const body = {
        name: document.getElementById("name").value,
        time: document.getElementById("time").value,
        level: document.getElementById("level").value,
        pin: document.getElementById("pin").value
    };
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json",
            'Authorization': 'Bearer my-token',
        },
    };

    // URL for Create API
    // Fetch API call to the database to create a new user
    fetch(create_fetch, requestOptions)
        .then(response => {
        // trap error response from Web API
            if (response.status !== 200) {
                const errorMsg = 'Database create error: ' + response.status;
                console.log(errorMsg);
                const tr = document.createElement("tr");
                const td = document.createElement("td");
                td.innerHTML = errorMsg;
                tr.appendChild(td);
                resultContainer.appendChild(tr);
                return;
            }
        // response contains valid result
            response.json().then(data => {
                console.log(data);
                //add a table row for the new/created userid
                add_row(data);
            })
        })
}
    
function add_row(data) {
    const tr = document.createElement("tr");
    const name = document.createElement("td");
    const time = document.createElement("td");
    const level = document.createElement("td");
    

    // obtain data that is specific to the API
    name.innerHTML = data.name; 
    time.innerHTML = data.time; 
    level.innerHTML = data.level; 

    // add HTML to container
    tr.appendChild(name);
    tr.appendChild(time);
    tr.appendChild(level);

    resultContainer.appendChild(tr);
}
  
function delete_piss() {
    var del_playername = document.getElementById("playername_del").value;
    var del_playerpin = document.getElementById("playerpin_del").value;
    var success = false;
    fetch(read_url, read_options)
        // response is a RESTful "promise" on any successful fetch
        .then(response => {
        // check for response errors
        if (response.status !== 200) {
            const errorMsg = 'Database response error: ' + response.status;
            console.log(errorMsg);
        };
        // valid response will have json data
        response.json().then(data => {
            data.forEach(piss => {
                if (piss['name'] == del_playername && piss['pin'] == del_playerpin) {
                    // if all validations successful
                    const del_ID = piss['id'];
                    const body = {
                        'id':del_ID
                    };
                    const del_options = {
                        method: 'DELETE',
                        body: JSON.stringify(body),
                        headers: {
                            'Content-Type':'application/json',
                            'Authorization': 'Bearer my-token',
                        },
                    };
                    console.log(body);
                    fetch(del_url, del_options)
                        .then(response =>
                            response.json().then(data => {
                                console.log(data);
                            })
                        )
                    alert('You have successfully deleted the player "' + piss['name'] + '" from the player database.');
                    success = true;
                }
            })
            if (success == false) {alert("There was an error in one of the two fields you have filled in. Make sure that your player name and pin both match the case used when first created. (You can copy-paste the player name from the data below.)")}
        })
    })
}