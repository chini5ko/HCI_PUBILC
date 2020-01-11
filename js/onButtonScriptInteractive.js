var moveTime = 1000;
var offMode = '#767676';
var onMode = '#FFFFFF';
var isSwitchOn = true;
//runAnimation();
//moveLeft();

function clickedCircle(){
  if(isSwitchOn){
    moveLeft();
    isSwitchOn=false;
  }
  else{
    moveRight();
    isSwitchOn=true;
  }
}


function moveLeft(){
 
  anime({
    targets: '#oCircle',
    translateX: ['-112'],
   duration: moveTime,
    easing: 'linear',
    //complete: moveRight
  });

  anime({
    targets: '.On ' ,
   duration: moveTime,
   easing: 'linear',
    fill: offMode,
  });

  anime({
    targets: '#onBorder' ,
   duration: moveTime,
   easing: 'linear',
    stroke: offMode,
  });
  
}


function moveRight(){
 
    anime({
      targets: '#oCircle',
      translateX: ['0'],
      duration: moveTime,
      easing: 'linear',
      //complete: moveLeft
    });

    anime({
        targets: '.On ' ,
       duration: moveTime,
       easing: 'linear',
        fill: onMode,
      });
    
      anime({
        targets: '#onBorder' ,
       duration: moveTime,
       easing: 'linear',
        stroke: onMode,
      });
      



  }
  
function runAnimation(){
    moveLeft();
}


