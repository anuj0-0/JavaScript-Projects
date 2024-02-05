let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);

let isRunning = false;
let midStop = false;

let globalIndex = 0;

function start() {
  if (isRunning == false) {
    isRunning = true;
    let boxes = document.querySelectorAll(".box");
    let boxList = Array.from(boxes);
    if (midStop == true) {
      colorChangeBack(globalIndex-1);
    }

    function processElement(index) {
      let color = setColor();
      boxList[index].setAttribute("style", `background:${color}`);
    }

    function loop(index) {
      if (isRunning) {
        processElement(index);
        setTimeout(function () {
          if (index === boxList.length - 1) {
            globalIndex = 0;
            loop(globalIndex);
          } else {
            globalIndex += 1;
            loop(globalIndex);
          }

          colorChangeBack(index);
        }, 1000);
      }
    }
    function colorChangeBack(index) {
      if (isRunning) {
        boxList[index].setAttribute("style", `background:#000000`);
      }
    }

    loop(globalIndex);
  }
}

function setColor() {
  const range = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += range[Math.floor(Math.random() * 16)];
  }
  return color;
}

function stop() {
  if (isRunning) {
    isRunning = false;
  midStop = true;
  }
  
}
