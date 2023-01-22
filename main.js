import education from "./description.js"

window.onload = function display_aboutMe() {
   document.getElementById("our_text").innerHTML = "This is a test INITIAL"
}

function change_text(){
   document.getElementById('our_text').innerHTML = "This is a test"
}
