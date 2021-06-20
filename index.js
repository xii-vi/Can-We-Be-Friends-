console.log("RULES ARE SIMPLE. THERE ARE THREE ANSWER TO THE EVERY QUESTION.EITHER ex1 OR ex2 OR IT COULD BE BOTH. YOU HAVE TO TYPE THE ANSWER.")

console.log("-----------------------------------------------");
var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("Please Enter your name ? ");

console.log("---------------------");

console.log("Welocome," + userName + " Now Play");

console.log("------------------------");

function game(que,ans)
{
  var thought = readlineSync.question(que);
  var userAns = thought.toUpperCase();

if (userAns === ans)
{
  console.log ("Right !!");
  score = score + 2 ;
}
else {

  console.log("Wrong !!");
}
console.log("Current Score : " + score );
console.log("****************************************");
}


var ques = [
{que : "Tea OR Coffee ?? ", ans : "BOTH"},
{que : "Rap OR Classical ?? ",ans : "BOTH"},
{que : "Batman OR Superman ?? ",ans : "BATMAN"},
{que : "Book OR Movie ?? ",ans : "BOOK"},
{que : "Insta OR Snapchat ?? ",ans : "INSTA"},
]

for (var i=0; i<ques.length; i++)
{

var currentQuestion = ques[i]

game(currentQuestion.que,currentQuestion.ans);
  
}

if ( score == 10 ){
  console.log("BICTHES WE ARE SOULMATES");
  console.log("YAY!! PERFECT SCORE 10 on " + score);
}
else if ( score >= 6 )
{
  console.log("We Are Friend !!");
  console.log("NOT BAD. YOU SCORED " + score)
}
else{
  console.log("Maybe We Can Be Friend");
  console.log("WE NEED TO TALK. YOU ONLY SCORED " + score);
}

console.log("Thank You For Playing. WE ARE FRIENDS THAT IS WHY YOU RECIEVED THIS APP");