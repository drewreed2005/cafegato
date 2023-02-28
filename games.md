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
		gameboard()
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
crossorigin="anonymous"
src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"
</script>

<div class = "flex-all">
  <div class="flex-left">
    <div>
      <div id="game-board">
    </div>
  </div>

  <div class="flex-right">
    <div>
      <h1>Purr-dle</h1>
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
    

<style>
 {background-color: #f1f0e2;}
/*
    .flex-all {
        display: flex;
        justify-content: center;
    }
    .flex-left {
        display: flex;
        padding: 0 30px 30px;
    }
    .flex-right {
        display: flex;
        padding: 0 30px 30px;
    }
*/

    h1 {
      /* Title Design */
        text-align: center;
        font-family: Serif;
        color: #000000;
        font-size: 4rem;
    }
    h2 {
      /* Title Design */
        text-align: center;
        font-family: Serif;
        color: #000000;
        font-size: 3rem;
    }
    .howto-container{
        width: 100%
        background: #3c5077;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    /* How To button design: */
    .howto-button{    
      background: #ffffe0;
      border: 3;
      border-color: #FFDB45; 
      outline: none;
      cursor: pointer;
      font-size: 20px;
      font-weight: 500;
      border-radius: 10px;
      padding: 5 10px 5px;
    }
    .howto-popup{
      width: 400px;
      background: #F8E69A;
      border-radius: 20px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%,-50%) scale(0.1);
      text-align: center;
      font-size: 1.2rem;
      font-weight: 400;
      padding: 0 30px 30px;
      visibility: hidden;
      transition: transform 0.3s, top 0.3s;
    }
    .open-popup{
      visibility: visible;
      top: 50%;
      transform: translate(-50%,-100%) scale(1);
    }
    .howto-popup h2{
        font-weight: 30px
        margin: 30px 10 10px
    }
    .howto-popup button{
        width: 10%
        margin-top: 2px;
        font-size: 18px;
        border-radius: 4px;
        cursor: pointer;
        background-color:#ffad51

    }
    .howto-popup button:hover{
      background-color:#ff941c;
      transition: 0.1s;
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
        font-weight: 400;
        padding: 0.5rem;
        margin: 0 3px;
        cursor: pointer;
        text-transform: uppercase;
        color: #000000;
        background-color: #ffffe0;
        border: 2px solid #FFDB45;
      }
    /* Mouse hover over button color change: */
    .howto-button:hover, .keyboard-button:hover {
      background-color: #ffee87;
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
// main program
// WORDS contains all the possible words that could be the unknown correct guess
    var WORDS = [ "aback",   "abase",   "abate",   "abbey",   "abbot",   "abhor",   "abide",   "abled",   "abode",   "abort",   "about",   "above",   "abuse",   "abyss",   "acorn",   "acrid",   "actor",   "acute",   "adage",   "adapt",   "adept",   "admin",   "admit",   "adobe",   "adopt",   "adore",   "adorn",   "adult",   "affix",   "afire",   "afoot",   "afoul",   "after",   "again",   "agape",   "agate",   "agent",   "agile",   "aging",   "aglow",   "agony",   "agree",   "ahead",   "aider",   "aisle",   "alarm",   "album",   "alert",   "algae",   "alibi",   "alien",   "align",   "alike",   "alive",   "allay",   "alley",   "allot",   "allow",   "alloy",   "aloft",   "alone",   "along",   "aloof",   "aloud",   "alpha",   "altar",   "alter",   "amass",   "amaze",   "amber",   "amble",   "amend",   "amiss",   "amity",   "among",   "ample",   "amply",   "amuse",   "angel",   "anger",   "angle",   "angry",   "angst",   "anime",   "ankle",   "annex",   "annoy",   "annul",   "anode",   "antic",   "anvil",   "aorta",   "apart",   "aphid",   "aping",   "apnea",   "apple",   "apply",   "apron",   "aptly",   "arbor",   "ardor",   "arena",   "argue",   "arise",   "armor",   "aroma",   "arose",   "array",   "arrow",   "arson",   "artsy",   "ascot",   "ashen",   "aside",   "askew",   "assay",   "asset",   "atoll",   "atone",   "attic",   "audio",   "audit",   "augur",   "aunty",   "avail",   "avert",   "avian",   "avoid",   "await",   "awake",   "award",   "aware",   "awash",   "awful",   "awoke",   "axial",   "axiom",   "axion",   "azure",   "bacon",   "badge",   "badly",   "bagel",   "baggy",   "baker",   "baler",   "balmy",   "banal",   "banjo",   "barge",   "baron",   "basal",   "basic",   "basil",   "basin",   "basis",   "baste",   "batch",   "bathe",   "baton",   "batty",   "bawdy",   "bayou",   "beach",   "beady",   "beard",   "beast",   "beech",   "beefy",   "befit",   "began",   "begat",   "beget",   "begin",   "begun",   "being",   "belch",   "belie",   "belle",   "belly",   "below",   "bench",   "beret",   "berry",   "berth",   "beset",   "betel",   "bevel",   "bezel",   "bible",   "bicep",   "biddy",   "bigot",   "bilge",   "billy",   "binge",   "bingo",   "biome",   "birch",   "birth",   "bison",   "bitty",   "black",   "blade",   "blame",   "bland",   "blank",   "blare",   "blast",   "blaze",   "bleak",   "bleat",   "bleed",   "bleep",   "blend",   "bless",   "blimp",   "blind",   "blink",   "bliss",   "blitz",   "bloat",   "block",   "bloke",   "blond",   "blood",   "bloom",   "blown",   "bluer",   "bluff",   "blunt",   "blurb",   "blurt",   "blush",   "board",   "boast",   "bobby",   "boney",   "bongo",   "bonus",   "booby",   "boost",   "booth",   "booty",   "booze",   "boozy",   "borax",   "borne",   "bosom",   "bossy",   "botch",   "bough",   "boule",   "bound",   "bowel",   "boxer",   "brace",   "braid",   "brain",   "brake",   "brand",   "brash",   "brass",   "brave",   "bravo",   "brawl",   "brawn",   "bread",   "break",   "breed",   "briar",   "bribe",   "brick",   "bride",   "brief",   "brine",   "bring",   "brink",   "briny",   "brisk",   "broad",   "broil",   "broke",   "brood",   "brook",   "broom",   "broth",   "brown",   "brunt",   "brush",   "brute",   "buddy",   "budge",   "buggy",   "bugle",   "build",   "built",   "bulge",   "bulky",   "bully",   "bunch",   "bunny",   "burly",   "burnt",   "burst",   "bused",   "bushy",   "butch",   "butte",   "buxom",   "buyer",   "bylaw",   "cabal",   "cabby",   "cabin",   "cable",   "cacao",   "cache",   "cacti",   "caddy",   "cadet",   "cagey",   "cairn",   "camel",   "cameo",   "canal",   "candy",   "canny",   "canoe",   "canon",   "caper",   "caput",   "carat",   "cargo",   "carol",   "carry",   "carve",   "caste",   "catch",   "cater",   "catty",   "caulk",   "cause",   "cavil",   "cease",   "cedar",   "cello",   "chafe",   "chaff",   "chain",   "chair",   "chalk",   "champ",   "chant",   "chaos",   "chard",   "charm",   "chart",   "chase",   "chasm",   "cheap",   "cheat",   "check",   "cheek",   "cheer",   "chess",   "chest",   "chick",   "chide",   "chief",   "child",   "chili",   "chill",   "chime",   "china",   "chirp",   "chock",   "choir",   "choke",   "chord",   "chore",   "chose",   "chuck",   "chump",   "chunk",   "churn",   "chute",   "cider",   "cigar",   "cinch",   "circa",   "civic",   "civil",   "clack",   "claim",   "clamp",   "clang",   "clank",   "clash",   "clasp",   "class",   "clean",   "clear",   "cleat",   "cleft",   "clerk",   "click",   "cliff",   "climb",   "cling",   "clink",   "cloak",   "clock",   "clone",   "close",   "cloth",   "cloud",   "clout",   "clove",   "clown",   "cluck",   "clued",   "clump",   "clung",   "coach",   "coast",   "cobra",   "cocoa",   "colon",   "color",   "comet",   "comfy",   "comic",   "comma",   "conch",   "condo",   "conic",   "copse",   "coral",   "corer",   "corny",   "couch",   "cough",   "could",   "count",   "coupe",   "court",   "coven",   "cover",   "covet",   "covey",   "cower",   "coyly",   "crack",   "craft",   "cramp",   "crane",   "crank",   "crash",   "crass",   "crate",   "crave",   "crawl",   "craze",   "crazy",   "creak",   "cream",   "credo",   "creed",   "creek",   "creep",   "creme",   "crepe",   "crept",   "cress",   "crest",   "crick",   "cried",   "crier",   "crime",   "crimp",   "crisp",   "croak",   "crock",   "crone",   "crony",   "crook",   "cross",   "croup",   "crowd",   "crown",   "crude",   "cruel",   "crumb",   "crump",   "crush",   "crust",   "crypt",   "cubic",   "cumin",   "curio",   "curly",   "curry",   "curse",   "curve",   "curvy",   "cutie",   "cyber",   "cycle",   "cynic",   "daddy",   "daily",   "dairy",   "daisy",   "dally",   "dance",   "dandy",   "datum",   "daunt",   "dealt",   "death",   "debar",   "debit",   "debug",   "debut",   "decal",   "decay",   "decor",   "decoy",   "decry",   "defer",   "deign",   "deity",   "delay",   "delta",   "delve",   "demon",   "demur",   "denim",   "dense",   "depot",   "depth",   "derby",   "deter",   "detox",   "deuce",   "devil",   "diary",   "dicey",   "digit",   "dilly",   "dimly",   "diner",   "dingo",   "dingy",   "diode",   "dirge",   "dirty",   "disco",   "ditch",   "ditto",   "ditty",   "diver",   "dizzy",   "dodge",   "dodgy",   "dogma",   "doing",   "dolly",   "donor",   "donut",   "dopey",   "doubt",   "dough",   "dowdy",   "dowel",   "downy",   "dowry",   "dozen",   "draft",   "drain",   "drake",   "drama",   "drank",   "drape",   "drawl",   "drawn",   "dread",   "dream",   "dress",   "dried",   "drier",   "drift",   "drill",   "drink",   "drive",   "droit",   "droll",   "drone",   "drool",   "droop",   "dross",   "drove",   "drown",   "druid",   "drunk",   "dryer",   "dryly",   "duchy",   "dully",   "dummy",   "dumpy",   "dunce",   "dusky",   "dusty",   "dutch",   "duvet",   "dwarf",   "dwell",   "dwelt",   "dying",   "eager",   "eagle",   "early",   "earth",   "easel",   "eaten",   "eater",   "ebony",   "eclat",   "edict",   "edify",   "eerie",   "egret",   "eight",   "eject",   "eking",   "elate",   "elbow",   "elder",   "elect",   "elegy",   "elfin",   "elide",   "elite",   "elope",   "elude",   "email",   "embed",   "ember",   "emcee",   "empty",   "enact",   "endow",   "enema",   "enemy",   "enjoy",   "ennui",   "ensue",   "enter",   "entry",   "envoy",   "epoch",   "epoxy",   "equal",   "equip",   "erase",   "erect",   "erode",   "error",   "erupt",   "essay",   "ester",   "ether",   "ethic",   "ethos",   "etude",   "evade",   "event",   "every",   "evict",   "evoke",   "exact",   "exalt",   "excel",   "exert",   "exile",   "exist",   "expel",   "extol",   "extra",   "exult",   "eying",   "fable",   "facet",   "faint",   "fairy",   "faith",   "false",   "fancy",   "fanny",   "farce",   "fatal",   "fatty",   "fault",   "fauna",   "favor",   "feast",   "fecal",   "feign",   "fella",   "felon",   "femme",   "femur",   "fence",   "feral",   "ferry",   "fetal",   "fetch",   "fetid",   "fetus",   "fever",   "fewer",   "fiber",   "ficus",   "field",   "fiend",   "fiery",   "fifth",   "fifty",   "fight",   "filer",   "filet",   "filly",   "filmy",   "filth",   "final",   "finch",   "finer",   "first",   "fishy",   "fixer",   "fizzy",   "fjord",   "flack",   "flail",   "flair",   "flake",   "flaky",   "flame",   "flank",   "flare",   "flash",   "flask",   "fleck",   "fleet",   "flesh",   "flick",   "flier",   "fling",   "flint",   "flirt",   "float",   "flock",   "flood",   "floor",   "flora",   "floss",   "flour",   "flout",   "flown",   "fluff",   "fluid",   "fluke",   "flume",   "flung",   "flunk",   "flush",   "flute",   "flyer",   "foamy",   "focal",   "focus",   "foggy",   "foist",   "folio",   "folly",   "foray",   "force",   "forge",   "forgo",   "forte",   "forth",   "forty",   "forum",   "found",   "foyer",   "frail",   "frame",   "frank",   "fraud",   "freak",   "freed",   "freer",   "fresh",   "friar",   "fried",   "frill",   "frisk",   "fritz",   "frock",   "frond",   "front",   "frost",   "froth",   "frown",   "froze",   "fruit",   "fudge",   "fugue",   "fully",   "fungi",   "funky",   "funny",   "furor",   "furry",   "fussy",   "fuzzy",   "gaffe",   "gaily",   "gamer",   "gamma",   "gamut",   "gassy",   "gaudy",   "gauge",   "gaunt",   "gauze",   "gavel",   "gawky",   "gayer",   "gayly",   "gazer",   "gecko",   "geeky",   "geese",   "genie",   "genre",   "ghost",   "ghoul",   "giant",   "giddy",   "gipsy",   "girly",   "girth",   "given",   "giver",   "glade",   "gland",   "glare",   "glass",   "glaze",   "gleam",   "glean",   "glide",   "glint",   "gloat",   "globe",   "gloom",   "glory",   "gloss",   "glove",   "glyph",   "gnash",   "gnome",   "godly",   "going",   "golem",   "golly",   "gonad",   "goner",   "goody",   "gooey",   "goofy",   "goose",   "gorge",   "gouge",   "gourd",   "grace",   "grade",   "graft",   "grail",   "grain",   "grand",   "grant",   "grape",   "graph",   "grasp",   "grass",   "grate",   "grave",   "gravy",   "graze",   "great",   "greed",   "green",   "greet",   "grief",   "grill",   "grime",   "grimy",   "grind",   "gripe",   "groan",   "groin",   "groom",   "grope",   "gross",   "group",   "grout",   "grove",   "growl",   "grown",   "gruel",   "gruff",   "grunt",   "guard",   "guava",   "guess",   "guest",   "guide",   "guild",   "guile",   "guilt",   "guise",   "gulch",   "gully",   "gumbo",   "gummy",   "guppy",   "gusto",   "gusty",   "gypsy",   "habit",   "hairy",   "halve",   "handy",   "happy",   "hardy",   "harem",   "harpy",   "harry",   "harsh",   "haste",   "hasty",   "hatch",   "hater",   "haunt",   "haute",   "haven",   "havoc",   "hazel",   "heady",   "heard",   "heart",   "heath",   "heave",   "heavy",   "hedge",   "hefty",   "heist",   "helix",   "hello",   "hence",   "heron",   "hilly",   "hinge",   "hippo",   "hippy",   "hitch",   "hoard",   "hobby",   "hoist",   "holly",   "homer",   "honey",   "honor",   "horde",   "horny",   "horse",   "hotel",   "hotly",   "hound",   "house",   "hovel",   "hover",   "howdy",   "human",   "humid",   "humor",   "humph",   "humus",   "hunch",   "hunky",   "hurry",   "husky",   "hussy",   "hutch",   "hydro",   "hyena",   "hymen",   "hyper",   "icily",   "icing",   "ideal",   "idiom",   "idiot",   "idler",   "idyll",   "igloo",   "iliac",   "image",   "imbue",   "impel",   "imply",   "inane",   "inbox",   "incur",   "index",   "inept",   "inert",   "infer",   "ingot",   "inlay",   "inlet",   "inner",   "input",   "inter",   "intro",   "ionic",   "irate",   "irony",   "islet",   "issue",   "itchy",   "ivory",   "jaunt",   "jazzy",   "jelly",   "jerky",   "jetty",   "jewel",   "jiffy",   "joint",   "joist",   "joker",   "jolly",   "joust",   "judge",   "juice",   "juicy",   "jumbo",   "jumpy",   "junta",   "junto",   "juror",   "kappa",   "karma",   "kayak",   "kebab",   "khaki",   "kinky",   "kiosk",   "kitty",   "knack",   "knave",   "knead",   "kneed",   "kneel",   "knelt",   "knife",   "knock",   "knoll",   "known",   "koala",   "krill",   "label",   "labor",   "laden",   "ladle",   "lager",   "lance",   "lanky",   "lapel",   "lapse",   "large",   "larva",   "lasso",   "latch",   "later",   "lathe",   "latte",   "laugh",   "layer",   "leach",   "leafy",   "leaky",   "leant",   "leapt",   "learn",   "lease",   "leash",   "least",   "leave",   "ledge",   "leech",   "leery",   "lefty",   "legal",   "leggy",   "lemon",   "lemur",   "leper",   "level",   "lever",   "libel",   "liege",   "light",   "liken",   "lilac",   "limbo",   "limit",   "linen",   "liner",   "lingo",   "lipid",   "lithe",   "liver",   "livid",   "llama",   "loamy",   "loath",   "lobby",   "local",   "locus",   "lodge",   "lofty",   "logic",   "login",   "loopy",   "loose",   "lorry",   "loser",   "louse",   "lousy",   "lover",   "lower",   "lowly",   "loyal",   "lucid",   "lucky",   "lumen",   "lumpy",   "lunar",   "lunch",   "lunge",   "lupus",   "lurch",   "lurid",   "lusty",   "lying",   "lymph",   "lyric",   "macaw",   "macho",   "macro",   "madam",   "madly",   "mafia",   "magic",   "magma",   "maize",   "major",   "maker",   "mambo",   "mamma",   "mammy",   "manga",   "mange",   "mango",   "mangy",   "mania",   "manic",   "manly",   "manor",   "maple",   "march",   "marry",   "marsh",   "mason",   "masse",   "match",   "matey",   "mauve",   "maxim",   "maybe",   "mayor",   "mealy",   "meant",   "meaty",   "mecca",   "medal",   "media",   "medic",   "melee",   "melon",   "mercy",   "merge",   "merit",   "merry",   "metal",   "meter",   "metro",   "micro",   "midge",   "midst",   "might",   "milky",   "mimic",   "mince",   "miner",   "minim",   "minor",   "minty",   "minus",   "mirth",   "miser",   "missy",   "mocha",   "modal",   "model",   "modem",   "mogul",   "moist",   "molar",   "moldy",   "money",   "month",   "moody",   "moose",   "moral",   "moron",   "morph",   "mossy",   "motel",   "motif",   "motor",   "motto",   "moult",   "mound",   "mount",   "mourn",   "mouse",   "mouth",   "mover",   "movie",   "mower",   "mucky",   "mucus",   "muddy",   "mulch",   "mummy",   "munch",   "mural",   "murky",   "mushy",   "music",   "musky",   "musty",   "myrrh",   "nadir",   "naive",   "nanny",   "nasal",   "nasty",   "natal",   "naval",   "navel",   "needy",   "neigh",   "nerdy",   "nerve",   "never",   "newer",   "newly",   "nicer",   "niche",   "niece",   "night",   "ninja",   "ninny",   "ninth",   "noble",   "nobly",   "noise",   "noisy",   "nomad",   "noose",   "north",   "nosey",   "notch",   "novel",   "nudge",   "nurse",   "nutty",   "nylon",   "nymph",   "oaken",   "obese",   "occur",   "ocean",   "octal",   "octet",   "odder",   "oddly",   "offal",   "offer",   "often",   "olden",   "older",   "olive",   "ombre",   "omega",   "onion",   "onset",   "opera",   "opine",   "opium",   "optic",   "orbit",   "order",   "organ",   "other",   "otter",   "ought",   "ounce",   "outdo",   "outer",   "outgo",   "ovary",   "ovate",   "overt",   "ovine",   "ovoid",   "owing",   "owner",   "oxide",   "ozone",   "paddy",   "pagan",   "paint",   "paler",   "palsy",   "panel",   "panic",   "pansy",   "papal",   "paper",   "parer",   "parka",   "parry",   "parse",   "party",   "pasta",   "paste",   "pasty",   "patch",   "patio",   "patsy",   "patty",   "pause",   "payee",   "payer",   "peace",   "peach",   "pearl",   "pecan",   "pedal",   "penal",   "pence",   "penne",   "penny",   "perch",   "peril",   "perky",   "pesky",   "pesto",   "petal",   "petty",   "phase",   "phone",   "phony",   "photo",   "piano",   "picky",   "piece",   "piety",   "piggy",   "pilot",   "pinch",   "piney",   "pinky",   "pinto",   "piper",   "pique",   "pitch",   "pithy",   "pivot",   "pixel",   "pixie",   "pizza",   "place",   "plaid",   "plain",   "plait",   "plane",   "plank",   "plant",   "plate",   "plaza",   "plead",   "pleat",   "plied",   "plier",   "pluck",   "plumb",   "plume",   "plump",   "plunk",   "plush",   "poesy",   "point",   "poise",   "poker",   "polar",   "polka",   "polyp",   "pooch",   "poppy",   "porch",   "poser",   "posit",   "posse",   "pouch",   "pound",   "pouty",   "power",   "prank",   "prawn",   "preen",   "press",   "price",   "prick",   "pride",   "pried",   "prime",   "primo",   "print",   "prior",   "prism",   "privy",   "prize",   "probe",   "prone",   "prong",   "proof",   "prose",   "proud",   "prove",   "prowl",   "proxy",   "prude",   "prune",   "psalm",   "pubic",   "pudgy",   "puffy",   "pulpy",   "pulse",   "punch",   "pupil",   "puppy",   "puree",   "purer",   "purge",   "purse",   "pushy",   "putty",   "pygmy",   "quack",   "quail",   "quake",   "qualm",   "quark",   "quart",   "quash",   "quasi",   "queen",   "queer",   "quell",   "query",   "quest",   "queue",   "quick",   "quiet",   "quill",   "quilt",   "quirk",   "quite",   "quota",   "quote",   "quoth",   "rabbi",   "rabid",   "racer",   "radar",   "radii",   "radio",   "rainy",   "raise",   "rajah",   "rally",   "ralph",   "ramen",   "ranch",   "randy",   "range",   "rapid",   "rarer",   "raspy",   "ratio",   "ratty",   "raven",   "rayon",   "razor",   "reach",   "react",   "ready",   "realm",   "rearm",   "rebar",   "rebel",   "rebus",   "rebut",   "recap",   "recur",   "recut",   "reedy",   "refer",   "refit",   "regal",   "rehab",   "reign",   "relax",   "relay",   "relic",   "remit",   "renal",   "renew",   "repay",   "repel",   "reply",   "rerun",   "reset",   "resin",   "retch",   "retro",   "retry",   "reuse",   "revel",   "revue",   "rhino",   "rhyme",   "rider",   "ridge",   "rifle",   "right",   "rigid",   "rigor",   "rinse",   "ripen",   "riper",   "risen",   "riser",   "risky",   "rival",   "river",   "rivet",   "roach",   "roast",   "robin",   "robot",   "rocky",   "rodeo",   "roger",   "rogue",   "roomy",   "roost",   "rotor",   "rouge",   "rough",   "round",   "rouse",   "route",   "rover",   "rowdy",   "rower",   "royal",   "ruddy",   "ruder",   "rugby",   "ruler",   "rumba",   "rumor",   "rupee",   "rural",   "rusty",   "sadly",   "safer",   "saint",   "salad",   "sally",   "salon",   "salsa",   "salty",   "salve",   "salvo",   "sandy",   "saner",   "sappy",   "sassy",   "satin",   "satyr",   "sauce",   "saucy",   "sauna",   "saute",   "savor",   "savoy",   "savvy",   "scald",   "scale",   "scalp",   "scaly",   "scamp",   "scant",   "scare",   "scarf",   "scary",   "scene",   "scent",   "scion",   "scoff",   "scold",   "scone",   "scoop",   "scope",   "score",   "scorn",   "scour",   "scout",   "scowl",   "scram",   "scrap",   "scree",   "screw",   "scrub",   "scrum",   "scuba",   "sedan",   "seedy",   "segue",   "seize",   "semen",   "sense",   "sepia",   "serif",   "serum",   "serve",   "setup",   "seven",   "sever",   "sewer",   "shack",   "shade",   "shady",   "shaft",   "shake",   "shaky",   "shale",   "shall",   "shalt",   "shame",   "shank",   "shape",   "shard",   "share",   "shark",   "sharp",   "shave",   "shawl",   "shear",   "sheen",   "sheep",   "sheer",   "sheet",   "sheik",   "shelf",   "shell",   "shied",   "shift",   "shine",   "shiny",   "shire",   "shirk",   "shirt",   "shoal",   "shock",   "shone",   "shook",   "shoot",   "shore",   "shorn",   "short",   "shout",   "shove",   "shown",   "showy",   "shrew",   "shrub",   "shrug",   "shuck",   "shunt",   "shush",   "shyly",   "siege",   "sieve",   "sight",   "sigma",   "silky",   "silly",   "since",   "sinew",   "singe",   "siren",   "sissy",   "sixth",   "sixty",   "skate",   "skier",   "skiff",   "skill",   "skimp",   "skirt",   "skulk",   "skull",   "skunk",   "slack",   "slain",   "slang",   "slant",   "slash",   "slate",   "sleek",   "sleep",   "sleet",   "slept",   "slice",   "slick",   "slide",   "slime",   "slimy",   "sling",   "slink",   "sloop",   "slope",   "slosh",   "sloth",   "slump",   "slung",   "slunk",   "slurp",   "slush",   "slyly",   "smack",   "small",   "smart",   "smash",   "smear",   "smell",   "smelt",   "smile",   "smirk",   "smite",   "smith",   "smock",   "smoke",   "smoky",   "smote",   "snack",   "snail",   "snake",   "snaky",   "snare",   "snarl",   "sneak",   "sneer",   "snide",   "sniff",   "snipe",   "snoop",   "snore",   "snort",   "snout",   "snowy",   "snuck",   "snuff",   "soapy",   "sober",   "soggy",   "solar",   "solid",   "solve",   "sonar",   "sonic",   "sooth",   "sooty",   "sorry",   "sound",   "south",   "sower",   "space",   "spade",   "spank",   "spare",   "spark",   "spasm",   "spawn",   "speak",   "spear",   "speck",   "speed",   "spell",   "spelt",   "spend",   "spent",   "sperm",   "spice",   "spicy",   "spied",   "spiel",   "spike",   "spiky",   "spill",   "spilt",   "spine",   "spiny",   "spire",   "spite",   "splat",   "split",   "spoil",   "spoke",   "spoof",   "spook",   "spool",   "spoon",   "spore",   "sport",   "spout",   "spray",   "spree",   "sprig",   "spunk",   "spurn",   "spurt",   "squad",   "squat",   "squib",   "stack",   "staff",   "stage",   "staid",   "stain",   "stair",   "stake",   "stale",   "stalk",   "stall",   "stamp",   "stand",   "stank",   "stare",   "stark",   "start",   "stash",   "state",   "stave",   "stead",   "steak",   "steal",   "steam",   "steed",   "steel",   "steep",   "steer",   "stein",   "stern",   "stick",   "stiff",   "still",   "stilt",   "sting",   "stink",   "stint",   "stock",   "stoic",   "stoke",   "stole",   "stomp",   "stone",   "stony",   "stood",   "stool",   "stoop",   "store",   "stork",   "storm",   "story",   "stout",   "stove",   "strap",   "straw",   "stray",   "strip",   "strut",   "stuck",   "study",   "stuff",   "stump",   "stung",   "stunk",   "stunt",   "style",   "suave",   "sugar",   "suing",   "suite",   "sulky",   "sully",   "sumac",   "sunny",   "super",   "surer",   "surge",   "surly",   "sushi",   "swami",   "swamp",   "swarm",   "swash",   "swath",   "swear",   "sweat",   "sweep",   "sweet",   "swell",   "swept",   "swift",   "swill",   "swine",   "swing",   "swirl",   "swish",   "swoon",   "swoop",   "sword",   "swore",   "sworn",   "swung",   "synod",   "syrup",   "tabby",   "table",   "taboo",   "tacit",   "tacky",   "taffy",   "taint",   "taken",   "taker",   "tally",   "talon",   "tamer",   "tango",   "tangy",   "taper",   "tapir",   "tardy",   "tarot",   "taste",   "tasty",   "tatty",   "taunt",   "tawny",   "teach",   "teary",   "tease",   "teddy",   "teeth",   "tempo",   "tenet",   "tenor",   "tense",   "tenth",   "tepee",   "tepid",   "terra",   "terse",   "testy",   "thank",   "theft",   "their",   "theme",   "there",   "these",   "theta",   "thick",   "thief",   "thigh",   "thing",   "think",   "third",   "thong",   "thorn",   "those",   "three",   "threw",   "throb",   "throw",   "thrum",   "thumb",   "thump",   "thyme",   "tiara",   "tibia",   "tidal",   "tiger",   "tight",   "tilde",   "timer",   "timid",   "tipsy",   "titan",   "tithe",   "title",   "toast",   "today",   "toddy",   "token",   "tonal",   "tonga",   "tonic",   "tooth",   "topaz",   "topic",   "torch",   "torso",   "torus",   "total",   "totem",   "touch",   "tough",   "towel",   "tower",   "toxic",   "toxin",   "trace",   "track",   "tract",   "trade",   "trail",   "train",   "trait",   "tramp",   "trash",   "trawl",   "tread",   "treat",   "trend",   "triad",   "trial",   "tribe",   "trice",   "trick",   "tried",   "tripe",   "trite",   "troll",   "troop",   "trope",   "trout",   "trove",   "truce",   "truck",   "truer",   "truly",   "trump",   "trunk",   "truss",   "trust",   "truth",   "tryst",   "tubal",   "tuber",   "tulip",   "tulle",   "tumor",   "tunic",   "turbo",   "tutor",   "twang",   "tweak",   "tweed",   "tweet",   "twice",   "twine",   "twirl",   "twist",   "twixt",   "tying",   "udder",   "ulcer",   "ultra",   "umbra",   "uncle",   "uncut",   "under",   "undid",   "undue",   "unfed",   "unfit",   "unify",   "union",   "unite",   "unity",   "unlit",   "unmet",   "unset",   "untie",   "until",   "unwed",   "unzip",   "upper",   "upset",   "urban",   "urine",   "usage",   "usher",   "using",   "usual",   "usurp",   "utile",   "utter",   "vague",   "valet",   "valid",   "valor",   "value",   "valve",   "vapid",   "vapor",   "vault",   "vaunt",   "vegan",   "venom",   "venue",   "verge",   "verse",   "verso",   "verve",   "vicar",   "video",   "vigil",   "vigor",   "villa",   "vinyl",   "viola",   "viper",   "viral",   "virus",   "visit",   "visor",   "vista",   "vital",   "vivid",   "vixen",   "vocal",   "vodka",   "vogue",   "voice",   "voila",   "vomit",   "voter",   "vouch",   "vowel",   "vying",   "wacky",   "wafer",   "wager",   "wagon",   "waist",   "waive",   "waltz",   "warty",   "waste",   "watch",   "water",   "waver",   "waxen",   "weary",   "weave",   "wedge",   "weedy",   "weigh",   "weird",   "welch",   "welsh",   "whack",   "whale",   "wharf",   "wheat",   "wheel",   "whelp",   "where",   "which",   "whiff",   "while",   "whine",   "whiny",   "whirl",   "whisk",   "white",   "whole",   "whoop",   "whose",   "widen",   "wider",   "widow",   "width",   "wield",   "wight",   "willy",   "wimpy",   "wince",   "winch",   "windy",   "wiser",   "wispy",   "witch",   "witty",   "woken",   "woman",   "women",   "woody",   "wooer",   "wooly",   "woozy",   "wordy",   "world",   "worry",   "worse",   "worst",   "worth",   "would",   "wound",   "woven",   "wrack",   "wrath",   "wreak",   "wreck",   "wrest",   "wring",   "wrist",   "write",   "wrong",   "wrote",   "wrung",   "wryly",   "yacht",   "yearn",   "yeast",   "yield",   "young",   "youth",   "zebra",   "zesty",   "zonal" ]
    const numguess = 6;
    let guessesRemaining = numguess;
    let currentGuess = [];
    let nextLetter = 0;
    let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
    console.log(rightGuessString)
    // alert(rightGuessString)

    function gameboard() {
        let board = document.getElementById("game-board");
        for (let i = 0; i < numguess; i++) {
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
    /*
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
	*/
// functions	
    function clickKey (pressedKey) {
      if (guessesRemaining === 0) {
            return
        }
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
    }

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
    async function checkGuess () {
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

        /*
         if (!WORDS.includes(guessString)) {
            alert("Word not in list!")
            return
        }    
		*/
		// check if word exist by using dictionary API
		// has to use async and await to get result out
		 let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${guessString}`;

		result = await fetch(url).then(res => res.json())
		//console.log(result)
		if ("title" in result)
		{
			console.log(result["title"]);
			alert("Word doesn't exist!")
			return
		}
		else{
			console.log(result[0]); // word exist
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
            guessesRemaining -= 1;
            document.getElementById("score").value = 6-guessesRemaining;
            alert("You guessed right! Game over!")
            guessesRemaining = 0;
            return
        } else {
            guessesRemaining -= 1;
            document.getElementById("score").value = 6-guessesRemaining;
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
        clickKey(key);
        //document.dispatchEvent(new KeyboardEvent("keyup", {'key': key}))
	});
</script> 

<!--
<form action="createUser()">
    <p><label>
        Name:
        <input type="text" name="name" id="name" required>
    </label></p>
    <p><label>
        Pin:
        <input type="password" name="pin" id="pin" required>
    </label></p><p><label>
        Score:
        <input type="number" name="score" id="score" min="1" max="6" required>
    </label></p>
    <p>
        <button>Submit</button>
    </p>
</form>
-->

<h2 style="color:black">Enter Leaderboard</h2>
<table>
    <tr>
        <th><label for="name">Name</label></th>
        <th><label for="pin">Pin</label></th>
        <th><label for="score">Score</label></th>
    </tr>
    <tr>
        <td><input type="text" name="name" id="name" required></td>
        <td><input type="text" name="pin" id="pin" required></td>
        <td><input type="number" name="score" id="score" min="1" max="6" required></td>
        <td><button onclick="createUser()">Submit</button></td>
    </tr>
</table>

<h2 style="color:black" class="widebr">Leaderboard</h2>

<table>
    <tr>
        <th><label for="delete">Delete User by ID</label></th>
        <th><label for="deletepin">User Pin</label></th>
    </tr>
    <tr>
        <td><input type="number" name="id" id="id" required></td>
        <td><input type="text" name="deletepin" id="deletepin" required></td>
        <td><button onclick="deleteUser()">Delete</button></td>
    </tr>
</table>

<table id = "myTable">
  <thead>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <!--<th>Pin</th>
    -->
    <th>Score</th>
    <!--
    <button class="btn" id="sortbtn" onclick="sortScore()">Sort by Score</button>
    -->
  </tr>
  </thead>
  <tbody id="result">
    <!-- javascript generated data -->
  </tbody>
</table>


<script>

  // prepare HTML result container for new output
  const resultContainer = document.getElementById("result");
  // prepare URL's to allow easy switch from deployment and localhost
  //const url = "http://127.0.0.1:8239/api/wordles"
  const url = "https://cgato.duckdns.org/api/wordles"
  const create_fetch = url + '/create';
  const read_fetch = url + '/';
  const delete_fetch = url + '/delete';

  // Load users on page entry
  read_users();

  // Display User Table, data is fetched from Backend Database
  function read_users() {
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

  function createUser(){
    const body = {
        name: document.getElementById("name").value,
        pin: document.getElementById("pin").value,
        score: document.getElementById("score").value
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
          alert("There was an error processing your form. Please make sure all fields are filled in correctly:")
          if (response.status == 210){
            alert("Name is missing, or is less than 1 character.")
          }
          if (response.status == 220){
            alert("Pin is missing, or is less than 2 characters.")
          }
          if (response.status == 230){
            alert("Score is missing, or is not within range (1-6, inclusive).")
          }

          /*
          const errorMsg = 'Database create error: ' + response.status;
          console.log(errorMsg);
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.innerHTML = errorMsg;
          tr.appendChild(td);
          resultContainer.appendChild(tr);
          */
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

  function deleteUser(){
      //idToDelete = document.getElementById("id").value
      const body = {
        id: document.getElementById("id").value,
        pin: document.getElementById("deletepin").value
      };
      const requestOptions = {
          method: 'DELETE',
          body: JSON.stringify(body),
          headers: {
              "content-type": "application/json",
              'Authorization': 'Bearer my-token',
          },
      };

    fetch(delete_fetch, requestOptions)
      .then(response => {
        // trap error response from Web API
        if (response.status == 240){
            alert("ID not found, or user/pin incorrect. Please make sure all fields are filled in correctly.")
            return;
        }
        else{
            resultContainer.innerHTML = "";
            read_users();
            //delete_row(idToDelete);
            
        // response contains valid result
            response.json().then(data => {
                console.log(data);
            })
      }
    })
  }
    

  function add_row(data) {
    const tr = document.createElement("tr");
    const id = document.createElement("td");
    const name = document.createElement("td");
    //const pin = document.createElement("td");
    const score = document.createElement("td");
  

    // obtain data that is specific to the API
    id.innerHTML = data.id;
    name.innerHTML = data.name; 
    //pin.innerHTML = data.pin;
    score.innerHTML = data.score; 

    // add HTML to container
    tr.appendChild(id);
    tr.appendChild(name);
    //tr.appendChild(pin);
    tr.appendChild(score);

    resultContainer.appendChild(tr);
  }
/*
  function delete_row(id) {
    rownum = -1; 
    // note:  it has be defined : resultContainer = document.getElementById("result");  // tbody
    var i = 0;
    for (let row of resultContainer.rows) 
    {
        //console.log(row.cells[0].innerText)
        if (row.cells[0].innerText == String(id))
        {
           rownum = i;
           break
        }
        i++
    }
    if (rownum != -1)
    {
        resultContainer.deleteRow(rownum);
    }
  }
*/
</script>

<!--
  function sortScore() {
    var scoreval = document.getElementById("score").value;
    var sortedTable = [];
    // fetch the API
    fetch(url, read_options)
        // response is a RESTful "promise" on any successful fetch
        .then(response => {
        // check for response errors
        if (response.status !== 200) {
            const errorMsg = 'Database response error: ' + response.status;
            console.log(errorMsg);
        };
        // valid response will have json data
        response.json().then(data => {
            var testcopy = [...data];
            var d_length = testcopy.length;
              for (let j = 0; j < d_length; j++) {
              let i = 0;
              testcopy.forEach(event => {
                  if (i == 0) {
                      soon_fulldate = event['date'] + " " + event['start_time'];
                      temp_soondate = new Date(soon_fulldate);
                      soonval = event;
                            
                  };
                  i = i + 1;
              });
              sorted_List.push(soonval);
              for (let i = 0; i < testcopy.length; i++) {
                if (testcopy[i] == soonval) {
                      testcopy.splice(i, 1);
                  };
              };
          };
        } 
                console.log(sortedTable);
                var finalTable = [];
                for (let k = 0; k < sortedTable.length; k++) {
                    if (sortedTable[k]['date'].substring(6, 10) == monthval.substring(0, 4)) {
                        if (sorted_List[k]['date'].substring(0, 2) == monthval.substring(5, 7)) {final_List.push(sorted_List[k])} else {};
                    } else {};
                };
                console.log(finalTable);
            });
    });
    };

  function deleteUser(){
        const body = {
          id: document.getElementById("id").value
      };
      const requestOptions = {
          method: 'DELETE',
          body: JSON.stringify(body),
          headers: {
              "content-type": "application/json",
              'Authorization': 'Bearer my-token',
          },
      };
    }
-->
