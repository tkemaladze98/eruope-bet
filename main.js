const slotCarousel = document.querySelector(".slot-carousel");
const weekDivs = document.querySelectorAll(".week-div");
const terms = document.querySelectorAll(".terms");
const example = document.querySelectorAll(".example");

weekDivs.forEach(o => {
    if(o.classList.contains("activeDiv")){
        o.children[0].children[0].style.color = "white";
        o.children[0].children[1].style.color = "white";
    }
})

example.forEach(o => {
    o.addEventListener("mouseenter", function(){
        o.nextElementSibling.style.setProperty("display", "block", "important");
    })
    o.addEventListener("mouseleave", function(){
        o.nextElementSibling.style.setProperty("display", "none", "important");
    })
})


var slotsNameArray = [
    "5-Lions-Megaways", "AztecBonanza", "aztecGems", "Big-Bass-Bonanza-Megaways", "BigBassBonanza", "Bigger-Bass-Bonanza",
    "Book-of-Fallen", "bronco", "Buffalo-King-Megaways", "buffaloKing", "CaishenGold", "Cash-Bonanza", "chilliHeat", "Christmas-Carol-Megaways",
    "CowboyGold", "CurseOfwerewolfMegaways", "DanceParty", "DragoJewels", "FireStrike", "FishinReel", "FloatingDragon", "fruitParty", "FruitParty2",
    "GatesOfOlympus", "GemsBonanza", "greatRhinoDeluxe", "greatRhinoMegaways", "Hot-Fiesta", "JohnHunterAndTheMayanGods", "JohnHunterScarabQueen",
    "johnHunterTUT", "JokerJewels", "JokerKing", "JokersJewels", "Juicy-Fruits", "MadameDestiny", "madameDestinyMegaways", "master-joker", "MustangGold",
    "Mysterious", "MysteriousEgypt", "PirateGold", "PirateGoldDeluxe", "Power-of-Thor-Megaways", "pyramidKing", "releaseKraken", "rhino", "Rise-of-Giza-PowerNudge",
    "Santa", "SpartanKing", "Star-Bounty", "Starlight-Princess", "starzMegaways", "SuperJoker", "SuperX", "SweetBonanza", "SweetBonanzaXmas", "Temujin-Treasures",
    "TheDogHouse", "TheDogHouseMegaways", "TheGreatChickenEscape", "TheHandOfMidas", "Treasure-Wild", "ultraBurn", "ultraHoldAndSpin", "vampiresWolves",
    "Voodoo-Magic", "voodooMagic", "werewolfMegaways", "WildWalker", "WildWestGold", "WildWildRiches", "WolfGold"
]

function slotGame(slot) {
    return `<a class="images">
                <img src="file:///C:/Users/A/Desktop/eruope-bet/assets/thumb/${slot}.jpg" alt="">
            </a>`
}

slotsNameArray.forEach(o => {
    var game = slotGame(o);
    slotCarousel.innerHTML += game;
})

terms.forEach(o => {
    o.addEventListener("click", function(){
        o.children[1].classList.toggle("active-text");
        o.children[0].children[1].classList.toggle("active-rotate");
    })
})









var numJewelsInStones = function (jewels, stones) {
    var count = 0;
    for (var i = 0; i < stones.length; i++) {
        for (var j = 0; j < jewels.length; j++) {
            if (jewels[j] == stones[i]) {
                count++;
            }
        }
    }
    return count;
};


var isValid = function (s) {
    var trueOrFalse;
    if (s.length == 0) {
        trueOrFalse = true;
    } else if (s.length % 2 != 0) {
        trueOrFalse = false;
    } else {
        var tmpString = "";
        for (var i = 0; i < s.length; i++) {
            var lastSymbol = tmpString[tmpString.length - 1];
            if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
                tmpString += s[i];
                trueOrFalse = false;
            } else if (s[i] == ")" && lastSymbol == "(" || s[i] == "}" && lastSymbol == "{" || s[i] == "]" && lastSymbol == "[") {
                tmpString = tmpString.slice(0,tmpString.length - 1);
                trueOrFalse = true;
            }else{
                trueOrFalse = false;
            }
        }
    }
    return trueOrFalse;
};
