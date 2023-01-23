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
/* IPInfo for auto detection for location - AUTO DETECTION*/
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
   var google_map_url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + document.getElementById('location').value + "&key=THIS KEY IS HIDDEN";
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

   try{
      const response = await fetch(gcp_url);
      const test_response = await response.json();
      const result = await test_response;
      console.log(result);

      var arr_result = result['businesses'];
      console.log('Array size:', arr_result.length);
      console.log('Array details are:', arr_result);

      // display results from returned json file
      display_results(arr_result);
   }catch(err){
      console.log("No valid response returned from backend server");
      clear_existing_results();
      document.getElementById('no_result').innerHTML = '<div class="no_record">No record has been found</div>';
   }
}

/*
Clear existing results in the following scenarios:
submit button is pressed, clear button is pressed
*/
function clear_existing_results(){
   document.getElementById('head_of_table_search').innerHTML='';
   document.getElementById('table_body').innerHTML='';
   document.getElementById('no_result').innerHTML='';
   document.getElementById('more_detail').innerHTML='';
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
Link was reference for the sorting methods in the function
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

   try{
      const response = await fetch(gcp);
      const test_response = await response.json();
      const result = await test_response;
      var value= await result;
      business_details(value);
   }catch(err){
      console.log("No valid response about business details returned from YELP");
   }

}

/* Display more details about a place when clicking its name */
function business_details(details){
   // clear existing results
   document.getElementById('more_detail').innerHTML='';

   console.log('Test it worked:',details);

   var detail_dict = {'name':details['name'],'status':details['hours'][0]["is_open_now"],'photos':details['photos'],
                     'address':details['location'],'transact_support':details['transactions'],
                     'category':details['categories'],'phone':details['display_phone'],
                     'price':details['price'],'url':details['url']
   };
   
   console.log('Details dictionary:',detail_dict);
   console.log('Details length:',detail_dict.length); // undefined

   var status = {'status':detail_dict['status']};
   console.log('this is status', status);

   // display details
   var result_detail_section=document.getElementById('more_detail');
   var new_table=document.createElement('table');
   new_table.id="table_details";
   new_table.className="disp_table";
   result_detail_section.appendChild(new_table);

   var initial_row=new_table.insertRow(0);
   var initial_cell=initial_row.insertCell(0);
   initial_cell.id="cell_inside";

   //initial_cell.innerHTML="this is a test run";
   initial_cell.innerHTML='<div class="display_title">' + detail_dict['name'] + '</div><hr class="display_blue_line">';

   var overall_div = document.createElement("div");
   document.getElementById('cell_inside').appendChild(overall_div);

   var inside_table = document.createElement("table");
   inside_table.id="inside";
   inside_table.className="inside_table";

   overall_div.append(inside_table); // inside table is main table

   // 1st ROW with STATUS AND CATEGORY
   var first_row = inside_table.insertRow(0); 
   // NO STATUS RETURNED --
   if(detail_dict['status']==undefined){
      var first_cell=first_row.insertCell(0);
      first_cell.className="not_present";
      first_cell.innerHTML='Status';
   }else{
      var first_cell=first_row.insertCell(0);
      first_cell.className="present";
      first_cell.innerHTML='Status';
   }
   // NO CATEGORY RETURNED --
   if(detail_dict['category']==null || detail_dict['category']==""){
      var second_cell=first_row.insertCell(1);
      second_cell.className="not_present";
      second_cell.innerHTML='Category';
   }else{
      var second_cell=first_row.insertCell(1);
      second_cell.className="present";
      second_cell.innerHTML='Category';
   }

   // NO SUB-STATUS -- 
   // 2nd ROW with value of status and category
   var second_row = inside_table.insertRow(1); 
   if(detail_dict['status']==undefined){
      var first_cell=second_row.insertCell(0);
      first_cell.innerHTML = '<div class="not_present"><p class="not_present">Open Now</p></div>';
   }else{
      var first_cell=second_row.insertCell(0);
      // check if it's open or closed
      if(detail_dict['status']==true){
         first_cell.innerHTML = '<div class="open_now"><p class="status">Open Now</p></div>';
      }else{
         first_cell.innerHTML = '<div class="closed_now"><p class="status">Closed Now</p></div>';
      }
   }
   // NO SUB-CATEGORY
   if(detail_dict['category']==null || detail_dict['category']==""){
      var second_cell=second_row.insertCell(1);
      second_cell.innerHTML = '<div><p class="not_present">No Category</p></div>'
   }else{
      var second_cell=second_row.insertCell(1);
      var our_category = '';
      for(var i=0; i<detail_dict['category'].length; i++){
         our_category+=detail_dict['category'][i]['title'];
         if(i<detail_dict['category'].length-1){
            our_category+=' | ';
         }
      }
      second_cell.innerHTML = '<div><p class="category_details">'+our_category+'</p></div>';
   }

   // 3RD ROW WITH ADDRESS AND PHONE NUMBER --
   var third_row = inside_table.insertRow(2);
   // NO ADDRESS RETURNED --
   if(detail_dict['address']==null || detail_dict['address']==""){
      var first_cell=third_row.insertCell(0);
      first_cell.className="not_present";
      first_cell.innerHTML='Address';
   }else{
      var first_cell=third_row.insertCell(0);
      first_cell.className="add_phone_tra_pr_info";
      first_cell.innerHTML='Address'
   }
   // NO PHONE NUMBER RETURNED --
   if(detail_dict['phone']==null || detail_dict['phone']==""){
      var second_cell=third_row.insertCell(1);
      second_cell.className="not_present";
      second_cell.innerHTML='Phone Number';
   }else{
      var second_cell=third_row.insertCell(1);
      second_cell.className='add_phone_tra_pr_info';
      second_cell.innerHTML="Phone Number";
   }

   // 4TH ROW with values of Address and Phone Number
   // NO SUB-ADDRESS
   var fourth_row = inside_table.insertRow(3);
   if(detail_dict['address']==null || detail_dict['address']==""){
      var first_cell=fourth_row.insertCell(0);
      first_cell.innerHTML='<div><p class="not_present">Insert Address</p></div>';
   }else{
      var first_cell=fourth_row.insertCell(0);
      var our_address='';
      for(var i=0;i<detail_dict['address']['display_address'].length;i++){
         our_address+=detail_dict['address']['display_address'][i];
         if(i<detail_dict['address']['display_address'].length-1){
            our_address+=' ';
         }
      }
      first_cell.innerHTML='<div><p class="rest_details">' +our_address+ '</p></div>';
   }
   // NO SUB-PHONE NUMBER
   if(detail_dict['phone']==null || detail_dict['phone']==""){
      var second_cell=fourth_row.insertCell(1);
      second_cell.innerHTML='<div><p class="not_present">Insert Phone Number</p></div>';
   }else{
      var second_cell=fourth_row.insertCell(1);
      second_cell.innerHTML='<div><p class="rest_details">' + detail_dict['phone'] + '</p></div>';
   }

   // 5TH ROW WITH TRANSACTION SUPPORTED AND PRICE
   var fifth_row=inside_table.insertRow(4);
   if(detail_dict['transact_support']==null || detail_dict['transact_support'].length==0){
      var first_cell=fifth_row.insertCell(0);
      first_cell.className="not_present";
      first_cell.innerHTML="Transaction";
   }else{
      var first_cell=fifth_row.insertCell(0);
      first_cell.className="add_phone_tra_pr_info";
      first_cell.innerHTML='Transaction Supported';
   }
   if(detail_dict['price']==""){
      var second_cell=fifth_row.insertCell(1);
      second_cell.className='not_present';
      second_cell.innerHTML='Price';
   }else{
      var second_cell=fifth_row.insertCell(1);
      second_cell.className='add_phone_tra_pr_info';
      second_cell.innerHTML='Price'
   }

   // 6TH ROW with VALUES for Transaction Support and Price
   var sixth_row=inside_table.insertRow(5);
   if(detail_dict['transact_support']==null || detail_dict['transact_support'].length==0){
      var first_cell=sixth_row.insertCell(0);
      first_cell.innerHTML='<div><p class="not_present">Insert Support</p></div>';
   }else{
      var first_cell=sixth_row.insertCell(0);
      var our_support='';
      for(var i=0;i<detail_dict['transact_support'].length;i++){
         our_support+=detail_dict['transact_support'][i].charAt(0).toUpperCase() + detail_dict['transact_support'][i].slice(1);
         if(i<detail_dict['transact_support'].length-1){
            our_support+= ' | ';
         }
      }
      first_cell.innerHTML='<div><p class="rest_details">' + our_support + '</p></div>'
   }
   if(detail_dict['price']==""){
      var second_cell=sixth_row.insertCell(1);
      second_cell.innerHTML='<div><p class="not_present">$$$</p></div>'
   }else{
      var second_cell=sixth_row.insertCell(1);
      second_cell.innerHTML='<div><p class="rest_details">' + detail_dict['price'] + '</p></div>'
   }

   // 7TH ROW MORE INFO
   var seventh_row=inside_table.insertRow(6);
   if(detail_dict['url']=="" || detail_dict['url']==null){
      var first_cell = seventh_row.insertCell(0);
      first_cell.className='not_present';
      first_cell.innerHTML='More info';
   }else{
      var first_cell = seventh_row.insertCell(0);
      first_cell.className='add_phone_tra_pr_info';
      first_cell.innerHTML='More info';
   }

   // 8TH ROW FOR VALUE OF MORE INFO
   var eigth_row=inside_table.insertRow(7);
   if(detail_dict['url']=="" || detail_dict['url']==null){
      var first_cell = eigth_row.insertCell(0);
      first_cell.innerHTML='<div><p class="not_present">Yelp</p></div>'
   }else{
      var first_cell = eigth_row.insertCell(0);
      first_cell.innerHTML='<div><p class="yelp_link_details"><a href=\'' + detail_dict['url'] + '\' target="_blank">Yelp</a></p></div>';
   }
   //<div><p class="yelp_link_details"><a href="https://www.yelp.com/biz/bestia-los-angeles?adjust_creative=jw_lFxO1duLUmfKdjAtSIg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=jw_lFxO1duLUmfKdjAtSIg" target="_blank">Yelp</a></p></div>

   // 9TH ROW FOR TABLE OF IMAGES
   var ninth_row=inside_table.insertRow(8);
   var image_table=document.createElement('table');
   image_table.className='inside_table';
   ninth_row.append(image_table);

   var image_row=image_table.insertRow(0);
   
   var count=0;
   for(var i=0; i<detail_dict['photos'].length; i++){
      var num=i+1;
      var img_cell = image_row.insertCell(i);
      img_cell.className='yelp_images';
      img_cell.innerHTML='<div><img class="crop_yelp_images" src=' + detail_dict['photos'][i] + '></div><div class="photo_caption">Photo ' + num + '</div></td>';
   }
   document.getElementById('more_detail').scrollIntoView();
}