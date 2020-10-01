
// This is the timer
var secondsLeftEl = document.getElementById("#seconds");
function setTime(){
  var secondsLeft = 75;
  var timerInterval = setInterval(function(){
        secondsLeft ++;
        
        if(secondsLeft === 0) {
        clearInterval(timerInterval)
        alert("Quiz is over")
        }
    }, 1000)
}

setTime();

// Dom Variables first page
var h1 = document.createElement("h1");
h1.textContent = "Coding Quiz Challenge";
h1.setAttribute("style", "text-align:center");
document.body.append(h1);

var h5 = document.createElement("h5");
h5.textContent = "Try to answer the following code-related questions within the time limit. keep in mind that incorrect answer will be penalize your score/time by ten seconds!";
h5.setAttribute("style", "text-align:center", "text");
document.body.append(h5);

var button = document.getElementById("Start Quiz");
var button = document.createElement("button");
button.textContent = "Start Quiz";
button.setAttribute("style", "text-align:center");
document.body.append(button);


button.addEventListener ("click", function() {
  alert("did something");
});
