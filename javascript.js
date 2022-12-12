var playing= false;
var score;
var action;
var timeremaining;
var correctAnswer;

// if user click on start/rest
document.getElementById("startreset").onclick = function(){
    //if user is playing
    if(playing==true){
        //reload page
        location.reload();
    }else{//if user is not playing
        playing = true;
        score = 0;//set score to 0
        document.getElementById("scorevalue").innerHTML = score;
        //show countdown box
        show("time");
         timeremaining = 60; 
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        //Game over box
        hide("gameover");
        //chande start to reset button
        document.getElementById("startreset").innerHTML = "Reset Game";
        
        //startcountdown
        
        startCountdown();
        
        //start giving new que and ansewers
        generateQA();
    }
}

for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    if(playing==true){
        if(this.innerHTML == correctAnswer){
            score += 1;
            document.getElementById("scorevalue").innerHTML=score;
            
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            
            generateQA();
        }
            else{
                score -= 1;
                document.getElementById("scorevalue").innerHTML=score;
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                },1000);
        }
    }
}
}


////////////////////////functions///////////////////////
//start counter
function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining == 0){
            stopCountdown();
            
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>game over</p><p> your score is "+score+"</p>";
            
            hide("time");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    },1000);
}

//stop counter
function stopCountdown(){
    clearInterval(action);
}

//hide elemnets
function hide(Id){
    document.getElementById(Id).style.display = "none";
}

//show elements
function show(Id){
    document.getElementById(Id).style.display = "block";
}

//generate questions and options
function generateQA(){
    var x = 1 + Math.round(Math.random()*9);
    var y = 1 + Math.round(Math.random()*9);
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1 + Math.round(Math.random()*3);
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
    
    var answers = [correctAnswer];
    
    for(i=1; i<5; i++){
        if(i != correctPosition){
            var wronganswer;
            do{
                wronganswer = (1 + Math.round(Math.random()*9)) * (1 + Math.round(Math.random()*9));
            } while(answers.indexOf(wronganswer)>-1)
            document.getElementById("box"+i).innerHTML = wronganswer;
            answers.push(wronganswer);
        }
    }
}