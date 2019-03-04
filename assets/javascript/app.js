var nflTrivia=[
{   question:"Which of the following teams is not in the AFC West?",
    answerA:"Los Angeles Chargers",
    answerB:"Arizona Cardinals",
    answerC:"Denver Broncos",
    answerD:"Oakland Raiders",
    rightAnswer:"Arizona Cardinals",
},

{   question:"Who is the head coach of the Seattle Seahawks?",
    answerA:"Tony Lynn",
    answerB:"Tom Landry",
    answerC:"Bill Belichick",
    answerD:"Pete Carroll",
    rightAnswer:"Pete Carroll",
},

{   question:"What city are the Packers from?",
    answerA:"Green Bay",
    answerB:"New York",
    answerC:"Tennesse",
    answerD:"Houston",
    rightAnswer:"Green Bay",
},

{   question:"How many teams are in the NFL?",
    answerA:"32",
    answerB:"25",
    answerC:"28",
    answerD:"40",
    rightAnswer:"32",
},

{   question:"Who is the quarterback of the New York Jets?",
    answerA:"Tom Brady",
    answerB:"Sam Darnold",
    answerC:"Patrick Maholmes",
    answerD:"Dak Prescott",
    rightAnswer:"Sam Darnold",
},

];

var triviaNum= 0;
var question= "";
var answerA= "";
var answerB= "";
var answerC= "";
var answerD= "";
var counter= null;
var rightAnswers= 0;
var wrongAnswers= 0;
var timeOut= 0;
var countDown= 20;

function trivia(array){
    question= $("<div>");
    question.attr('class',"question");
    question.html(array.question);

    answerA= $("<div>");
    answerA.attr('class',"answer");
    answerA.html(array.answerA);

    answerB= $("<div>");
    answerB.attr('class',"answer");
    answerB.html(array.answerB);

    answerC= $("<div>");
    answerC.attr('class',"answer");
    answerC.html(array.answerC);

    answerD= $("<div>");
    answerD.attr('class',"answer");
    answerD.html(array.answerD);

    var setup= $("#question");
        displayTrivia (setup);

        $("#timer").text("Timer" + countDown + "Sec.");
        counter= setInterval("clock()", 1000);
        $(".answer").click(checker);
};

function clock(){
    countDown--;
    $("#timer").remove();
    $(".time").append("<div id='timer'>Time Left : " + countDown + " seconds.</div>");

    if (countDown===0){
        clearInterval(counter);
    };
};

function checker(e){
    let clicked = e.currentTarget;

    if (clicked.innerText === nflTrivia[triviaNum].rightAnswer){
        questionTimeReset();
        $("#message").append("You Are Right!!");
        clearInterval(counter);
        setTimeout("nextQuestion()",2000);
        countDown=20;
        rightAnswers++;
    }
    else {
        questionTimeReset();
        $("#message").append("You Suck!! The Right Answer is: " +  nflTrivia[triviaNum].rightAnswer);
        clearInterval(counter);
        setTimeout("nextQuestion()", 2000);
        countDown= 20;
        wrongAnswers++;
    };
};

function nextQuestion(){
    $("#message").remove();
    $(".prompt").append("<div id='message'></div>");

    if (triviaNum===(nflTrivia.length-1)){
        endGame();
    }

    else{
        triviaNum++;
        
        var array= nflTrivia[triviaNum];
        trivia(array);
    };
};

function displayTrivia(display){
    display.append(question);
    display.append(answerA);
    display.append(answerB);
    display.append(answerC);
    display.append(answerD);
};

function begin(){
    // console.log("lets go");
    let array= nflTrivia[triviaNum];
    trivia(array);
    $("#begin").remove();
};

function endGame(){
    $("#message").append("<div class= 'score'>Number of Right Answers: " + rightAnswers + "</div>");
    $("#message").append("<div class= 'score'>Number of Wrong Answers: " + wrongAnswers + "</div>");
    $(".reset").append("<button id='restart' onclick='restart();'>RESTART!</button>");
};

function questionTimeReset(){
    $("#timer").remove();
    $(".prompt").append("<div id='timer'></div>");
    $("#question").remove();
    $(".container").append("<div id='question'></div>");
};

function restart(){
    $("#message").remove();
    $(".prompt").append("<div id='message'></div>");
    $("#restart").remove();
    triviaNum = 0;
    rightAnswers = 0;
    wrongAnswers = 0;
    let array = nflTrivia[triviaNum];
    trivia (array);
}
