var kiwi = [];
var nKiwis = 5;
for(let i = 0 ; i<nKiwis; i++){
  kiwi[i] = document.getElementById("kiwi-" + (i+1));
}

//console.log(kiwi + "ki");
//kiwi[0].style.display = 'none';
var timeIntervals = 1000;

var numberOfSteps = 5;
var stepTime = [];

var animationDuration = 800; //1800 perfect 
var totalTime;

for(let i=0; i<numberOfSteps; i++){
  stepTime[i] = animationDuration * (i+1);
  totalTime = stepTime[i];
}

for(let i = 1 ; i<nKiwis; i++){
  kiwi[i].style.display = 'none';
  }

  function firstMove() {
    setTimeout(step1,  stepTime[0]);
    setTimeout(step2,  stepTime[1]);
    setTimeout(step3,  stepTime[2]);
    setTimeout(step4,  stepTime[3]);
    setTimeout(step5,  stepTime[4]);
  }

//comment f() and it will be auto, instead of clicking 
function touchedKiwi(){
  firstMove(); //
  




var loop = setInterval(() => {
  setTimeout(step1,  stepTime[0]);
  setTimeout(step2,  stepTime[1]);
  setTimeout(step3,  stepTime[2]);
  setTimeout(step4,  stepTime[3]);
  setTimeout(step5,  stepTime[4]);


}, totalTime);

}
function step1() {
  kiwi[1].style.display = 'block';
}
function step2() {
  kiwi[2].style.display = 'block';
}
function step3() {
  kiwi[3].style.display = 'block';
}
function step4() {
  kiwi[4].style.display = 'block';
}

function step5() {

  for(let i = 1 ; i<nKiwis; i++){
    kiwi[i].style.display = 'none';
    }
  }


//firstMove(); //
//loop(); 
var isMoving = true;

function stopMoving() {
  clearInterval(loop);

}

