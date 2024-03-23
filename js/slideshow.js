var slideContainer = document.getElementById("reviews-section");
var reviewWidth = document.getElementsByClassName("review-container")[0].offsetWidth;;
var counter = 1;

function switchSlide(num, userAction=true) {
    slideContainer.style.right = num *  reviewWidth + "px";
    if (userAction) {
        clearInterval(swapper);
    }
}

function autoSwitch() {
    switchSlide(counter, false);
    
    counter++;
    
    if (counter > 4) {
        counter = 0;
    }
}

var swapper = setInterval(autoSwitch, 6000);