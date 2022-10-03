/*disable location input field after checking box*/
function location_auto_detection(){
   document.getElementById('auto_location').onchange=function(){
      document.getElementById('location').enabled=!this.checked;
   };
}