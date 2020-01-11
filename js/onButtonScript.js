var moveTime = 1500;
var waitingTime = 300;
var offMode = '#767676';
var onMode = '#FFFFFF';
//runAnimation();
moveLeft();


function moveLeft(){
 
  anime({
    targets: '#oCircle',
    translateX: ['-112'],
   duration: moveTime,
    easing: 'linear',
    complete: waitLeft
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

function waitLeft(){

  anime({
    targets: '#oCircle',
    translateX: ['-112'],
   duration: waitingTime,
    //easing: 'linear',
    complete: moveRight
  }); 
}


function moveRight(){
 
    anime({
      targets: '#oCircle',
      translateX: ['0'],
      duration: moveTime,
      easing: 'linear',
      complete: waitRight
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

  
function waitRight(){

  anime({
    targets: '#oCircle',
    translateX: ['0'],
   duration: waitingTime,
    //easing: 'linear',
    complete: moveLeft
  }); 
}


  


function runAnimation(){
    moveLeft();
}


