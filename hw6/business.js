/*disable location input field after checking box*/
function location_auto_detection(){
   document.getElementById('auto_location').onchange=function(){
      document.getElementById('location').disabled=this.checked;
      document.getElementById('location').value='';
      if(document.getElementById('location').style.backgroundColor=='lightgray'){
         document.getElementById('location').style.backgroundColor='';
      }else{
         document.getElementById('location').style.backgroundColor='lightgray';
      }
   };
}

/* when clear button is pressed, reset the background color of location input back to original */
function reset_location_color(){
   document.getElementById('location').backgroundColor='';
}