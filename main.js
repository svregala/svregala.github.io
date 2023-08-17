import {about, education, skills, project, experience} from "./description.js"

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
      + "\n<u><b style= 'color: rgb(78, 175, 78);'>Relevant Coursework</b></u>: " + education[0]["coursework"]
      + "<br><br>"
      + "<hr>"
      + "<br>"
      + "<u><b style= 'color: rgb(78, 175, 78);'>Undergraduate School</b></u>: " + education[1]["school"]
      + "\n<u><b style= 'color: rgb(78, 175, 78);'>Degree</b></u>: " + education[1]["degree"]
      + "\n<u><b style= 'color: rgb(78, 175, 78);'>Graduation</b></u>: " + education[1]["graduation"]
      + "\n<u><b style= 'color: rgb(78, 175, 78);'>Relevant Coursework</b></u>: " + education[1]["coursework"]
      + "<br><br>"
      + "<hr>"
      + "<br>"
      + "<u><b style= 'color: rgb(78, 175, 78);'>Highschool</b></u>: " + education[2]["school"]
      + "\n<u><b style= 'color: rgb(78, 175, 78);'>Degree</b></u>: " + education[2]["degree"]
      + "\n<u><b style= 'color: rgb(78, 175, 78);'>Graduation</b></u>: " + education[2]["graduation"]
      + "\n<u><b style= 'color: rgb(78, 175, 78);'>Relevant Coursework</b></u>: " + education[2]["coursework"]
}

document.getElementById("skills").onclick = function() {
   document.getElementById('disp_text').innerHTML = 
        "<u><b style= 'color: rgb(78, 175, 78);'>Programming & Web</b></u>: " + skills[0]
      + "\n<u><b style= 'color: rgb(78, 175, 78);'>Tools & Frameworks</b></u>: " + skills[1]
      + "\n<u><b style= 'color: rgb(78, 175, 78);'>Language</b></u>: " + skills[2]
}

document.getElementById("projects").onclick = function() {
   document.getElementById('disp_text').innerHTML =
   "<u><b style= 'color: rgb(78, 175, 78);'>Project Name</b></u>: " + project[5]["project name"]
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Description</b></u>: " + project[5]["project description"]
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Github - Video Index</b></u>: <a href=\'" + project[5]["project github video"] + "\' target=_blank>Click Me - Video Index!</a>"
   + "<br><br>"
   + "<hr>"
   + "<br>"
   + "<u><b style= 'color: rgb(78, 175, 78);'>Project Name</b></u>: " + project[0]["project name"]
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Description</b></u>: " + project[0]["project description"]
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Website</b></u>: <a href=\'" + project[0]["Web link"] + "\' target=_blank>Click Me!</a>"
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Github - iOS</b></u>: <a href=\'" + project[0]["project github iOS"] + "\' target=_blank>Click Me - iOS!</a>"
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Github - Web</b></u>: <a href=\'" + project[0]["project github web"] + "\' target=_blank>Click Me - Web!</a>"
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Demonstration of iOS App</b></u>: <a href=\'" + project[0]["video demo iOS"] + "\' target=_blank>Click Me - iOS Video Demo!</a>"
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Demonstration of App on Web Browser</b></u>: <a href=\'" + project[0]["video demo web browser"] + "\' target=_blank>Click Me - Web Browser Video Demo!</a>"
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Demonstration of App on Mobile Browser</b></u>: <a href=\'" + project[0]["video demo mobile browser"] + "\' target=_blank>Click Me - Mobile Browser Video Demo!</a>"
   + "<br><br>"
   + "<hr>"
   + "<br>"
   + "<u><b style= 'color: rgb(78, 175, 78);'>Project Name</b></u>: " + project[1]["project name"]
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Description</b></u>: " + project[1]["project description"]
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Github - Genetic Algorithm</b></u>: <a href=\'" + project[1]["project github genetic"] + "\' target=_blank>Click Me - Github GA!</a>"
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Github - Minimax Alg with Alpha-Beta Pruning</b></u>: <a href=\'" + project[1]["project github minmax"] + "\' target=_blank>Click Me - Github MinMax!</a>"
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Github - Neural Network</b></u>: <a href=\'" + project[1]["project github MLP"] + "\' target=_blank>Click Me - Github MLP!</a>"
   + "<br><br>"
   + "<hr>"
   + "<br>"
   + "<u><b style= 'color: rgb(78, 175, 78);'>Project Name</b></u>: " + project[4]["project name"]
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Description</b></u>: " + project[4]["project description"]
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Github - Fin-Friends HackSC</b></u>: <a href=\'" + project[4]["project github HackSC"] + "\' target=_blank>Click Me - Github Fin-Friends!</a>"
   + "<br><br>"
   + "<hr>"
   + "<br>"
   + "<u><b style= 'color: rgb(78, 175, 78);'>Project Name</b></u>: " + project[2]["project name"]
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Description</b></u>: " + project[2]["project description"]
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Github - Socket Programming</b></u>: <a href=\'" + project[2]["project github socket"] + "\' target=_blank>Click Me - Github sock!</a>"
   + "<br><br>"
   + "<hr>"
   + "<br>"
   + "<u><b style= 'color: rgb(78, 175, 78);'>Project Name</b></u>: " + project[3]["project name"]
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Description</b></u>: " + project[3]["project description"]
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Github - Kernel</b></u>: <a href=\'" + project[3]["project github weenix"] + "\' target=_blank>Click Me - Github Wee!</a>"
   + "<br><br>"
   + "<hr>"
   + "<br>"
   + "<u><b style= 'color: rgb(78, 175, 78);'>Other</b></u>: <br><a href=\'https://github.com/svregala/Leetcode-Solutions\' target=_blank>Click Me - Leetcode Solutions!</a>"
}

document.getElementById("experience").onclick = function(){
   document.getElementById('disp_text').innerHTML =
   "<u><b style= 'color: rgb(78, 175, 78);'>Company</b></u>: " + experience[0]["company"]
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Role</b></u>: " + experience[0]["role"]
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Location</b></u>: " + experience[0]["location"]
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Duration</b></u>: " + experience[0]["duration"]
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Description</b></u>: " + experience[0]["desc"]
   + "<br><br>"
   + "<hr>"
   + "<br>"
   + "<u><b style= 'color: rgb(78, 175, 78);'>Company</b></u>: " + experience[1]["company"]
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Role</b></u>: " + experience[1]["role"]
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Location</b></u>: " + experience[1]["location"]
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Duration</b></u>: " + experience[1]["duration"]
   + "\n<u><b style= 'color: rgb(78, 175, 78);'>Description</b></u>: " + experience[1]["desc"]
}