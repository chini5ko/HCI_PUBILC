runAnimation();
var time = 1000;

function runAnimation(){
  close();
 // setInterval(close,3000);
 // close();
}

function close(){

    anime({
        targets: '#rightEye , #leftEye' ,
         opacity:100,
         height:80,
         duration: 50,
         easing: 'linear',
         complete: waitClose
      });

      //new Version 
      anime({
         targets: '#rightEye2'  ,
         d:"M765 559.5C765 586.286 738.361 608 705.5 608C672.639 608 630.5 604 646 559.5C646 532.714 672.639 511 705.5 511C738.361 511 765 532.714 765 559.5Z",
          duration: 50,
          easing: 'linear',
         // complete: waitClose
       });

       anime({
         targets: '#leftEye2'  ,
         d:"M271.312 559.5C271.312 586.286 244.673 608 211.812 608C178.951 608 136.811 604 152.312 559.5C152.312 532.714 178.951 511 211.812 511C244.673 511 271.312 532.714 271.312 559.5Z",
          duration: 50,
          easing: 'linear',
         // complete: waitClose
       });

}

function waitClose(){
  anime({
    targets: '#rightEye, #leftEye' ,
       height:80,
       duration: 150,
       easing: 'linear',
       complete: open
    });
}

function open(){
  anime({
    targets: '#rightEye, #leftEye' ,
       height:5,
       duration: 80,
       easing: 'linear',
       complete: waitOpen
    });

    
      //new Version 
      anime({
         targets: '#rightEye2'  ,
         d:"M765.001 559.5C765.001 586.286 738.361 523 705.501 523C672.64 523 630.5 604 646.001 559.5C646.001 532.714 672.64 511 705.501 511C738.361 511 765.001 532.714 765.001 559.5Z",
          duration: 80,
          easing: 'linear',
         // complete: waitClose
       });

       anime({
         targets: '#leftEye2'  ,
         d:"M271.312 559.5C271.312 586.286 244.673 523 211.812 523C178.951 523 136.812 604 152.312 559.5C152.312 532.714 178.951 511 211.812 511C244.673 511 271.312 532.714 271.312 559.5Z",
          duration: 80,
          easing: 'linear',
         // complete: waitClose
       });

}

function waitOpen(){

    // 800 - 1100
 //let timeOpen = Math.floor((Math.random() * 1000) + 800);

  anime({
    targets: '#rightEye, #leftEye' ,
       height:5,
       duration: 50,
       easing: 'linear',
       complete: close2
    });
}

// blink 2 



function close2(){

  anime({
      targets: '#rightEye , #leftEye' ,
       opacity:100,
       height:80,
       duration: 50,
       easing: 'linear',
       complete: waitClose2
    });

    //new Version 
    anime({
       targets: '#rightEye2'  ,
       d:"M765 559.5C765 586.286 738.361 608 705.5 608C672.639 608 630.5 604 646 559.5C646 532.714 672.639 511 705.5 511C738.361 511 765 532.714 765 559.5Z",
        duration: 50,
        easing: 'linear',
       // complete: waitClose
     });

     anime({
       targets: '#leftEye2'  ,
       d:"M271.312 559.5C271.312 586.286 244.673 608 211.812 608C178.951 608 136.811 604 152.312 559.5C152.312 532.714 178.951 511 211.812 511C244.673 511 271.312 532.714 271.312 559.5Z",
        duration: 50,
        easing: 'linear',
       // complete: waitClose
     });

}

function waitClose2(){
anime({
  targets: '#rightEye, #leftEye' ,
     height:80,
     duration: 150,
     easing: 'linear',
     complete: open2
  });
}

function open2(){
anime({
  targets: '#rightEye, #leftEye' ,
     height:5,
     duration: 150,
     easing: 'linear',
     complete: waitOpen2
  });

  
    //new Version 
    anime({
       targets: '#rightEye2'  ,
       d:"M765.001 559.5C765.001 586.286 738.361 523 705.501 523C672.64 523 630.5 604 646.001 559.5C646.001 532.714 672.64 511 705.501 511C738.361 511 765.001 532.714 765.001 559.5Z",
        duration: 150,
        easing: 'linear',
       // complete: waitClose
     });

     anime({
       targets: '#leftEye2'  ,
       d:"M271.312 559.5C271.312 586.286 244.673 523 211.812 523C178.951 523 136.812 604 152.312 559.5C152.312 532.714 178.951 511 211.812 511C244.673 511 271.312 532.714 271.312 559.5Z",
        duration: 80,
        easing: 'linear',
       // complete: waitClose
     });

}

function waitOpen2(){

  // 800 - 1100
let timeOpen = Math.floor((Math.random() * 1000) + 800);

anime({
  targets: '#rightEye, #leftEye' ,
     height:5,
     duration: timeOpen,
     easing: 'linear',
     complete: close3
  });
}

// blink 3 slow


function close3(){

  anime({
      targets: '#rightEye , #leftEye' ,
       opacity:100,
       height:80,
       duration: 50,
       easing: 'linear',
       complete: waitClose3
    });

    //new Version 
    anime({
       targets: '#rightEye2'  ,
       d:"M765 559.5C765 586.286 738.361 608 705.5 608C672.639 608 630.5 604 646 559.5C646 532.714 672.639 511 705.5 511C738.361 511 765 532.714 765 559.5Z",
        duration: 50,
        easing: 'linear',
       // complete: waitClose
     });

     anime({
       targets: '#leftEye2'  ,
       d:"M271.312 559.5C271.312 586.286 244.673 608 211.812 608C178.951 608 136.811 604 152.312 559.5C152.312 532.714 178.951 511 211.812 511C244.673 511 271.312 532.714 271.312 559.5Z",
        duration: 50,
        easing: 'linear',
       // complete: waitClose
     });

}

function waitClose3(){
anime({
  targets: '#rightEye, #leftEye' ,
     height:80,
     duration: 150,
     easing: 'linear',
     complete: open3
  });
}

function open3(){
anime({
  targets: '#rightEye, #leftEye' ,
     height:5,
     duration: 80,
     easing: 'linear',
     complete: waitOpen3
  });

  
    //new Version 
    anime({
       targets: '#rightEye2'  ,
       d:"M765.001 559.5C765.001 586.286 738.361 523 705.501 523C672.64 523 630.5 604 646.001 559.5C646.001 532.714 672.64 511 705.501 511C738.361 511 765.001 532.714 765.001 559.5Z",
        duration: 80,
        easing: 'linear',
       // complete: waitClose
     });

     anime({
       targets: '#leftEye2'  ,
       d:"M271.312 559.5C271.312 586.286 244.673 523 211.812 523C178.951 523 136.812 604 152.312 559.5C152.312 532.714 178.951 511 211.812 511C244.673 511 271.312 532.714 271.312 559.5Z",
        duration: 80,
        easing: 'linear',
       // complete: waitClose
     });

}

function waitOpen3(){

  // 800 - 1100
let timeOpen = Math.floor((Math.random() * 1000) + 800);

anime({
  targets: '#rightEye, #leftEye' ,
     height:5,
     duration: timeOpen,
     easing: 'linear',
     complete: close
  });
}