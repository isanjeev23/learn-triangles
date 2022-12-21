// answer key 
const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°",
  ];

let quizform = document.querySelector(".quiz-form");
let submitBtn = document.querySelector("#submit-answers-btn");
let outputDiv = document.querySelector("#output");



function claculateScore(){
    const formResults = new FormData(quizform);

    console.log(formResults) ;
    let score = 0;
    let index = 0;

    for (let value of formResults.values()) {
      if (value === correctAnswers[index]) {
        score = score + 1;
      }
      index = index + 1;
    }
    outputDiv.innerHTML = `<h2>The score is ${score} </h2>`;
}
submitBtn.addEventListener("click" , claculateScore) ;

  