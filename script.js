const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "&lt;js&gt;", correct: false },
            { text: "&lt;scripting&gt;", correct: false },
            { text: "&lt;script&gt;", correct: true },
            { text: "&lt;javascript&gt;", correct: false },

        ]

    },
    {

        question: 'What is the correct syntax for referring to an external script called "project.js"',
        answers: [
            { text: '&lt;script src="project.js"&gt;', correct: true },
            { text: '&lt;script href="project.js"&gt;', correct: false },
            { text: '&lt;script name="project.js"&gt;', correct: false },
            { text: '&lt;script=project.js&gt;', correct: false },

        ]

    },
    {

        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            { text: 'msgBox("Hello World");', correct: false },
            { text: 'msg("Hello World");', correct: false },
            { text: 'alert("Hello World");', correct: true },
            { text: 'alertBox("Hello World");', correct: false },

        ]

    },
    {

        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 4?',
        answers: [
            { text: 'if (i <> 4)', correct: false },
            { text: 'if i=! 4 then', correct: false },
            { text: 'if (i !=4)', correct: true },
            { text: 'if i <> 4', correct: false },

        ]

    },
    {

        question: 'What is the correct way to write a Javascript array',
        answers: [
            { text: 'let cars = 1 = ("bmw"), 2 = ("mercedes), 3 = ("audi")', correct: false },
            { text: 'let cars = ["bmw", "mercedes", "audi"]', correct: true },
            { text: 'let cars = "bmw", "mercedes", "audi"', correct: false },
            { text: 'let cars = (1:"bmw", 2:"mercedes", 3:"audi")', correct: false },

        ]

    },
    {

        question: 'Is JavaScript case-sensitive?',
        answers: [
            { text: 'yes', correct: true },
            { text: 'no', correct: false },
       

        ]

    },
    

    


];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    })


}


function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild)
    answerButtons.removeChild(answerButtons.firstChild);
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block"

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = `Play Again`;
    nextButton.style.display = "block";
}




function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}





nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();

    }
});

startQuiz();

