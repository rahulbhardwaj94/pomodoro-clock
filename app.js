var minutes = 25;
var seconds = "00";

// Sounds
var click = new Audio("gun_click.wav");
var bell = new Audio("bell_Alarm.mp3");

function template() {
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
}


//  Focus
function focus_fun() {
  console.log("Focus is pressed");
  click.play();
  minutes = 25;
  seconds = "00";
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
}

//Short Break
function short() {
  click.play();
  minutes = "05";
  seconds = "00";

  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

}

//  Long break
function long() {
  click.play();
  minutes = 15;
  seconds = "00";
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
}


// Reset Function
function reset(){
  window.location.reload();
} 

function start(){
  minutes = document.querySelector(".minutes").innerHTML;
  seconds = document.querySelector(".seconds").innerHTML;

  minutes = minutes-1;
  console.log(minutes);
  if(seconds = "00"){
    seconds = 59;
  }

  document.querySelector(".minutes").innerHTML = minutes;
  if (minutes < 10) {
    document.querySelector(".minutes").innerHTML = "0" + minutes;
  }
  document.querySelector(".seconds").innerHTML = seconds;
  if (seconds < 10) {
    document.querySelector(".seconds").innerHTML = "0" + seconds;
  }

  var min_Interval = setInterval(min_Timer, 60000);
  var sec_Interval = setInterval(sec_Timer, 1000);

  function min_Timer() {
    minutes--;
    document.querySelector(".minutes").innerHTML = minutes;
    if (minutes < 10) {
      document.querySelector(".minutes").innerHTML = "0" + minutes;
    }
  }

  function sec_Timer() {
    seconds--;
    document.querySelector(".seconds").innerHTML = seconds;
    if (seconds <= 0) {
      if (minutes <= 0) {
        clearInterval(min_Interval);
        clearInterval(sec_Interval);
        bell.play();
        
        document.getElementById("done").innerHTML =
          "Timer is over...😎";
        document.getElementById("done").classList.add(".show-message");
        setTimeout(() => {
          reset();
        }, 5000);

      }
      seconds = 60;
    }
    if (seconds < 10) {
      document.querySelector(".seconds").innerHTML = "0" + seconds;
    }
  }
}

