
runAnimation();

function runAnimation(){
  setPosition();
}

//set up position
function setPosition(){
  anime({
    targets: '#wheel',
    translateX: ['10'], // -> '250px'
    translateY: ['15'], // -> '250px'
    // rotate: '1turn',
    // loop:true,
    // easing: 'linear',
    duration: 1,
    complete: rotate
  });

}

function rotate(){
  anime({
    targets: '#wheel',
      rotate: '1turn',
     loop:true,
     easing: 'linear',
    duration: 21500,
  });

}


