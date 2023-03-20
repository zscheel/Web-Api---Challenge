var timeLeft = document.querySelector(".timer");
var startButton = document.getElementById('start');
var quiz = document.getElementById('quiz');
var questionsContainer = document.getElementById('container');


function startGame () {
 quiz.classList.add('hidden')
 questionsContainer.classList.remove('hidden')
 setNextQuestion();
}

function setNextQuestion () {

}

var questions = [
    {
        question: 'What is 2 + 2',
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
  