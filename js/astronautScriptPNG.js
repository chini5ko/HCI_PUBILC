// shifting 

// the object starts at the top middle as coordinat(0,0)

// translate in +X  --> (shift to the right)
// translate in -X  <-- (shift to the left)

// *However* 

//                  ^
// translate in -Y  |  (shift to the top)
                  

//                  |
// translate in +Y  V  (shift to the buttom)


function firstMove(){
  setTimeout(step1,1000);
  setTimeout(step2,2000);
  setTimeout(step3,3000);
  setTimeout(step4,4000);
}

var loop = setInterval(() => {
setTimeout(step1,1000);
setTimeout(step2,2000);
setTimeout(step3,3000);
setTimeout(step4,4000);
  
}, 4000);

function step1(){
  
anime({
    //targets: '#white, #yolk, #lightEffect',
    targets: '#white, #yolk, #lightEffect, #ibmPlanet',
    
    //targets: ' #yolk, #lightEffect',
    translateX: -160,
    translateY: 150,
    //scale: '0.5',
    duration: '1000',
    loop: false,
    easing: 'linear'
  });
}



function step2(){
  anime({
      //targets: '#white, #yolk, #lightEffect',
      targets: '#white, #yolk, #lightEffect, #ibmPlanet',
      //targets: ' #yolk, #lightEffect',
    
      translateX: 80,
      translateY: 260,
      duration: '1000',
      loop: false,
      easing: 'linear'
    });
  }

  function step3(){
    anime({
       // targets: '#white, #yolk, #lightEffect',
        targets: '#white, #yolk, #lightEffect, #ibmPlanet',
        //targets: ' #yolk, #lightEffect',
      
        translateX: 180,
        translateY: 150,
        duration: '1000',
        loop: false,
        easing: 'linear'
      });
    }

    
  function step4(){
    anime({
        //targets: '#white, #yolk, #lightEffect',
        targets: '#white, #yolk, #lightEffect, #ibmPlanet',

        translateX: 0,
        translateY: 0,    
        duration: '1000',
        loop: false,
        easing: 'linear'
      });
    }

firstMove(); //
loop();

