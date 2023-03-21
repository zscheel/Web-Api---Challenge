var timeLeft = document.querySelector(".timer");
var startButton = document.getElementById('start');
var quiz = document.getElementById('quiz');
var questionsContainer = document.getElementById('container');
var questionElem = document.getElementById('question');
var answerButtons = document.getElementById('answer-buttons');
var form = document.getElementById('form')
var values = document.getElementById('true-false');
var submitbutton = document.getElementById('submitbtn');
var shuffledQuestions, currentQuestionInd

function startGame () {
 quiz.classList.add('hidden')
 questionsContainer.classList.remove('hidden')
 shuffledQuestions = questions.sort(()=> Math.random() - .5)
 currentQuestionInd = 0
 setNextQuestion();

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

}

function setNextQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionInd])
}

function progress () {
    currentQuestionInd++
    setNextQuestion()
}

function showForm() {}

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
    if (correct) {
        
    }


    if(shuffledQuestions.length > currentQuestionInd + 1) {

    } else {
        questionsContainer.classList.add('hidden');
        form.classList.remove('hidden');
    }
    progress();
}




var questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
           { text: 'alerts', correct: true },
           { text: 'strings', correct: false },     
           { text: 'booleans', correct: false },  
           { text: 'numbers', correct: false }  
        ]
    },
    {
        question: 'Arrays in javascript can be used to store:?',
        answers: [
           { text: 'other arrays', correct: false },
           { text: 'booleans', correct: false },     
           { text: 'strings', correct: true},  
           { text: 'all of the above', correct: false }  
        ]
    },
    {
        question: 'String values must be enclosed within ___ When being assigned to variables.',
        answers: [
           { text: 'semicolons', correct: false },
           { text: 'brackets', correct: false },     
           { text: 'curly brackets', correct: false },  
           { text: 'parentheses', correct: true }  
        ]
    },
    {
        question: 'What do we use to tell other coders what our code does?',
        answers: [
           { text: 'numbers', correct: false },
           { text: 'letters', correct: false },     
           { text: 'booleans', correct: false },  
           { text: 'comments', correct: true }  
        ]
    }
]




startButton.addEventListener('click', function () {
    startGame();
    
  });
  
  submitbutton.addEventListener('click', function(event){
    event.preventDefault();
    startGame();
    form.classList.add('hidden');

  })