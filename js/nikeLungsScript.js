runAnimation();

function runAnimation(){
  setPosition();
}

function setPosition(){
  anime({
    targets: '#left-lung',
     translateX: ['85'], // -> '250px'
     translateY: ['90'], // -> '250px'
    //scale: '1.1',
  //  loop:true,
    duration: 1
  });
  
  anime({
    targets: '#right-lung',
     translateX: ['105'], // -> '250px'
     translateY: ['90'], // -> '250px'
    //scale: '1.1',
  //  loop:true,
    duration: 1, 
    complete: expand
  });

  //expand();
}

function expand(){
 
  anime({
    targets: '#left-lung, #right-lung',
    scale: '1.06',
   // loop:true,
    duration: 1500,
    easing: 'linear',
    complete: shrink
  });
}

function shrink(){
 
  anime({
    targets: '#left-lung, #right-lung',
    scale: '1.0',
   // loop:true,
    duration: 1300,
    easing: 'linear',
    complete: expand
  });
}



