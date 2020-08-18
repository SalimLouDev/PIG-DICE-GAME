document.getElementById("DiceImg1").style.display = "none";
document.getElementById("DiceImg2").style.display = "none";
var turn = 'Player1'
var roundScore = 0;
var globalScore1 = 0;
var globalScore2 = 0;
var winningScore = 100;
var playSound = false;
var myMusic = new Audio("8bit.mp3");


function rollTheDice() {
    document.getElementById("DiceImg1").style.display = "inline";
    document.getElementById("DiceImg2").style.display = "inline";

    if (turn == 'Player1') {
        var rolledNumber = (Math.floor(Math.random() * 6)) + 1;
        var rolledNumber2 = (Math.floor(Math.random() * 6)) + 1;
        console.log(turn+" turn");
        console.log("rolledNumber 1 :"+rolledNumber);
        console.log("rolledNumber 2 :"+rolledNumber2);
        if (rolledNumber == 1) {
            document.getElementById("DiceImg1").style.display = "none";
            document.getElementById("DiceImg2").style.display = "none";
            document.getElementById("current-0").innerHTML = 0;
            document.getElementById("player-1").className = "player-1-panel active";
            document.getElementById("player-0").classList.remove("active");
            roundScore = 0;
            turn = 'Player2';
        } else if (rolledNumber == 2) {
            roundScore += rolledNumber;
            (rolledNumber2==1)?document.getElementById("current-0").innerHTML = 0:change(1, 2, 0);

        } else if (rolledNumber == 3) {
            roundScore += rolledNumber;
            (rolledNumber2==1)?document.getElementById("current-0").innerHTML = 0:change(1, 3, 0);
        } else if (rolledNumber == 4) {
            roundScore += rolledNumber;
            (rolledNumber2==1)?document.getElementById("current-0").innerHTML = 0:change(1, 4, 0);
        } else if (rolledNumber == 5) {
            roundScore += rolledNumber;
            (rolledNumber2==1)?document.getElementById("current-0").innerHTML = 0:change(1, 5, 0);
        } else {
            roundScore += rolledNumber;
            (rolledNumber2==1)?document.getElementById("current-0").innerHTML = 0:change(1, 6, 0);
        }
        if (rolledNumber2 == 1) {
            document.getElementById("DiceImg2").style.display = "none";
            document.getElementById("DiceImg1").style.display = "none";
            document.getElementById("current-0").innerHTML = 0;
            document.getElementById("player-1").className = "player-1-panel active";
            document.getElementById("player-0").classList.remove("active");
            roundScore = 0;
            turn = 'Player2';
        } else if (rolledNumber2 == 2) {
            if (rolledNumber == 1) {
                document.getElementById("current-0").innerHTML = 0;
            } else {
                roundScore += rolledNumber2;
                document.getElementById("DiceImg2").src = "dice-2.png";
                document.getElementById("current-0").innerHTML = roundScore;
            }
            
        } else if (rolledNumber2 == 3) {
            if (rolledNumber == 1) {
                document.getElementById("current-0").innerHTML = 0;
            } else {
                roundScore += rolledNumber2;
                document.getElementById("DiceImg2").src = "dice-3.png";
                document.getElementById("current-0").innerHTML = roundScore;
            }
        } else if (rolledNumber2 == 4) {
            if (rolledNumber == 1) {
                document.getElementById("current-0").innerHTML = 0;
            } else {
                roundScore += rolledNumber2;
                document.getElementById("DiceImg2").src = "dice-4.png";
                document.getElementById("current-0").innerHTML = roundScore;
            }
        } else if (rolledNumber2 == 5) {
            if (rolledNumber == 1) {
                document.getElementById("current-0").innerHTML = 0;
            } else {
                roundScore += rolledNumber2;
                document.getElementById("DiceImg2").src = "dice-5.png";
                document.getElementById("current-0").innerHTML = roundScore;
            }
        } else {
            if (rolledNumber == 1) {
                document.getElementById("current-0").innerHTML = 0;
            } else {
                roundScore += rolledNumber2;
                document.getElementById("DiceImg2").src = "dice-6.png";
                document.getElementById("current-0").innerHTML = roundScore;
            }
        }
    } else {

        var rolledNumber = (Math.floor(Math.random() * 6)) + 1;
        var rolledNumber2 = (Math.floor(Math.random() * 6)) + 1;
        console.log(turn+" turn");
        console.log("rolledNumber 1 :"+rolledNumber);
        console.log("rolledNumber 2 :"+rolledNumber2);
        if (rolledNumber == 1) {
            document.getElementById("DiceImg1").style.display = "none";
            document.getElementById("DiceImg2").style.display = "none";
            document.getElementById("current-1").innerHTML = 0;
            document.getElementById("player-0").className = "player-0-panel active";
            document.getElementById("player-1").classList.remove("active");
            roundScore = 0;
            turn = 'Player1';
        } else if (rolledNumber == 2) {
            roundScore += rolledNumber;
            (rolledNumber2==1)?document.getElementById("current-1").innerHTML = 0:change(1, 2, 1);
        } else if (rolledNumber == 3) {
            roundScore += rolledNumber;
            (rolledNumber2==1)?document.getElementById("current-1").innerHTML = 0:change(1, 3, 1);
        } else if (rolledNumber == 4) {
            roundScore += rolledNumber;
            (rolledNumber2==1)?document.getElementById("current-1").innerHTML = 0:change(1, 4, 1);
        } else if (rolledNumber == 5) {
            roundScore += rolledNumber;
            (rolledNumber2==1)?document.getElementById("current-1").innerHTML = 0:change(1, 5, 1);
        } else {
            roundScore += rolledNumber;
            (rolledNumber2==1)?document.getElementById("current-1").innerHTML = 0:change(1, 6, 1);
        }
        if (rolledNumber2 == 1) {
            document.getElementById("DiceImg1").style.display = "none";
            document.getElementById("DiceImg2").style.display = "none";
            document.getElementById("current-1").innerHTML = 0;
            document.getElementById("player-0").className = "player-0-panel active";
            document.getElementById("player-1").classList.remove("active");
            roundScore = 0;
            turn = 'Player1';
        } else if (rolledNumber2 == 2) {
            roundScore += rolledNumber2;
            if(rolledNumber == 1){
                document.getElementById("current-1").innerHTML = 0;
            }else{
                document.getElementById("DiceImg2").src = "dice-2.png";
                document.getElementById("current-1").innerHTML = roundScore;
            }
        } else if (rolledNumber2 == 3) {
            roundScore += rolledNumber2;
            if(rolledNumber == 1){
                document.getElementById("current-1").innerHTML = 0;
            }else{
                document.getElementById("DiceImg2").src = "dice-3.png";
                document.getElementById("current-1").innerHTML = roundScore;
            }
        } else if (rolledNumber2 == 4) {
            roundScore += rolledNumber2;
            if(rolledNumber == 1){
                document.getElementById("current-1").innerHTML = 0;
            }else{
                document.getElementById("DiceImg2").src = "dice-4.png";
                document.getElementById("current-1").innerHTML = roundScore;
            }
        } else if (rolledNumber2 == 4) {
            roundScore += rolledNumber2;
            if(rolledNumber == 1){
                document.getElementById("current-1").innerHTML = 0;
            }else{
                document.getElementById("DiceImg2").src = "dice-5.png";
                document.getElementById("current-1").innerHTML = roundScore;
            }
        } else {
            roundScore += rolledNumber2;
            if(rolledNumber == 1){
                document.getElementById("current-1").innerHTML = 0;
            }else{
                document.getElementById("DiceImg2").src = "dice-6.png";
                document.getElementById("current-1").innerHTML = roundScore;
            }
        }
    }
}


function newGame() {

    turn = 'Player1'
    document.getElementById("player-0").className = "player-0-panel active";
    document.getElementById("player-1").classList.remove("active");
    document.getElementById("player-1").classList.remove("winner");
    document.getElementById("player-0").classList.remove("winner");
    document.getElementById("current-1").innerHTML = 0;
    document.getElementById("current-0").innerHTML = 0;
    document.getElementById("score-1").innerHTML = 0;
    document.getElementById("score-0").innerHTML = 0;
    document.getElementById("btnroll").disabled = false;
    document.getElementById("name-0").innerHTML = "Player 1";
    document.getElementById("name-1").innerHTML = "PLayer 2";
    document.getElementById("DiceImg1").style.display = "none";
    document.getElementById("DiceImg2").style.display = "none";
    globalScore1 = globalScore2 = 0;
    roundScore =0;

}

function hold() {

    if (turn == 'Player1') {
        globalScore1 += roundScore;
        document.getElementById("score-0").innerHTML = globalScore1;
        document.getElementById("current-0").innerHTML = 0;
        turn = 'Player2'
        document.getElementById("player-1").className = "player-1-panel active";
        document.getElementById("player-0").classList.remove("active");
        document.getElementById("DiceImg1").style.display = "none";
        document.getElementById("DiceImg2").style.display = "none";
        if (globalScore1 >= winningScore) {
            newGame();
            document.getElementById("name-0").innerHTML = "winner!";
            document.getElementById("player-0").className = "player-0-panel winner";
            document.getElementById("btnroll").disabled = true;
            document.getElementById("player-1").classList.remove("active");
        }
        roundScore = 0;
    } else {
        globalScore2 += roundScore;
        document.getElementById("score-1").innerHTML = globalScore2;
        document.getElementById("current-1").innerHTML = 0;
        turn = 'Player1'
        document.getElementById("player-0").className = "player-0-panel active";
        document.getElementById("player-1").classList.remove("active");
        document.getElementById("DiceImg1").style.display = "none";
        document.getElementById("DiceImg2").style.display = "none";
        if (globalScore2 >= winningScore) {
            newGame();
            document.getElementById("name-1").innerHTML = "winner!";
            document.getElementById("player-1").className = "player-1-panel winner";
            document.getElementById("btnroll").disabled = true;
            document.getElementById("player-0").classList.remove("active");
        }
        roundScore = 0;
    }

}

function change(diceImg, dice, current) {
    document.getElementById("DiceImg" + diceImg).src = "dice-" + dice + ".png";
    document.getElementById("current-" + current).innerHTML = roundScore;
}


function startSound() {

    if (playSound == true) {
       myMusic.play();
       document.getElementById("soundbtn").innerHTML="<i class='ion-ios-volume-high'></i>sound";        
    } else {
        myMusic.pause();
        myMusic.currentTime=0;
        document.getElementById("soundbtn").innerHTML="<i class='ion-android-volume-mute'></i><strike>sound</strike>";
    }
    playSound = !playSound;
}

function startSoundOnLoad() {
       myMusic.play();        
}

function setWinningScore() {
    winningScore = document.getElementById("winningScore").value;
    console.log(winningScore);
}