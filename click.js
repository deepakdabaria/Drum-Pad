function kshmr(){

 buttons = document.querySelectorAll('button');
    for (item of buttons) {
        item.addEventListener('click', (e) => {
            buttonText = e.target.innerText;
            // console.log('Button text is ', buttonText);
        })
        
    }



    // ---------------------------------------------------
    //tom2 
    if(buttonText == 'Tom-2 (3)'){
        document.getElementById('3');
        let tom2 = new Audio('tom2.mp3');
        tom2.play();

        
        // button highlight
        let pop = document.getElementById('3')
        pop.classList.add('playing');

        setTimeout(()=>{
            pop.classList.remove('playing');
        },100);

    }



    // ----------------------------------------------------
    //tom1 
    else if(buttonText == 'Tom-1 (2)'){
        document.getElementById('2');
        let tom1 = new Audio('tom1.mp3');
        tom1.play();


        
        // button highlight
        let pop = document.getElementById('2')
        pop.classList.add('playing');

        setTimeout(()=>{
            pop.classList.remove('playing');
        },100);

    }


    // -----------------------------------------------------
    // cowbell 
    else if(buttonText == 'Cowbell (1)'){
        document.getElementById('1');
        let cowbell = new Audio('cowbell.mp3');
        cowbell.play();


        
        // button highlight
        let pop = document.getElementById('1')
        pop.classList.add('playing');

        setTimeout(()=>{
            pop.classList.remove('playing');
        },100);
    }



    // -----------------------------------------------------
// snare
    else if(buttonText == 'Snare (6)'){
        document.getElementById('6');
        let snare = new Audio('snare.mp3');
        snare.play();


        
        // button highlight
        let pop = document.getElementById('6')
        pop.classList.add('playing');

        setTimeout(()=>{
            pop.classList.remove('playing');
        },100);
    }



    // -----------------------------------------------------
// crash
    else if(buttonText == 'Crash (5)'){
        document.getElementById('5');
        let crash = new Audio('crash.mp3');
        crash.play();


        
        // button highlight
        let pop = document.getElementById('5')
        pop.classList.add('playing');

        setTimeout(()=>{
            pop.classList.remove('playing');
        },100);
    }


       // -----------------------------------------------------
// ride
else if(buttonText == 'Ride (4)'){
    document.getElementById('4');
    let ride = new Audio('ride.mp3');
    ride.play();


    
    // button highlight
    let pop = document.getElementById('4')
    pop.classList.add('playing');

    setTimeout(()=>{
        pop.classList.remove('playing');
    },100);
}



       // -----------------------------------------------------
// openhat
else if(buttonText == 'Open hat (9)'){
    document.getElementById('9');
    let openhat = new Audio('openhat.mp3');
        openhat.play();

    
    // button highlight
    let pop = document.getElementById('9')
    pop.classList.add('playing');

    setTimeout(()=>{
        pop.classList.remove('playing');
    },100);
}



       // -----------------------------------------------------
// closedhat
else if(buttonText == 'Closed hat (8)'){
    document.getElementById('8');
    let closedhat = new Audio('closedhat.mp3');
        closedhat.play();

    
    // button highlight
    let pop = document.getElementById('8')
    pop.classList.add('playing');

    setTimeout(()=>{
        pop.classList.remove('playing');
    },100);
}


// -----------------------------------------------------



//kick 
 else if(buttonText == 'Kick (7)'){
     document.getElementById('7');
     let kick = new Audio('kick.mp3');
     kick.play();


     
     // button highlight
     let pop = document.getElementById('7')
     pop.classList.add('playing');

     setTimeout(()=>{
         pop.classList.remove('playing');
     },100);

 }
 
 
 
 
}









































