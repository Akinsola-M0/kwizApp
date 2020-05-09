let x  = 0;
let y = 0;
var points = 0;
let gameface = document.getElementById("jfh");
let startButton = document.getElementById("start");
let nextbtn = document.getElementById("next");
let scores = document.getElementById("score")


startButton.addEventListener('click',startgame);

function startgame() {

    console.log("game started");

    startButton.classList.add("hide");
    gameface.classList.remove("hide");
    nextbtn.classList.remove("hide");


    
}

let quiz = `{ 
    "Questions" : [
        {"kuestion":"where can heamoglobin be found ?",
          "answers" :[
              {"option_correct": "red blood cells", "id":"correct"},
              {"option_correct": "white blood cells", "id":"wrong"},
              {"option_correct": "brain tissues", "id":"wrong"},
              {"option_correct": "heart", "id":"wrong"}
          ] },
        {"kuestion":"A + B = 36; A - B = 24; A/B=?", "answers" :[
            {"option_correct": "4", "id":"wrong"},
            {"option_correct": "5", "id":"correct"},
            {"option_correct": "6", "id":"wrong"},
            {"option_correct": "7", "id":"wrong"}
        ] },
        {"kuestion":"if a brick weighs 3kg plus half of a similar brick. How much does a brick and a half weigh?", "answers" :[
            {"option_correct": "3kg", "id":"wrong"},
            {"option_correct": "6kg", "id":"wrong"},
            {"option_correct": "9kg", "id":"correct"},
            {"option_correct": "12kg", "id":"wrong"}
        ] },
        {"kuestion":" The sixth month of the year is?", "answers" :[
            {"option_correct": "may", "id":"wrong"},
            {"option_correct": "july", "id":"wrong"},
            {"option_correct": "august", "id":"wrong"},
            {"option_correct": "june", "id":"correct"}
        ] },
        {"kuestion":" Jack and John have 56 marbles together. John has 6x more marbles than Jack. How many marbles does Jack have?", "answers" :[
            {"option_correct": "7", "id":"correct"},
            {"option_correct": "9", "id":"correct"},
            {"option_correct": "8", "id":"correct"},
            {"option_correct": "10", "id":"correct"}
        ] },
        {"kuestion":"which number is not the same as the other three ?", "answers" :[
            {"option_correct": "4/16", "id":"wrong"},
            {"option_correct": "6/24", "id":"wrong"},
            {"option_correct": "2/8", "id":"wrong"},
            {"option_correct": "5/6", "id":"correct"}
        ] }
    ]
}`;

let quizObj = JSON.parse(quiz);

console.log(quizObj);

let nextbt = document.getElementById("next");

let radio_btone = document.getElementById("rbone");
let radio_bttwo = document.getElementById("rbtwo");
let radio_btthree= document.getElementById("rbthree");
let radio_btfour = document.getElementById("rbfour");

let pane = document.querySelector('.pane');

function changeData()    
{
        let question = quizObj.Questions[x].kuestion;
        let kwizquest = document.getElementById("kwizquestion");
        kwizquest.innerHTML=question;

        let option_one = document.getElementById("option_one_text");
        let option_two = document.getElementById("option_two_text");
        let option_three = document.getElementById("option_three_text");
        let option_four = document.getElementById("option_four_text");

       

        radio_btone.value= quizObj.Questions[x].answers[y].id;
        radio_bttwo.value= quizObj.Questions[x].answers[y+1].id;
        radio_btthree.value= quizObj.Questions[x].answers[y+2].id;
        radio_btfour.value= quizObj.Questions[x].answers[y+3].id;



        option_one.innerHTML = quizObj.Questions[x].answers[y].option_correct;
        option_two.innerHTML = quizObj.Questions[x].answers[y+1].option_correct;
        option_three.innerHTML = quizObj.Questions[x].answers[y+2].option_correct;
        option_four.innerHTML = quizObj.Questions[x].answers[y+3].option_correct;

          x++;  

          scores.innerHTML=points;

          if(x>5){
 
            x=0;
            window.alert("you have " + points + " points");
            points=0;
           
            startButton.classList.remove("hide");
            gameface.classList.add("hide");
            nextbtn.classList.add("hide");
            pane.classList.remove("wrong");
            pane.classList.remove("correct");

          }
          
}



console.log(radio_btone.value);
console.log(scores);

// radio_btn.addEventListener('click',checkCorrectAnswer);
// checkCorrectAnswer();
      
radio_btone.addEventListener('click',function checkCorrectAnswer () {
 if (radio_btone.value == "correct"){
     points++;

    pane.classList.remove("wrong");
     pane.classList.add("correct");
 }  else{
     points--;
     pane.classList.remove("correct");
   pane.classList.add("wrong");
 } 
});

radio_bttwo.addEventListener('click',function checkCorrectAnswer () {
    if (radio_bttwo.value == "correct"){
        points++;
      
        pane.classList.remove("wrong");
        pane.classList.add("correct");

    }   else{
        points--;

        pane.classList.remove("correct");
        pane.classList.add("wrong");
    }
   });

   radio_btthree.addEventListener('click',function checkCorrectAnswer () {
    if (radio_btthree.value == "correct"){
        points++;
        pane.classList.remove("wrong");
        pane.classList.add("correct");
    } else{
        points--;
        pane.classList.remove("correct");
        pane.classList.add("wrong");
    }  
   });

   radio_btfour.addEventListener('click',function checkCorrectAnswer () {
    if (radio_btfour.value == "correct"){
        points++;
        pane.classList.remove("wrong");
     pane.classList.add("correct");
    } else{
        points--;
        pane.classList.remove("correct");
        pane.classList.add("wrong");
    }
   });

nextbt.addEventListener('click',changeData);


