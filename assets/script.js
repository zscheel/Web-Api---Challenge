var timeLeft = document.querySelector(".timer");
var startButton = document.getElementById('start');
var quiz = document.getElementById('quiz');
var questionsContainer = document.getElementById('container');
var questionElem = document.getElementById('question');
var answerButtons = document.getElementById('answer-buttons');
var shuffledQuestions, currentQuestionInd

function startGame () {
 quiz.classList.add('hidden')
 questionsContainer.classList.remove('hidden')
 shuffledQuestions = questions.sort(()=> Math.random() - .5)
 currentQuestionInd = 0
 setNextQuestion();
}

function setNextQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionInd])
}

function showQuestion (question){
questionElem.innerText = question.question;
question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtons.appendChild(button);
})
}

function resetState() {
    quiz.classList.add('hidden')
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function  selectAnswer (e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtons.children)
}




var questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
           { text: '4', correct: true },
           { text: '22', correct: false },                 
        ]
    }
]




startButton.addEventListener('click', function () {
    startGame();
    timerCount = 75;
    console.log(timerCount);
    // timer
    interval = setInterval(function () {
      if (timerCount > 0) {
        timerCount--;
      } else {
        clearInterval(interval);
      }
      timeLeft.textContent = timerCount;
    }, 1000);

    renderQuestions()
  });
  