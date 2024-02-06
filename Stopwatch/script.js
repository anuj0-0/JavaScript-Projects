let startButton = document.getElementById("start");

startButton.addEventListener("click", start);

let stopButton=document.getElementById('stop')
stopButton.addEventListener('click',stop)

let resetButton=document.getElementById('reset')
resetButton.addEventListener('click',reset)

let timer;
let isRunning = false;
let seconds = 0;
let mins = 0;
let hrs = 0;

function start() {
  if (!isRunning) {
  
    timer = setInterval(updateTime, 1000);
    isRunning = !isRunning;
  }
 
}
function stop(){
    if(isRunning){
        clearInterval(timer)
        isRunning = !isRunning;
    }
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  mins = 0;
  grs = 0;
  updateDisplay();

}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    mins++;

    if (mins === 60) {
      mins = 0;
      hrs++;
    }
  }
  updateDisplay();
}
function updateDisplay() {
  const display = document.getElementById("display");
  const formattedTime = `${pad(hrs)}:${pad(mins)}:${pad(seconds)}`;
  display.innerHTML = formattedTime;
}

function pad(value) {
  return value < 10 ? "0" + value : value;
}
