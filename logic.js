// Adding quiz content to object
var quizObject = {
    questions: ['Question 1 is a question', 'Question 2 is a question', 'Question 3 is a question', 'Question 4 is a question'],
    q1answers: ['Answer for Q1', 'Another answer for Q1', 'Different A for Q1', 'Final answer for Q1'],
    q2answers: ['Answer for Q2', 'Another answer for Q2', 'Different A for Q2', 'Final answer for Q2'],
    q3answers: ['Answer for Q3', 'Another answer for Q3', 'Different A for Q3', 'Final answer for Q3'],
    q4answers: ['Answer for Q4', 'Another answer for Q4', 'Different A for Q4', 'Final answer for Q4']
};

// Defining Buttons that will be programes
var highScoresButton = document.getElementById('highScoresButton');
var startButton = document.getElementById('startButton');
var answer1Button = document.getElementById('answer1Button');
var answer2Button = document.getElementById('answer2Button');
var answer3Button = document.getElementById('answer3Button');
var answer4Button = document.getElementById('answer4Button');
// Defining text that will be changed
var quizQuestion = document.getElementById('quizQuestion');
var comment = document.getElementById('comment');
var timer = document.getElementById('timer');
var timeLeft = 70;
// Defining CSS that will be changed
var mainContainer = document.querySelector('.mainContainer');
var startScreenContainer = document.querySelector('.startScreenContainer');
// creates local storage for highscores
var highScoresData = {};

// Add event listener to start quiz
startButton.addEventListener('click', startQuiz);

// When start button is clicked intro hides and quiz begins
function startQuiz() {
    // Displays the quiz content (mainContainer)
    mainContainer.style.display = 'flex';
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
    answer1Button.addEventListener('click', q1right);
    answer2Button.addEventListener('click', q1wrong);
    answer3Button.addEventListener('click', q1wrong);
    answer4Button.addEventListener('click', q1wrong);
}

// Function to change questions and answers
function questionTwo() {
    // Changes to question two
    quizQuestion.innerHTML = quizObject.questions[1];
    answer1Button.innerHTML = quizObject.q2answers[0];
    answer2Button.innerHTML = quizObject.q2answers[1];
    answer3Button.innerHTML = quizObject.q2answers[2];
    answer4Button.innerHTML = quizObject.q2answers[3];
}

// Function to change questions and answers
function questionThree() {
    // Changes to question three
    quizQuestion.innerHTML = quizObject.questions[1];
    answer1Button.innerHTML = quizObject.q3answers[0];
    answer2Button.innerHTML = quizObject.q3answers[1];
    answer3Button.innerHTML = quizObject.q3answers[2];
    answer4Button.innerHTML = quizObject.q3answers[3];
}

// Function to change questions and answers
function questionFour() {
    // Changes to question four
    quizQuestion.innerHTML = quizObject.questions[1];
    answer1Button.innerHTML = quizObject.q4answers[0];
    answer2Button.innerHTML = quizObject.q4answers[1];
    answer3Button.innerHTML = quizObject.q4answers[2];
    answer4Button.innerHTML = quizObject.q4answers[3];
}

// Function to set the timer
function setTimer() {
    var countdown = setInterval(function() {
        if (timeLeft == 1) {
            timer.innerHTML = timeLeft;
            document.querySelector('#seconds').innerHTML = 'second';
            timeLeft--;
        } else if(timeLeft > -1) {
            timer.innerHTML = timeLeft;
            document.querySelector('#seconds').innerHTML = 'seconds';
            timeLeft--;
        } else {
            clearInterval()
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

// Hide comment function 
function hideComment() {
    comment.style.visibility = hidden;
}

// Function for right answer
function q1right () {
    // display correct comment
    comment.innerHTML = 'Correct!';
    comment.style.color = 'green';
    comment.style.visibility = 'visible'

    // moves to question two
    questionTwo();
}
// Function for wrong answer
function q1wrong () {
    // display correct comment
    comment.innerHTML = 'Wrong!';
    comment.style.color = 'red';
    comment.style.visibility = 'visible'
    timeLeft = timeLeft - 5;
    // moves to question two
    questionTwo();
}
//

// Function to display comment about question

// Function to display failed message