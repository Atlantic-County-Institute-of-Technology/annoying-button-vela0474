let text = document.getElementById("text");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

let clicks = 0;

button1.addEventListener("click", yell_at_user);

function yell_at_user() {
   
    clicks++;
    if( clicks == 1 ) {
        text.innerHTML = "Hey! Stop that!";
    }
    else if( clicks == 5 ) {
        button1.classList.add("getting-angry");
        text.innerHTML = "Leave me alone!!";
    }
    else if( clicks == 10) {
        button1.classList.add("angry")
        button1.classList.remove("getting-angry");
         text.innerHTML = "Stop pressing me!";
     }
     else if(clicks == 16) {
         button1.classList.remove("angry")
         text.innerHTML = "Stop it! You're really pushing my BUTTONS!";
     }
     else if(clicks == 27) {
         text.innerHTML = "If you keep pushing, something strange might happen";
     }
     else if(clicks ==31) {
         button1.classList.add("more_angry");
         button2.classList.add("more_angry");
         text.innerHTML = "I warned you";
     }
     else if(clicks == 35) {
         button2.classList.add("cooked");
         button2.classList.remove("more_angry")
         button1.classList.remove("more_angry");
         text.innerHTML = "HA! Now you gotta catch up to the other";
     }
     else if(clicks == 43) {
         button2.classList.remove("cooked");
         text.innerHTML = "Tricked you didn't I?";
     }
     else if(clicks == 50) {
         text.innerHTML = "If you don't stop now it'll get worse";
     }
     else if(clicks == 57) {
         button1.classList.add("warning");
         button2.classList.add("warning");
         text.innerHTML = "This will be your only warning";
     }
     else if(clicks == 65) {
        button1.classList.remove("warning");
        button2.classList.remove("warning");
        text.innerHTML = "You just don't give up";
     }
     else if(clicks == 66) {
        button1.classList.add("go_home");
        button2.classList.add("go_home");
        text.innerHTML = "You didn't want to stop so now you have to get them!";
     }
     else if(clicks == 73) {
        button1.classList.remove("go_home");
        button2.classList.remove("go_home");
        text.innerHTML = "There is no way that you actually got this far, wow...";
     }
     else if(clicks == 80) {
       button1.classList.add("sad_button");
       button2.classList.add("sad_button");
        text.innerHTML = "Well ok, I might give up soon";
     }
     else if(clicks == 86) {
        button1.classList.remove("sad_button");
        button2.classList.remove("sad_button");    
        text.innerHTML = "Still don't know how you got passed the buttons spinning fast...";
     }
     else if(clicks == 91) {
        text.innerHTML = "Alright, I'm done now bye bye :)";
     }
}