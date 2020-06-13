const button = document.querySelector("#next");
const progress = document.querySelector("#line");
const question = document.querySelector("#question");

let questions = ['You usually walk…', 'When talking to people, you…', 'When relaxing, you sit with…', 'When something really amuses you, you react with…', 'When you go to a party or social gathering, you…', 'You’re working very hard, concentrating hard, and you’re interrupted. You…', 'Which of the following colors do you like the most?', ' When you are in bed at night, in those last few moments before going to sleep, you are…', 'You often dream that you are…'];
let answers = ['Fairly fast, with long steps', 'Less fast, head up, looking the world in the face', 'Less fast, head down', 'Stand with your arms folded', 'Have one or both of your hands on your hips', 'Play with your ear or hair, touch your chin, or smooth your hair', 'Your legs crossed', 'Your legs stretched out or straight', 'One leg curled under you', 'A big, appreciative laugh', 'A laugh, but not a loud one', 'A quiet chuckle', 'Make a loud entrance, so that everyone notices you', 'Make a quiet entrance, looking around for someone you know', 'Make the quietest entrance, trying to stay unnoticed', 'Welcome the break', 'Feel extremely irritated', 'Vary between these two extremes', 'Red/orange', 'Yellow/light blue', 'Brown/gray', 'Stretched out on your back', 'On your side, slightly curled', 'With your head on one arm', 'Falling', 'Searching for something or somebody', 'You usually have dreamless sleep'];
let progressBar=10;
let questionsCounter = 0;
let answersCounter = 0;

const changeQuestion = () => {
  if (questionsCounter < questions.length) {
    question.innerHTML=questions[questionsCounter];
    console.log(questionsCounter);
    questionsCounter++;
  } else {

  }
}

const changeProgress = () => {
  progressBar += 10;
  progress.value =+ progressBar;
  console.log(progressBar);
}

const changeAnswers = () => {
  if (answersCounter < answers.length) {
    document.querySelector("#first-answer").innerHTML = answers[answersCounter];
    answersCounter++;
    document.querySelector("#second-answer").innerHTML = answers[answersCounter];
    answersCounter++;
    document.querySelector("#third-answer").innerHTML = answers[answersCounter];
    answersCounter++;
  } else {
    document.querySelector('.game-title').style.display ="none";
    document.querySelector('.game-section').style.display ="none";
    document.querySelector('body').style.backgroundColor="black";
    document.querySelector('.end-screen').style.display="block";
  }
}

const resetPlaceholder = () => {
  let selectCheckbox = document.querySelectorAll(".checkbox");
  for(let i =0; i < selectCheckbox.length; i++) {
    selectCheckbox[i].checked=false;
  }
}

button.addEventListener("click", function() {
  changeQuestion();
  changeProgress();
  changeAnswers();
  resetPlaceholder();
})
