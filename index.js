var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//Iterates through each button to add a click event
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("keydown", function() {

    var keyCode = event.keyCode;

    switch (keyCode) {
      case 87:
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        document.querySelector(".w").classList.add("pressed");
        setTimeout(function() {
          document.querySelector(".w").classList.remove("pressed");
        }, 100);
        break;

      case 65:
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        document.querySelector(".a").classList.add("pressed");
        setTimeout(function() {
          document.querySelector(".a").classList.remove("pressed");
        }, 100);
        break;

      case 83:
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        document.querySelector(".s").classList.add("pressed");
        setTimeout(function() {
          document.querySelector(".s").classList.remove("pressed");
        }, 100);
        break;

      case 68:
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        document.querySelector(".d").classList.add("pressed");
        setTimeout(function() {
          document.querySelector(".d").classList.remove("pressed");
        }, 100);
        break;

      case 74:
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        document.querySelector(".j").classList.add("pressed");
        setTimeout(function() {
          document.querySelector(".j").classList.remove("pressed");
        }, 100);
        break;

      case 75:
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        document.querySelector(".k").classList.add("pressed");
        setTimeout(function() {
          document.querySelector(".k").classList.remove("pressed");
        }, 100);
        break;

      case 76:
        var kickBass = new Audio('sounds/kick-bass.mp3');
        kickBass.play();
        document.querySelector(".l").classList.add("pressed");
        setTimeout(function() {
          document.querySelector(".l").classList.remove("pressed");
        }, 100);
        break;

      default:
        console.log(keyCode);

    }
  });
}

document.addEventListener("keydown", function() {
  console.log(event.key);
})
