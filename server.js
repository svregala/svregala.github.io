const { request } = require('express');
const express = require('express');
const app = express();

const YELP_KEY = "goP5OwxHhWstZj6srqwEvGaaNDp4S8O5v91HCwpuvh8rv_c_xm7m-quBNK_4cz-ck_Poui16PLnf-MjxdZK9KUHD6ZoHeqr0EcyODA8khRr7MI1q2rn617GmvD82Y3Yx"
const GOOGLE_KEY = "AIzaSyAS89GmhihLVzoMmRM9GvTQ3yGcDotiqi4"


app.use(express.static(process.cwd()+"/app_hw8/src/"));

/* Landing page */
app.get('/', (req, res) => {
  //res.send('Hello from App Engine!');
  res.sendFile(process.cwd() + "/app_hw8/src/index.html")
});


/* Autocomplete */
app.get('/autocomplete', (req, res) => {
  res.setHeader("Content-Type","text/plain");
  var parameters = url.parse(req.url, true).query;
  var key_word = parameters.text;
  var full_link = {
    method: 'GET', url: 'https://api.yelp.com/v3/autocomplete?text=' + key_word,
    headers: {Authorization: 'Bearer ' + YELP_KEY}
  };
  request.get(full_link, function(error, response, body){
    if (error){
      res.status(404).send(error);
      return null;
    }
    res.send(body);
  })
});

/* Search */
app.get('/search', (req, res) => {
  res.setHeader("Content-Type","text/plain");
  var parameters = url.parse(req.url, true).query;
  var keyword = parameters.term;
  var cat = parameters.category;
  var lat = parameters.latitude;
  var long = parameters.long;
  var rad = parameters.radius;
  var full_link = {
    methods: 'GET',
    url: 'https://api.yelp.com/v3/businesses/search?term=' + keyword + '&latitude=' + lat + '&longitude=' + long + '&category=' + cat + '&radius=' + rad,
    headers: {Authorization: 'Bearer ' + YELP_KEY}
  };
  request(full_link, function(error, response, body){
    if (error){
      res.status(404).send(error);
      return null;
    }
    res.send(body);})
});

/* Details */
app.get('/details', (req, res) => {
  res.setHeader("Content-Type","text/plain");
  var parameters = url.parse(req.url, true).query;
  var id = parameters.id
  var full_link = {
    methods: 'GET', url: 'https://api.yelp.com/v3/businesses/' + id,
    headers: {Authorization: 'Bearer' + YELP_KEY}
  };
  request(full_link, function(error, response, body){
    if (error){
      res.status(404).send(error);
      return null;
    }
    res.send(body);
  })
});

/* Google Location */
app.get('/googlelocation', (req, res) => {
  res.setHeader("Content-Type","text/plain");
  var parameters = url.parse(req.url, true).query;
  var addr = parameters.address;
  var full_link = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + addr + '&key=' + GOOGLE_KEY;
  request.get(full_link, function(error, response, body){
    if (error){
      res.status(404).send(error);
      return null;
    }
    res.send(body);
  })
});


// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});