function location_auto_detection(){
   if(document.getElementById("auto_location").checked){
      document.getElementById("location").disable=true;
   }else{
      document.getElementById("location").disable=false;
   }
}