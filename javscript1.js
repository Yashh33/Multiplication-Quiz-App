var playing = false;
var timeremaining;
var setinterval;
var correctans;
var correctpos;
var minustensec;
var flag = false;

//User chooses tables upto 10
////user clicks on start/reset button////
document.getElementById("startreset").onclick = function () {
    //is the user playing
    if (playing == true) {
        //yes he is playing and clicks on start/reset button
        //reload the page
        location.reload();
    }
    else {
        playing = true;
        //no he is not playing and clicks on start/reset button
        //set score to 0 before every new game
        score = 0; document.getElementById("scorevalue").innerHTML = score;
        //change start button to reset button
        document.getElementById("startreset").innerHTML = "Reset Game";
        //show timer (fun)
        showTimer();
        hide("gameover");

        //generate QA (fun)
        generateQuestionsTen();
    }
}
////User clicks on one of the options ////

for (i = 1; i < 5; i++) {
    document.getElementById("box" + i).onclick = function (j) {

        if (playing == true) {
            if (this.innerHTML == correctans) {

                hide("wrong");
                show("correct");
                setTimeout(function () {
                    hide("correct");
                }, 1000);

                score += 1;
                document.getElementById("scorevalue").innerHTML = score;

                generateQuestionsTen();

                addSec();
            }
            else {
                score -= 1;
                document.getElementById("scorevalue").innerHTML = score;

                hide("correct");
                show("wrong");
                setTimeout(function () {
                    hide("wrong");
                }, 1000);

                minusSec();


            }
        }
    }
}

//is the user playing
//yes
//the option is correct

//increase the score by 1
//show next question
//show the correct box for 1 sec
//the option is not correct
//decrease the score by 1
//show the try again box for 1 sec
//no
//No action

//////////////////functions//////////////////////

function showTimer() {
    //show countdown timer
    show("time");
    timeremaining = 60;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;

    startimer();

}

function startimer() {
    setinterval = setInterval(decreaseSec, 1000);

}
function decreaseSec() {
    timeremaining -= 1;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;

    if (timeremaining == 0) {
        clearInterval(setinterval);
        show("gameover");
        document.getElementById("gameover").innerHTML = "<p>Game Over</p><p>Your Score is " + score + "</p>"

        playing = false; document.getElementById("startreset").innerHTML = "Start Game";

        hide("time");
    }
}
//function minusTimer(){
////    setinterval1=setInterval(minusSec,1000);
//}
function addSec() {
    timeremaining += 3;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
}

function minusSec() {
    timeremaining -= 5;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;

    if (timeremaining < 0) {
        //        clearInterval(setinterval1);
        show("gameover");
        document.getElementById("gameover").innerHTML = "<p>Game Over</p><p>Your Score is " + score + "</p>"

        playing = false; document.getElementById("startreset").innerHTML = "Start Game";

        hide("time");

        flag = true;
    }
}

function minusTenSec() {
    timeremaining -= 10;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;

    if (timeremaining < 0) {
        //        clearInterval(setinterval1);
        show("gameover");
        document.getElementById("gameover").innerHTML = "<p>Game Over</p><p>Your Score is " + score + "</p>"

        playing = false; document.getElementById("startreset").innerHTML = "Start Game";

        hide("time");

        var counter = 2;
    }
}

//this is a function for genrating one question at a time
function generateQuestionsTen() {
    //Math.floor(Math.random() * (max - min + 1)) + min
    // var x =1 + Math.round(Math.random()*9);
    var x = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    var y = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    correctans = (x * y);
    document.getElementById("question").innerHTML = x + "x" + y;
    correctpos = 1 + Math.round(Math.random() * 3);
    document.getElementById("box" + correctpos).innerHTML = correctans;
    for (i = 1; i < 5; i++) {
        if (i != correctpos) {

            //wrongans should not be equal to correctans
            //wrongans should not be equal to wrong answers too
            //so we generate and put only those answers that are unique, so we only generate only unique wrongans
            //to check two values at a same time, we put both of them in array.With these we can check both of them at same time
            var answers = [correctans];
            do {
                var wrongans;
                wrongans = (1 + Math.round(Math.random() * 9)) * (1 + Math.round(Math.random() * 9));
            } while (answers.indexOf(wrongans) > -1)
            document.getElementById("box" + i).innerHTML = wrongans;
            answers.push(wrongans);
        }
    }
}

function show(Id) {
    document.getElementById(Id).style.display = "block";
}

function hide(Id) {
    document.getElementById(Id).style.display = "none";
}



///////////////////////////////////////////////////
//////////User chose tables upto 20/////////////////


////user clicks on start/reset button////
document.getElementById("startreset1").onclick = function () {
    //is the user playing
    if (playing == true) {
        //yes he is playing and clicks on start/reset button
        //reload the page
        location.reload();
    }
    else {
        playing = true;
        //no he is not playing and clicks on start/reset button
        //set score to 0 before every new game
        score = 0; document.getElementById("scorevalue").innerHTML = score;
        //change start button to reset button
        document.getElementById("startreset1").innerHTML = "Reset Game";
        //show timer (fun)
        showTimer();
        hide("gameover");

        //generate QA (fun)
        generateQuestionsTwenty();
    }

    ////User clicks on one of the options ////

    for (i = 1; i < 5; i++) {
        document.getElementById("box" + i).onclick = function (j) {

            if (playing == true) {
                if (this.innerHTML == correctans) {

                    hide("wrong");
                    show("correct");
                    setTimeout(function () {
                        hide("correct");
                    }, 1000);

                    score += 1;
                    document.getElementById("scorevalue").innerHTML = score;
                    // document.getElementById("test").style.display="block";

                    generateQuestionsTwenty();

                    addSec();
                }
                else {
                    score -= 1;
                    document.getElementById("scorevalue").innerHTML = score;

                    hide("correct");
                    show("wrong");
                    setTimeout(function () {
                        hide("wrong");
                    }, 1000);

                    minusSec();


                }
            }
        }
    }
}

//is the user playing
//yes
//the option is correct

//increase the score by 1
//show next question
//show the correct box for 1 sec
//the option is not correct
//decrease the score by 1
//show the try again box for 1 sec
//no
//No action

//////////////////functions//////////////////////

function showTimer() {
    //show countdown timer
    show("time");
    timeremaining = 60;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;

    startimer();

}

function startimer() {
    setinterval = setInterval(decreaseSec, 1000);

}
function decreaseSec() {
    timeremaining -= 1;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;

    if (timeremaining == 0) {
        clearInterval(setinterval);
        show("gameover");
        document.getElementById("gameover").innerHTML = "<p>Game Over</p><p>Your Score is " + score + "</p>"

        playing = false; document.getElementById("startreset1").innerHTML = "Start Game";

        hide("time");
    }
}
//function minusTimer(){
////    setinterval1=setInterval(minusSec,1000);
//}
function addSec() {
    timeremaining += 3;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
}

function minusSec() {
    timeremaining -= 5;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;

    if (timeremaining < 0) {
        //        clearInterval(setinterval1);
        show("gameover");
        document.getElementById("gameover").innerHTML = "<p>Game Over</p><p>Your Score is " + score + "</p>"

        playing = false; document.getElementById("startreset1").innerHTML = "Start Game";

        hide("time");

        flag = true;
    }
}

function minusTenSec() {
    timeremaining -= 10;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;

    if (timeremaining < 0) {
        //        clearInterval(setinterval1);
        show("gameover");
        document.getElementById("gameover").innerHTML = "<p>Game Over</p><p>Your Score is " + score + "</p>"

        playing = false; document.getElementById("startreset1").innerHTML = "Start Game";

        hide("time");

        var counter = 2;
    }
}

//this is a function for genrating one question at a time
function generateQuestionsTwenty() {

    //Math.floor(Math.random() * (max - min + 1)) + min
    // var x =1 + Math.round(Math.random()*(19));
    var x = Math.floor(Math.random() * (20 - 11 + 1)) + 11;
    var y = 1 + Math.round(Math.random() * 9);
    correctans = (x * y);
    document.getElementById("question").innerHTML = x + "x" + y;
    correctpos = 1 + Math.round(Math.random() * 3);
    document.getElementById("box" + correctpos).innerHTML = correctans;
    for (i = 1; i < 5; i++) {
        if (i != correctpos) {

            //wrongans should not be equal to correctans
            //wrongans should not be equal to wrong answers too
            //so we generate and put only those answers that are unique, so we only generate only unique wrongans
            //to check two values at a same time, we put both of them in array.With these we can check both of them at same time
            var answers = [correctans];
            do {
                var wrongans;
                wrongans = (1 + Math.round(Math.random() * 19)) * (1 + Math.round(Math.random() * 9));
            } while (answers.indexOf(wrongans) > -1)
            document.getElementById("box" + i).innerHTML = wrongans;
            answers.push(wrongans);
        }
    }
}

function show(Id) {
    document.getElementById(Id).style.display = "block";
}

function hide(Id) {
    document.getElementById(Id).style.display = "none";
}



