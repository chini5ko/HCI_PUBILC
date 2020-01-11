runAnimation();

function runAnimation(){
    setInitalColors();
    changeToSuperWoman();
}

function setInitalColors(){
    anime({
        targets: '#white',
         opacity:100,
         duration: 1,
      });
}

function changeToSuperWoman(){
  anime({
    targets: '#white',
     opacity:0,
    easing: 'linear',
    duration: 1500,
    complete:setWhiteBack

  });

}

function setWhiteBack(){
    anime({
      targets: '#white',
       opacity:1,
      easing: 'linear',
      duration: 1500,
      complete:changeToSuperWoman
  
    });


  }


function changeToWhite(){
    anime({
        targets: '#white',
         opacity:100,
        easing: 'linear',
        duration: 2000,
       // complete:changeToWhite
    
      });
  
  
  }
  


