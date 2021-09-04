var player1=localStorage.getItem("player1_name");
var player2=localStorage.getItem("player2_name");
var player1Score=0;
var player2Score=0;



document.getElementById("player1_name").innerHTML = player1 +": ";
document.getElementById("player2_name").innerHTML = player2 +": ";


document.getElementById("player1_score").innerHTML=player1Score;
document.getElementById("player2_score").innerHTML=player2Score;


document.getElementById("Question_turn").innerHTML = player1;
document.getElementById("Answer_turn").innerHTML = player2;