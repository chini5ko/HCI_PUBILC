// shifting 

// the object starts at the top middle as coordinat(0,0)

// translate in +X  --> (shift to the right)
// translate in -X  <-- (shift to the left)

// *However* 

//                  ^
// translate in -Y  |  (shift to the top)
                  

//                  |
// translate in +Y  V  (shift to the buttom)

//chained animation 

//right 180
// medium 0 - 250 / 2 = 125
//left -165 (15 diff) 


var eachLinearduration = 1800;
anime({
  // targets: '#white, #yolk, #lightEffect',
  // //targets: ' #yolk, #lightEffect',
  translateX:0,
  translateY: 125,
  //scale: '0.5',
  // duration: eachLinearduration,
  // loop: false,
  // easing: 'linear',
 // complete: step2
});

step1();
function step1(){
  
  anime({
      targets: '#white, #yolk, #lightEffect',
      //targets: ' #yolk, #lightEffect',
      translateX: -163,
      translateY: 125,
      //scale: '0.5',
      duration: eachLinearduration,
      loop: false,
      easing: 'linear',
      complete: step2
    });
  }

  function step2(){
      anime({
          targets: '#white, #yolk, #lightEffect',
          //targets: ' #yolk, #lightEffect',
          translateX: 0,
          translateY: 250,
          duration: eachLinearduration,
          loop: false,
          easing: 'linear',
          complete: step3
        });
    }
  

  function step3(){
    anime({
        targets: '#white, #yolk, #lightEffect',
        //targets: ' #yolk, #lightEffect',
      
        translateX: 180,
        translateY: 125,
        duration: eachLinearduration,
        loop: false,
        easing: 'linear',
        complete: step4
      });
    }

    
  function step4(){
    anime({
        targets: '#white, #yolk, #lightEffect',

        translateX: 0,
        translateY: 0,    
        duration: eachLinearduration,
        loop: false,
        easing: 'linear', 
        complete: step1
        
      });
    }

