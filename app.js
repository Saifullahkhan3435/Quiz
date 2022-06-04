// const firebaseConfig = {
//     apiKey: "AIzaSyCn_VSaCwBy-0HhH2JGE-cfzRmeJJ87mlU",
//     authDomain: "quize-app-34a41.firebaseapp.com",
//     databaseURL: "https://quize-app-34a41-default-rtdb.firebaseio.com",
//     projectId: "quize-app-34a41",
//     storageBucket: "quize-app-34a41.appspot.com",
//     messagingSenderId: "729892045779",
//     appId: "1:729892045779:web:83897d673f81425786a526"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);



let quizDB = [
    {
        Question: 'Q: What is the full form of HTML',
        a: "hyper text markub language"
        ,b: "haper markub text language",
        c: "hyer text mark language",
        d: "markub hyper text language"
        ,ans: "ans1"
        
    },
    {
        Question: 'Q: What is the full form of CSS',
        a:"cyber coloy sheet",
        b: "Cascading Style Sheet",
        c: "sckdne dje ss",
        d: "markub hyper text language"
        ,ans: "ans2"
    },
    {
        Question: 'Q: What is the full form of HTTP',
        a:"hyer text mark language"
        ,b: "haper markub text language",
        c: "Hypertext Transfer Protocol",
        d: "markub hyper text language"
        ,ans: "ans3"
    },
    {
        Question: 'Q: What is the full form of JS',
        a: "markub hyper text language",
        b:"hyer text mark language"
        ,c: "haper markub text language",
        d: "Javascipt"
        ,ans : "ans4"
        
    }
]

let Question = document.querySelector(".question")
let option1 = document.querySelector("#option1")
let option2 = document.querySelector("#option2")
let option3 = document.querySelector("#option3")
let option4 = document.querySelector("#option4")
let submit = document.querySelector("#submit")
let answers = document.querySelectorAll(".answer")

let questionCount= 0;
let score = 0;

let loadQuestion = () =>{
    console.log(quizDB[0].Question)
    let questionList = quizDB[questionCount]
     Question.innerHTML = questionList.Question

     option1.innerHTML = questionList.a
     option2.innerHTML = questionList.b
     option3.innerHTML = questionList.c
     option4.innerHTML = questionList.d
     }
     loadQuestion();
     
     let getCheckedAnswer = () =>{
     
         let answer;
         answers.forEach((curAnsEle) =>{
             if(curAnsEle.checked){
                 answer = curAnsEle.id
             }
         })
         return answer;
     }
     
     submit.addEventListener("click" , () =>{
         let CheckedAnswer = getCheckedAnswer();
         console.log(CheckedAnswer)
         if(CheckedAnswer == quizDB[questionCount].ans){
             score++
         }
         questionCount++
         if(questionCount < quizDB.length){
             loadQuestion()
         }
         else{
           
            showScore.innerHTML =   `
       <h3>your scored is ${score}/${quizDB.length}quizeDB.length</h3>
     <button class="btn" onclick="location.reload()"> play again</button>
        `
         }
         showScore.classList.remove("scoreArea")
     })