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
         text.innerHTML = "Stop it! You're really pushing my BUTTONS!";
     }
     else if(clicks == 27) {
         text.innerHTML = "If you keep pushing, something strange might happen";
     }
     else if(clicks ==31) {
         button1.classList.add("more_angry")
         text.innerHTML = "I warned you";
     }
     else if(clicks == 35) {
         button2.classList.add("cooked")
         button1.classList.remove("more_angry")
         text.innerHTML = "HA! Now you gotta catch up to the other";
     }
     else if(clicks == 43) {
         button2.classList.remove("cooked")
         text.innerHTML = "Tricked you didn't I?";
     }
     else if(clicks == 50) {
         text.innerHTML = "If you don't stop now it'll get worse";
     }
     else if(clicks == 57) {
         button1.classList.add("warning")
         button2.classList.add("warning")
         text.innerHTML = "This will be your only warning";
     }
     else if(clicks == 65) {
        button1.classList.remove("warning")
        button2.classList.remove("warning")
        text.innerHTML = "You just don't give up";
     }
     else if(clicks == 70) {
        button1.classList.add("go_home")
        button2.classList.add("go_home")
        text.innerHTML = "You didn't want to stop so now you have to get them!";
     }
     else if(clicks == 74) {
        button1.classList.remove("go_home")
        button2.classList.remove("go_home")
        text.innerHTML = "There is no way that you actually got this far, wow..."
     }
     else if(clicks == 80) {
        const button3 = document.createElement("button");
        const button4 = document.createElement("button_4")
        button3.innerHTML = "DO NOT PRESS";
        button3.classList.add("button1")
        button3.classList.add("button3")
        button4.innerHTML = "DO NOT PRESS";
        button4.classList.add("button2")
        button4.classList.add("button4")
        container.appendChild(button3);
        container.appenedChil(button4);
        text.innerHTML = "Well, you might have to find the correct one now"
     }

}