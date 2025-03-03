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
        text.innerHTML = "I'm gonna get you!";
    }

}