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



/*function get_location(){
   var ip_json = new XMLHttpRequest();
   ip_json.open("GET", "https://ipinfo.io/json?token=1bb416f5a67c3e", true);
   ip_json.send();
   console.log(JSON.parse(ip_json.responseText).loc[0]);
   console.log(JSON.parse(ip_json.responseText).loc[1]);

   return 1;
}*/

function get_location(){
   var token_url = "https://ipinfo.io/json?token=1bb416f5a67c3e";
   var obj;
   fetch(token_url).then(result=>result.json()).then(data=> obj=data);
   console.log(obj);
}

function submitted(){
   var user_location = get_location();
}