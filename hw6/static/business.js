/*
CSCI 571: Homework 6 - Steve Regala - 7293040280 - Fall 2022
*/

/* disable location input field after checking box */
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
   clear_existing_results();
   document.getElementById('location').style.backgroundColor='';
   document.getElementById('location').disabled=false;
}

/* 
CITATION: For the functions auto_location() & input_location(), the following website was referenced
to invoke IPInfo API and Google Geocoding API: https://dmitripavlutin.com/javascript-fetch-async-await/.
Lines 32-48.
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
   try{
      const res = await fetch(google_map_url)
      obj = await res.json();
      var location_array=[];
      location_array.push(obj["results"]["0"]["geometry"]["location"]["lat"], obj["results"]["0"]["geometry"]["location"]["lng"]);
      console.log('Input From User Coordinates', location_array);
      return location_array;
   }catch(err){
      console.log("Invalid location could not be fetched by Google Geocoding API");
      clear_existing_results();
      document.getElementById('no_result').innerHTML = '<div class="no_record">No record has been found</div>';
   }
}

/* Main function to send to backend*/
async function submitted(){
   clear_existing_results();
   var gcp_url = "https://business-5718.wl.r.appspot.com/business?"
   var given_keyword = document.getElementById("keyword").value;
   if(given_keyword==''){
      return;
   }

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
      if(document.getElementById('location').value==''){
         return;
      }
      location_arr= await input_location();
   }

   gcp_url = gcp_url + 'term=' + given_keyword + '&latitude=' + location_arr[0] + '&longitude=' + location_arr[1] + '&category=' + given_category + '&radius=' + given_distance;
   console.log('GCP URL', gcp_url);

   const response = await fetch(gcp_url);
   const test_response = await response.json();
   const result = await test_response;
   console.log(result);

   var arr_result = result['businesses'];
   console.log('Array size:', arr_result.length);
   console.log('Array details are:', arr_result);

   // display results from returned json file
   display_results(arr_result);
}

/*
Clear existing results in the following scenarios:
submit button is pressed, clear button is pressed
*/
function clear_existing_results(){
   document.getElementById('head_of_table_search').innerHTML='';
   document.getElementById('table_body').innerHTML='';
   document.getElementById('no_result').innerHTML='';
}

/* Global array used for sorting */
var json_order_array=[];

/* Display results */
function display_results(json_result){

   /* Current array order of results */
   json_order_array=[];
   if(json_result.length==0){
      document.getElementById('no_result').innerHTML = '<div class="no_record">No record has been found</div>';
   }else{
      // set table headers
      var table_head_row=document.getElementById('head_of_table_search');
      var create_row=document.createElement('tr');
      create_row.innerHTML='<th id="number_name" class="number_setting">No.</th><th id="image_name" class="image_setting">Image</th><th id="business_name" class="business_setting" onclick="sort_table(1, name_ascending)">Business Name</th><th id="rating_name" class="rating_setting" onclick="sort_table(2, rating_ascending)">Rating</th><th id="distance_name" class="distance_setting" onclick="sort_table(3, distance_ascending)">Distance(miles)</th>';
      table_head_row.appendChild(create_row);

      // create following table rows
      var table_body=document.getElementById('table_body');
      for(var i=0; i<json_result.length; i++){
         var number = i+1;
         var picture = json_result[i]['image_url'];
         var name_business = json_result[i]['name'];
         var rating = json_result[i]['rating'];
         var distance = parseFloat(json_result[i]['distance'])/1609.344;
         var item_ID = json_result[i]['id'];

         json_order_array.push({'picture':picture, 'name':name_business, 'rating':rating, 'distance':distance, 'id':item_ID});
         var table_row=document.createElement('tr');
         table_row.className="table_row_setting";
         table_row.innerHTML='<td>' + number + '</td><td><img class="image_detail" src=' + picture + '></td><td><p class="business_name" onclick="get_more_details(\'' + item_ID + '\')">' + name_business + '</p></td><td>' + rating + '</td><td>' + distance.toFixed(2) + '</td>';
         table_body.appendChild(table_row);
      }
      
      // scroll to top of table
      document.getElementById('final_result').scrollIntoView();
   }
}

/* Global variables for sorting */
var name_ascending = true;
var rating_ascending = true;
var distance_ascending = true;

/* 
Sort table
CITATION: https://tutorial.eyehunts.com/js/sort-array-of-objects-javascript-by-key-value-example-code/
Link was reference for lines 176,177,181,182,189,190,194,195,202,203,207,208
*/
function sort_table(col, sort_order) {
   // business name
   if(col==1){
      // sort LOW to HIGH
      if(name_ascending==true){
         json_order_array.sort((a,b)=>(a.name>b.name?1:-1));
         name_ascending=false;
      }
      // sort HIGH to LOW
      else{
         json_order_array.sort((a,b)=>(a.name<b.name?1:-1));
         name_ascending=true;
      }
   }
   // rating
   else if(col==2){
      // sort LOW to HIGH
      if(rating_ascending==true){
         json_order_array.sort((a,b)=>(a.rating>b.rating?1:-1));
         rating_ascending=false;
      }
      // sort HIGH to LOW
      else{
         json_order_array.sort((a,b)=>(a.rating<b.rating?1:-1));
         rating_ascending=true;
      }
   }
   // distance
   else{
      // sort LOW to HIGH
      if(distance_ascending==true){
         json_order_array.sort((a,b)=>(a.distance>b.distance?1:-1));
         distance_ascending=false;
      }
      // sort HIGH to LOW
      else{
         json_order_array.sort((a,b)=>(a.distance<b.distance?1:-1));
         distance_ascending=true;
      }
   }
   
   document.getElementById('table_body').innerHTML='';
   var current_body = document.getElementById('table_body');
   // populate rows
   for(var i=0; i<json_order_array.length; i++){
      var num = i+1;
      var new_row=document.createElement('tr');
      new_row.className='table_row_setting';
      var temp_name = json_order_array[i]['name'];
      var item_ID = json_order_array[i]['id'];
      new_row.innerHTML='<td>' + num + '</td><td><img class="image_detail" src=' + json_order_array[i]['picture'] + '></td><td><p class="business_name" onclick="get_more_details(\'' + item_ID + '\')">' + temp_name + '</p></td><td>' + json_order_array[i]['rating'] + '</td><td>' + json_order_array[i]['distance'].toFixed(2) + '</td>';
      current_body.appendChild(new_row);
   }
}

/* Get more details about the business */
async function get_more_details(clicked_ID){
   var gcp = "https://business-5718.wl.r.appspot.com/details?"
   gcp = gcp + 'id=' + clicked_ID;
   console.log('Detail URL', gcp);

   const response = await fetch(gcp);
   const test_response = await response.json();
   const result = await test_response;

   business_details(result);
}

/* Display more details about a place when clicking its name */
function business_details(details){
   console.log('Test test test it worked:',details);
}