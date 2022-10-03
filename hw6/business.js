/*disable location input field after checking box*/
function location_auto_detection(){
   document.getElementById('auto_location').onclick=function(){
      document.getElementById('location').disabled=this.checked;
   };
}