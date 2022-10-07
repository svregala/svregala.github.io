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
yelp_API_url_DETAILS = 'https://api.yelp.com/v3/businesses/'

# root page of our web application (home page)
@app.route('/')
def homepage():
   return app.send_static_file('business.html')

@app.route('/business', methods=["GET"])
def get_businesses():

   # CITATION: https://stackoverflow.com/questions/34671217/in-flask-what-is-request-args-and-how-is-it-used
   # Lines 26
   yelp_info_dictionary = request.args.to_dict()

   # CITATION: https://github.com/TexasCodes/FlaskYelpFusion/blob/master/Flaskvenvapp
   # Lines 30-40
   url_params = {'term': yelp_info_dictionary["term"], 
                  'latitude':yelp_info_dictionary["latitude"], 
                  'longitude':yelp_info_dictionary["longitude"],
                  'categories': yelp_info_dictionary["category"], 
                  'radius': yelp_info_dictionary["radius"]
                   }

   response = requests.get(yelp_API_url, headers=headers_key, params=url_params)
   response_json = response.json()
   response_string = json.dumps(response_json)
   response_load = json.loads(response_string)

   # grab only businesses key
   business_dict = {'businesses': response_load['businesses']}
   return_response = json.dumps(business_dict)

   return return_response

@app.route('/details', methods=["GET"])
def get_details():
   
   business_ID=request.args.to_dict()
   detail_url = yelp_API_url_DETAILS+business_ID["id"]

   res_details = requests.get(detail_url, headers=headers_key)
   details_json = res_details.json()
   details_string = json.dumps(details_json)
   details_load = json.loads(details_string)

   details_dict = {'status':details_load['hours'][0]["is_open_now"],'photos':details_load['photos'],
                  'address':details_load['location'],'transact_support':details_load['transactions'],
                  'category':details_load['categories'],'phone':details_load['display_phone'],
                  'price':details_load['price'], 'url':details_load['url']}
   details_return = json.dumps(details_dict)

   return details_return


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)