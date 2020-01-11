runAnimation();
var time = 1000;

function runAnimation(){
  close();
 // setInterval(close,3000);
 // close();
}

function close(){

    anime({
          targets: '#mouth',
          d:"M771.142 714.001L1509.5 433L1595.5 603L1595.5 796.022L800.153 796.022L771.142 714.001Z",
         opacity:100,
         height:80,
         duration: 500,
         
         complete: waitClose
      });


}

function waitClose(){
  anime({
    targets: '#face' ,
       height:80,
       duration: 200,
       complete: open
    });
}

function open(){
  anime({
    targets: '#rightEye, #leftEye' ,
       height:5,
       duration: 200,
       easing: 'linear',
       complete: waitOpen
    });
}

function waitOpen(){

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
