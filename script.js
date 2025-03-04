let text = document.getElementById("text");
let button1 = document.getElementById("button1");

let clicks = 0;

button1.addEventListener("click", yell_at_user);

function yell_at_user() {
   
    clicks++;
    if( clicks == 1 ) {
        text.innerHTML = "Hey! Stop that!";
    }
    else if( clicks == 5 ) {
        text.innerHTML = "Leave me alone!!";
    }
    else if( clicks == 10) {
       button1.classList.add("angry")
        text.innerHTML = "I'm gonna get you!";
    }
    else if(clicks == 16) {
        button1.classList.remove("angry")
        text.innerHTML = "Stop it! You're really pushing my BUTTONS!"
    }
    else if(clicks == 27) {
        text.innerHTML = "If you keep pushing, something strange might happen"
    }
    else if(clicks ==31) {
        button1.classList.add("more_angry")
        text.innerHTML = "I warned you"
    }
    else if(clicks == 35) {
        button2.classList.add("cooked")
        button2.classList.remove("more_angry")
        text.innerHTML = "HA! Now you gotta catch up to the other" 
    }
    else if(clicks == 43) {
        button2.classList.remove("cooked")
        text.innerHTML = "Tricked you didn't I?"
    }
    else if(clicks == 50) {
        text.innerHTML = "If you don't stop now it'll get worse"
    }
    else if(clicks == 57) {
        button1.classList.add("warning")
        button2.classList.add("warning")
        text.innerHTML = "This will be your only warning"
    }

}