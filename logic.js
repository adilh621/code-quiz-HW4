// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var titleScreen = document.querySelector("#title-section");
var questionScreen = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");
var questionTitle = document.querySelector("#question-title");


// sound effects
var sfxRight = new Audio("assets/correct.wav");
var sfxWrong = new Audio("assets/incorrect.wav");

function startQuiz() {
  // hide start screen

  titleScreen.setAttribute("class" , "hide");
  
  // un-hide questions section

  questionScreen.setAttribute("class" , "show")

  // start timer

  timerId = setInterval(clockTick , 1000);

  // show starting time

  timerEl.html = time ;

  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];
  // update title with current question
  questionTitle.textContent = currentQuestion.title;

  // clear out any old question choices
  choicesEl.textContent = " ";
  // loop over choices
  currentQuestion.choices.forEach(function(choice, i){
  // create new button for each choice
  // attach click event listener to each choice
  // display on the page
  var choiceNode = document.createElement("button");
      choiceNode.setAttribute("class", "choice");
      choiceNode.setAttribute("value", choice);
  
      choiceNode.textContent = i + 1 + ". " + choice;
  
      // attach click event listener to each choice
      choiceNode.onclick = questionClick;
  
      // display on the page
      choicesEl.appendChild(choiceNode);

  })
 
  
}

function questionClick() {
  // check if user guessed wrong
  // penalize time
  // display new time on page
  // play "wrong" sound effect
  // else
  // play "right" sound effect
  // flash right/wrong feedback on page for half a second
  // move to next question
  // check if we've run out of questions
  // quizEnd
  // else
  // getQuestion
}

function quizEnd() {
  // stop timer
  clearInterval(timerId);
  // show end screen;
  // show final score
  endScreen.setAttribute("class" , "show");
  // hide questions section
  questionScreen.setAttribute("class" , "hide");
}

function clockTick() {
  // update time
  time-- ;
  timerEl.textContent = time ;
  // check if user ran out of time
  if ( time < 0 ){
    quizEnd();
  }
}

function saveHighscore() {
  // get value of input box
  // make sure value wasn't empty
  // get saved scores from localstorage, or if not any, set to empty array
  // format new score object for current user
  // save to localstorage
  // redirect to next page
}

function checkForEnter(event) {
  // check if event key is enter
  // saveHighscore
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
