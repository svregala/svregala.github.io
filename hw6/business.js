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


/* 
** CITATION **: For the functions auto_location() & input_location(), the following website was referenced
to invoke IPInfo API and Google Geocoding API: https://dmitripavlutin.com/javascript-fetch-async-await/.
Lines 36-56.
 */
/* IPInfo for auto detection for location - AUTO DETECTION */
async function auto_location(){
   var token_url = "https://ipinfo.io/json?token=1bb416f5a67c3e";
   var obj;
   const res = await fetch(token_url)
   obj = await res.json();
   var auto_location_array = obj["loc"].split(',');
   console.log('Auto Detection Coordinates', auto_location_array);
   return auto_location_array;
}

/* Google API for location info - INPUT FROM USER */
async function input_location(){
   var google_map_url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + document.getElementById('location').value + "&key=AIzaSyBTLfiP5LAhW1bBZDAQaJiu-A1UfRUu7P4";
   var obj;
   const res = await fetch(google_map_url)
   obj = await res.json();
   var location_array=[];
   location_array.push(obj["results"]["0"]["geometry"]["location"]["lat"], obj["results"]["0"]["geometry"]["location"]["lng"]);
   console.log('Input From User Coordinates', location_array);
   return location_array;
}


/* Main function to send to backend*/
async function submitted(){

   var yelp_url = "https://api.yelp.com/v3/businesses/search?term=";
   var given_keyword = document.getElementById("keyword").value;

   var given_category;
   if(document.getElementById("category").value=='Default'){
      given_category='all';
   }else{
      given_category=document.getElementById("category").value;
   }

   var given_distance;
   if(document.getElementById('distance').value==''){
      given_distance=parseInt(10*1609.344); // convert to meters
   }else{
      given_distance=parseInt(1609.344*parseInt(document.getElementById('distance').value));
      if(given_distance>40000){
         given_distance=40000;
      }
   }

   var location_arr;
   if(document.getElementById('auto_location').checked){
      location_arr= await auto_location();
   }else{
      location_arr= await input_location();
   }

   yelp_url = yelp_url + given_keyword + "&latitude=" + location_arr[0] + "&longitude=" + location_arr[1] + "&categories=" + given_category + "&radius=" + given_distance;
   console.log('YELP URL', yelp_url);

}