document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode);

// tom2
    if (e.keyCode==99) {
        document.getElementById('3');
        let tom2 = new Audio('tom2.mp3');
         tom2.play();

        // button highlight
        let pop = document.getElementById('3',e.keycode)
        pop.classList.add('playing');

        setTimeout(()=>{
            pop.classList.remove('playing');
        },100);
  
      }

// tom1
    else if(e.keyCode==98) {
        document.getElementById('2');
        let tom1 = new Audio('tom1.mp3');
        tom1.play();

        // button highlight
        let pop = document.getElementById('2',e.keycode)
        pop.classList.add('playing');

        setTimeout(()=>{
            pop.classList.remove('playing');
        },100);

      }


// cowbell 
    else if(e.keyCode==97) {
        document.getElementById('1');
        let cowbell = new Audio('cowbell.mp3');
        cowbell.play();

        // button highlight
        let pop = document.getElementById('1',e.keycode)
        pop.classList.add('playing');

        setTimeout(()=>{
            pop.classList.remove('playing');
        },100);
       }


// snare
    else if(e.keyCode==102) {
        document.getElementById('6');
        let snare = new Audio('snare.mp3');
        snare.play();

        // button highlight
        let pop = document.getElementById('6',e.keycode)
        pop.classList.add('playing');

        setTimeout(()=>{
            pop.classList.remove('playing');
        },100);
    }


 //crash 
    else if(e.keyCode==101) {
        document.getElementById('5');
        let crash = new Audio('crash.mp3');
        crash.play();

        // button highlight
        let pop = document.getElementById('5',e.keycode)
        pop.classList.add('playing');

        setTimeout(()=>{
            pop.classList.remove('playing');
        },100);
    }


// ride
    else if(e.keyCode==100) {
        document.getElementById('4');
        let ride = new Audio('ride.mp3');
        ride.play();

        // button highlight
        let pop = document.getElementById('4',e.keycode)
        pop.classList.add('playing');

        setTimeout(()=>{
            pop.classList.remove('playing');
        },100);
    }


// openhat
    else if(e.keyCode==105) {
        document.getElementById('9');
        let openhat = new Audio('openhat.mp3');
        openhat.play();
        
        // button highlight
        let pop = document.getElementById('9',e.keycode)
        pop.classList.add('playing');

        setTimeout(()=>{
            pop.classList.remove('playing');
        },100);

        
    }


// closedhat
    else if(e.keyCode==104) {
        document.getElementById('8');
        let closedhat = new Audio('closedhat.mp3');
        closedhat.play();

        // button highlight
        let pop = document.getElementById('8',e.keycode)
        pop.classList.add('playing');

        setTimeout(()=>{
            pop.classList.remove('playing');
        },100);
    }


// kick
    else if(e.keyCode==103) {
        document.getElementById('7');
        let kick = new Audio('kick.mp3');
        kick.play();

        // button highlight
        let pop = document.getElementById('7',e.keycode)
        pop.classList.add('playing');

        setTimeout(()=>{
            pop.classList.remove('playing');
        },100);
    }

    

}
// ____________________________________________________________________________________________________




