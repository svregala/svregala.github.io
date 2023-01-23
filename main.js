import {about, education} from "./description.js"

window.onload = function display_aboutMe() {
   document.getElementById('disp_text').innerHTML = about
}

document.getElementById("aboutMe").onclick = function() {
   document.getElementById('disp_text').innerHTML = about
}

document.getElementById("education").onclick = function() {
   document.getElementById('disp_text').innerHTML = 
        "<u><b style= 'color: rgb(78, 175, 78);'>Graduate School</b></u>: " + education[0]["school"]
      + "\n<u><b style= 'color: rgb(78, 175, 78);'>Degree</b></u>: " + education[0]["degree"]
      + "\n<u><b style= 'color: rgb(78, 175, 78);'>Graduation</b></u>: " + education[0]["graduation"]
      + "<br><br>"
      + "<hr>"
      + "<br>"
      + "<u><b style= 'color: rgb(78, 175, 78);'>Undergraduate School</b></u>: " + education[1]["school"]
      + "\n<u><b style= 'color: rgb(78, 175, 78);'>Degree</b></u>: " + education[1]["degree"]
      + "\n<u><b style= 'color: rgb(78, 175, 78);'>Graduation</b></u>: " + education[1]["graduation"]
      + "<br><br>"
      + "<hr>"
      + "<br>"
      + "<u><b style= 'color: rgb(78, 175, 78);'>Highschool</b></u>: " + education[2]["school"]
      + "\n<u><b style= 'color: rgb(78, 175, 78);'>Degree</b></u>: " + education[2]["degree"]
      + "\n<u><b style= 'color: rgb(78, 175, 78);'>Graduation</b></u>: " + education[2]["graduation"]
}

