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
   document.getElementById('location').style.backgroundColor='';
   document.getElementById('location').disabled=false;
}



/*
   YELP API KEY: goP5OwxHhWstZj6srqwEvGaaNDp4S8O5v91HCwpuvh8rv_c_xm7m-quBNK_4cz-ck_Poui16PLnf-MjxdZK9KUHD6ZoHeqr0EcyODA8khRr7MI1q2rn617GmvD82Y3Yx
   IP INFO KEY: 1bb416f5a67c3e
   GOOGLE API KEY: AIzaSyBTLfiP5LAhW1bBZDAQaJiu-A1UfRUu7P4
}*/

/* IPInfo for auto detection for location */
async function auto_location(){
   var token_url = "https://ipinfo.io/json?token=1bb416f5a67c3e";
   var obj;
   /*var obj;
   fetch(token_url).then(result=>result.json()).then(data=> obj=data)
   console.log(obj);*/
   const res = await fetch(token_url)
   obj = await res.json();
   console.log('Coordinates', obj["loc"]);
   var auto_location_array=obj["loc"].split(',');

   return auto_location_array;
}

/* Google API for location info */
function input_location(){
   var google_map_url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + document.getElementById('location').value + "&key=AIzaSyBTLfiP5LAhW1bBZDAQaJiu-A1UfRUu7P4";
   console.log(google_map_url);
}


/* Main function to send to backend*/
function submitted(){


   var user_location = auto_location();
   var temp_location = input_location();
}