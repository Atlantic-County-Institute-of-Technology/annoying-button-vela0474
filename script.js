let text = document.getElementById("text");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

let rick = new Audio('assets/rick.mp3');

let clicks = 0;

button1.addEventListener("click", yell_at_user);

function yell_at_user() {
   
    clicks++;
    if( clicks == 1 ) {
        text.innerHTML = "Hey! Stop that!";
    }/*Your only clicking your time away*/
    else if( clicks == 5 ) {
        button1.classList.add("getting-angry");
        text.innerHTML = "Leave me alone!!";
    }/*Buttons moves on one side of the screen really fast*/
    else if( clicks == 10) {
        button1.classList.add("angry")
        button1.classList.remove("getting-angry");
         text.innerHTML = "Stop pressing me!";
     }/*Buttons moves side to side kind of slower*/
     else if(clicks == 16) {
         button1.classList.remove("angry")
         text.innerHTML = "Stop it! You're really pushing my BUTTONS!";
     }/*Buttons are still normal*/
     else if(clicks == 27) {
         text.innerHTML = "If you keep pushing, something strange might happen";
     }/*Brings buttons back to normal*/
     else if(clicks ==31) {
         button1.classList.add("more_angry");
         button2.classList.add("more_angry");
         text.innerHTML = "I warned you";
     }/*Moves buttons back and forth*/
     else if(clicks == 35) {
         button2.classList.add("cooked");
         button2.classList.remove("more_angry")
         button1.classList.remove("more_angry");
         text.innerHTML = "HA! Now you gotta catch up to the other";
     }/*Will move button2 around but, it does nothing you have to click other button*/
     else if(clicks == 43) {
         button2.classList.remove("cooked");
         text.innerHTML = "Tricked you didn't I?";
     }/*Buttons will be normal*/
     else if(clicks == 50) {
         text.innerHTML = "If you don't stop now it'll get worse";
     }/*Brings buttons back to normal*/
     else if(clicks == 57) {
         button1.classList.add("warning");
         button2.classList.add("warning");
         text.innerHTML = "This will be your only warning";
     }/*Moves button back and forth*/
     else if(clicks == 65) {
        button1.classList.remove("warning");
        button2.classList.remove("warning");
        text.innerHTML = "You just don't give up";
     }/*This will bring the buttons back to normal*/
     else if(clicks == 70) {
        button1.classList.add("go_home");
        button2.classList.add("go_home");
        text.innerHTML = "You didn't want to stop so now you have to get them!";
     }/*This will rotate the buttons*/
     else if(clicks == 73) {
        button1.classList.remove("go_home");
        button2.classList.remove("go_home");
        text.innerHTML = "There is no way that you actually got this far, wow...";
     }/*This will make the button normal again*/
     else if(clicks == 85) {
        button1.classList.add("get-out");
        button2.classList.add("get-out");
        text.innerHTML = "Should have given up";
     }/*This will make the button move really fast, just spam in between the first button*/
     else if(clicks == 93) {
       button1.classList.add("sad_button");
       button2.classList.add("sad_button");
       button1.classList.remove("get-out");
       button2.classList.remove("get-out");
       text.innerHTML = "Well ok, I might give up soon";
     }/*This will make the button sad and spin a little*/
     else if(clicks == 100) {
        button1.classList.remove("sad_button");
        button2.classList.remove("sad_button");    
        text.innerHTML = "Why do you keep clicking me! :( ";
     }/*This will be one of the last clicks the button gets */
     else if(clicks == 105) {
        button1.classList.add("fly");
        button2.classList.add("flies");
        text.innerHTML = "Alright, I'm done now bye bye :)";
        //play sound
        rick.play ();
     } /*This is the last click that will happen and you will get rickrolled*/
}