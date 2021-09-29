console.log("hi");

test = () => {
  console.log("running");
  const id = event.srcElement.id;
  console.log(id);

  if (id == 1) {
    var audio = new Audio("cowbell.mp3");
    audio.play();
  } else if (id == 2) {
    var audio = new Audio("tom1.mp3");
    audio.play();
  } else if (id == 3) {
    var audio = new Audio("tom2.mp3");
    audio.play();
  } else if (id == 4) {
    var audio = new Audio("ride.mp3");
    audio.play();
  } else if (id == 5) {
    var audio = new Audio("crash.mp3");
    audio.play();
  } else if (id == 6) {
    var audio = new Audio("snare.mp3");
    audio.play();
  } else if (id == 7) {
    var audio = new Audio("kick.mp3");
    audio.play();
  } else if (id == 8) {
    var audio = new Audio("closedhat.mp3");
    audio.play();
  } else {
    var audio = new Audio("openhat.mp3");
    audio.play();
  }
};
