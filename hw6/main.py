#CSCI 571: Homework 6 - Steve Regala - 7293040280 - Fall 2022

# yelp API key:
# goP5OwxHhWstZj6srqwEvGaaNDp4S8O5v91HCwpuvh8rv_c_xm7m-quBNK_4cz-ck_Poui16PLnf-MjxdZK9KUHD6ZoHeqr0EcyODA8khRr7MI1q2rn617GmvD82Y3Yx
from flask import Flask, request, jsonify
import requests
import json

# CITATION for line 10: https://stackoverflow.com/questions/20646822/how-to-serve-static-files-in-flask 
app = Flask(__name__, static_url_path='')

YELP_API_KEY = "goP5OwxHhWstZj6srqwEvGaaNDp4S8O5v91HCwpuvh8rv_c_xm7m-quBNK_4cz-ck_Poui16PLnf-MjxdZK9KUHD6ZoHeqr0EcyODA8khRr7MI1q2rn617GmvD82Y3Yx"
headers_key = {'Authorization': 'Bearer %s' %YELP_API_KEY}
yelp_API_url = 'https://api.yelp.com/v3/businesses/search'

# root page of our web application (home page)
@app.route('/')
def homepage():
   return app.send_static_file('business.html')

@app.route('/business/<yelp_info_string>', methods=["GET"])
def get_businesses(yelp_info_string):
   #response_yelp = requests.get(url=yelp_url, headers=HEADER)
   #return jsonify(yelp_url)
   #return response_yelp

   yelp_info_array = str.split('&')
   url_params = {'term': yelp_info_array[0], 
                  'coordinates': {'latitude':yelp_info_array[1], 'longitude':yelp_info_array[2]},
                  'categories': yelp_info_array[3], 
                  'radius': yelp_info_array[4]}

   response = requests.get(yelp_API_url, headers=headers_key, params=url_params)
	#response_json = response.json()

   return response.json()

   

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)