//Define questions and answers as array

let questions = [
    {
        question:"Hyper Text Markuo Language Stands for?",
        choices:["XHTML","HTML","HML","JQUERY"],
        answer:"HTML",
    },
    {
        question:"Cascading Style Sheets Stands for?",
        choices:["CSS","HTML","HML","JQUERY"],
        answer:"CSS",
    },
    {
        question:"Which is Javascript  Framework / Library?",
        choices:["React","Laravel","Django","Sass"],
        answer:"React",
    },
    {
        question:"Which is backend language",
        choices:["PHP","HTML","HML","ALL"],
        answer:"PHP",
    },
    {
        question:"WHich is best for Artificial Intelligence?",
        choices:["React","HTML","Python","JQUERY"],
        answer:"Python",
    },
];



//Countdown timer Starts

let timeLeft = 60;
let countdownElement = document.getElementById("count-down");
function startCountDown(){
    let timer = setInterval(function(){
        if(timeLeft <= 0){
            clearInterval(timer);
        }
        else{
        countdownElement.innerText = "Time Left: "+ timeLeft + " seconds";
        timeLeft--;
        }
    },1000);
}

//Countdown timer end
let currentQuestionIndex = 0;
let score = 0;
//Displayquestions starts
function displayQuestions(){
    if(currentQuestionIndex < questions.length){
        
        let currentQuestion = questions[currentQuestionIndex];
        document.getElementById("question").innerText = currentQuestion.question;
        for(let i =0; i < currentQuestion.choices.length; i++){
            let button = document.getElementById("btn" + i);
            button.innerText = currentQuestion.choices[i];
            button.onclick = function(){
                checkAnswer(currentQuestion.choices[i]);
            };
        }
        document.getElementById("progress").innerText =
        "Question" + (currentQuestionIndex + 1) + "of" + questions.length;
    }else{
        showScores();
    }
    
}

// score
function showScores(){
    document.getElementById("quiz").innerHTML ="<h2>Quiz completed</h2> <h2>Your score " + score + "</h2><a href='index.html'>Take Quiz Again</a>"
}
//Answer check
function checkAnswer(answer){
    let correctAnswer = questions[currentQuestionIndex].answer;
    if(answer === correctAnswer){
        score++;
    }
    currentQuestionIndex++;
    displayQuestions();
}
displayQuestions()
startCountDown();
