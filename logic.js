// Adding quiz content to object
var quizObject = {
    questions: ['Commonly used data types DO NOT include', 'The condition in an if / else statement is enclosed with ____.', 'String values must be enclosed with ____ when being assigned to variables.', 'Arrays in JavaScript can be used to store ____.'],
    q1answers: ['Alerts', 'Booleans', 'Strings', 'Numbers'],
    q2answers: ['Quotes', 'Parenthesis', 'Square Brackets', 'Curly Brackets'],
    q3answers: ['Commas', 'Curly Brackets', 'Quotes', 'Parenthesis'],
    q4answers: ['Numbers', 'Other Arrays', 'Booleans', 'All of the above']
};

// Defining Buttons that will be programes
var highScoresButton = document.getElementById('highScoresButton');
var startButton = document.getElementById('startButton');
var answer1Button = document.getElementById('answer1Button');
var answer2Button = document.getElementById('answer2Button');
var answer3Button = document.getElementById('answer3Button');
var answer4Button = document.getElementById('answer4Button');
var submitScoreButton = document.getElementById('submitScoreButton');
var refreshButton = document.getElementById('refreshButton');
// Defining text that will be changed
var quizQuestion = document.getElementById('quizQuestion');
var comment = document.getElementById('comment');
var timer = document.getElementById('timer');
var timeLeft = 70;
var finalScore = '';
var playerName = document.getElementById("playerName");
// Defining CSS that will be changed
var mainContainer = document.querySelector('.mainContainer');
var startScreenContainer = document.querySelector('.startScreenContainer');
var finalScoreContainer = document.querySelector('.finalScoreContainer');
var highScoresContainer = document.querySelector('.highScoresContainer');
// creates local storage for highscores
var highScoresData = {};

// Add event listener to start quiz
startButton.addEventListener('click', startQuiz);

// When start button is clicked intro hides and quiz begins
function startQuiz() {
    // Displays the quiz content (mainContainer)
    mainContainer.style.display = 'flex';
    highScoresContainer.style.display = 'none';
    // Hides the intro (startScreenContainer)
    startScreenContainer.style.display = 'none';
    answer2Button.style.display = 'inline';
    answer3Button.style.display = 'inline';
    answer4Button.style.display = 'inline';
    // Starts timer
    timeLeft = 70;
    setTimer();
    // Changes questions and answers buttons to first questions
    quizQuestion.innerHTML = quizObject.questions[0];
    answer1Button.innerHTML = quizObject.q1answers[0];
    answer2Button.innerHTML = quizObject.q1answers[1];
    answer3Button.innerHTML = quizObject.q1answers[2];
    answer4Button.innerHTML = quizObject.q1answers[3];
    // Add listener for answer buttons
    answer1Button.addEventListener('click', qright);
    answer2Button.addEventListener('click', qwrong);
    answer3Button.addEventListener('click', qwrong);
    answer4Button.addEventListener('click', qwrong);

}

// Function to change questions and answers
function questionTwo() {
    // Changes to question two
    quizQuestion.innerHTML = quizObject.questions[1];
    answer1Button.innerHTML = quizObject.q2answers[0];
    answer2Button.innerHTML = quizObject.q2answers[1];
    answer3Button.innerHTML = quizObject.q2answers[2];
    answer4Button.innerHTML = quizObject.q2answers[3];
    // Remove previous event listener
    answer1Button.removeEventListener('click', qright);
    answer2Button.removeEventListener('click', qwrong);
    answer3Button.removeEventListener('click', qwrong);
    answer4Button.removeEventListener('click', qwrong);
    // Add listener for new answer buttons
    answer1Button.addEventListener('click', qwrong);
    answer2Button.addEventListener('click', qright);
    answer3Button.addEventListener('click', qwrong);
    answer4Button.addEventListener('click', qwrong);
}

// Function to change questions and answers
function questionThree() {
    // Changes to question three
    quizQuestion.innerHTML = quizObject.questions[2];
    answer1Button.innerHTML = quizObject.q3answers[0];
    answer2Button.innerHTML = quizObject.q3answers[1];
    answer3Button.innerHTML = quizObject.q3answers[2];
    answer4Button.innerHTML = quizObject.q3answers[3];
    // Remove previous event listener
    answer1Button.removeEventListener('click', qwrong);
    answer2Button.removeEventListener('click', qright);
    answer3Button.removeEventListener('click', qwrong);
    answer4Button.removeEventListener('click', qwrong);
    // Add listener for new answer buttons
    answer1Button.addEventListener('click', qwrong);
    answer2Button.addEventListener('click', qwrong);
    answer3Button.addEventListener('click', qright);
    answer4Button.addEventListener('click', qwrong);
}

// Function to change questions and answers
function questionFour() {
    // Changes to question four
    quizQuestion.innerHTML = quizObject.questions[3];
    answer1Button.innerHTML = quizObject.q4answers[0];
    answer2Button.innerHTML = quizObject.q4answers[1];
    answer3Button.innerHTML = quizObject.q4answers[2];
    answer4Button.innerHTML = quizObject.q4answers[3];
    // Remove previous event listener
    answer1Button.removeEventListener('click', qwrong);
    answer2Button.removeEventListener('click', qwrong);
    answer3Button.removeEventListener('click', qright);
    answer4Button.removeEventListener('click', qwrong);
    // Add listener for new answer buttons
    answer1Button.addEventListener('click', qwrong);
    answer2Button.addEventListener('click', qwrong);
    answer3Button.addEventListener('click', qwrong);
    answer4Button.addEventListener('click', qright);
}

// Function to set the timer
function setTimer() {
    var countdown = setInterval(function() {
        if (finalScore != '') {
            clearInterval(countdown);
            timer.innerHTML = finalScore;
        }
        else if (timeLeft == 1) {
            timer.innerHTML = timeLeft;
            document.querySelector('#seconds').innerHTML = 'second';
            timeLeft--;
        } else if(timeLeft > -1) {
            timer.innerHTML = timeLeft;
            document.querySelector('#seconds').innerHTML = 'seconds';
            timeLeft--;
        } else {
            clearInterval(countdown)
            //displays failed message
            quizQuestion.innerHTML = "You ran out of time... You failed."
            // hides buttons
            answer1Button.style.display = 'none'
            answer2Button.style.display = 'none';
            answer3Button.style.display = 'none';
            answer4Button.style.display = 'none';
            comment.style.visibility = 'hidden';
        }
    }, 1000);
}

// Function for right answer
function qright () {
    // display correct comment
    comment.innerHTML = 'Correct!';
    comment.style.color = 'green';
    comment.style.visibility = 'visible';
    // Moves to next question
    if (quizQuestion.innerHTML == quizObject.questions[0]) {
        questionTwo();
    } else if (quizQuestion.innerHTML == quizObject.questions[1]) {
        questionThree();
    } else if (quizQuestion.innerHTML == quizObject.questions[2]) {
        questionFour();
    } else if (quizQuestion.innerHTML == quizObject.questions[3]) {
        // final score
        finalScore = timeLeft;
        // Show finished screen?
        finalScoreContainer.style.display = 'flex'
        mainContainer.style.display = 'none';
        document.querySelector('#finalScoreSpan').innerHTML = finalScore;
    }
}
// Function for wrong answer
function qwrong () {
    // display correct comment
    timeLeft = timeLeft - 10;
    comment.innerHTML = 'Wrong!';
    comment.style.color = 'red';
    comment.style.visibility = 'visible'
    // Moves to next question
    if (quizQuestion.innerHTML == quizObject.questions[0]) {
        questionTwo();
    } else if (quizQuestion.innerHTML == quizObject.questions[1]) {
        questionThree();
    } else if (quizQuestion.innerHTML == quizObject.questions[2]) {
        questionFour();
    } else if (quizQuestion.innerHTML == quizObject.questions[3]) {
        // final score
        finalScore = timeLeft;
        // Show finished screen
        document.querySelector('#finalScoreSpan').innerHTML = finalScore;
        finalScoreContainer.style.display = 'flex'
        mainContainer.style.display = 'none';
    }
}

//Refresh button event listener
refreshButton.addEventListener('click', refresh);
//Refresh button function
function refresh() {
    location.reload();
}

// Program highScores button 
highScoresButton.addEventListener('click', function(event) {
    event.preventDefault();
    showHighScores();
});

function showHighScores() {
    renderHighScores();
    mainContainer.style.display = 'none';
    startScreenContainer.style.display = 'none';
    finalScoreContainer.style.display = 'none';
    highScoresContainer.style.display = 'flex';
}


// function to save highscores to local storage
submitScoreButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Records player name
    if(playerName.value == "") {
        alert('You must enter a name to go with your score :)')
        return;
    } else {
        localStorage.setItem("playerName", playerName.value);
        localStorage.setItem("score", finalScore);
    }

    // shows high score screen and hides other containers
    mainContainer.style.display = 'none';
    startScreenContainer.style.display = 'none';
    finalScoreContainer.style.display = 'none';
    highScoresContainer.style.display = 'flex';
    // Render scores to highscores
    renderHighScores();
});

function renderHighScores() {
    var playerNameUl = document.getElementById('playerNameUl');
    var playerScoreUl = document.getElementById('playerScoreUl');

    var userNameLocalStorage = localStorage.getItem('playerName');
    var playerScoreLocalStorage = localStorage.getItem('score');

    if (userNameLocalStorage && playerScoreLocalStorage) {
        var paraName = document.createElement("p");
        var playerNamePEl = document.createTextNode(userNameLocalStorage);
        paraName.appendChild(playerNamePEl);
        playerNameUl.appendChild(paraName);
    
        var paraScore = document.createElement("p");
        var playerScorepEl = document.createTextNode(playerScoreLocalStorage);
        paraScore.appendChild(playerScorepEl);
        playerScoreUl.appendChild(paraScore);
    }
}


// function renderUserScore(){
//     var userInitials = localStorage.getItem("initials");
//     userInitialsSpan.textContent = userInitials;
//     var userScore = localStorage.getItem("recentScore");
//     userInitialsSpan.textContent = userInitials + " scored " + userScore + " points";
// }
