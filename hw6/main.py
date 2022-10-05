#CSCI 571: Homework 6 - Steve Regala - 7293040280 - Fall 2022

# yelp API key:
# goP5OwxHhWstZj6srqwEvGaaNDp4S8O5v91HCwpuvh8rv_c_xm7m-quBNK_4cz-ck_Poui16PLnf-MjxdZK9KUHD6ZoHeqr0EcyODA8khRr7MI1q2rn617GmvD82Y3Yx
import json
#import requests
from flask import Flask

# CITATION for line 10: https://stackoverflow.com/questions/20646822/how-to-serve-static-files-in-flask 
app = Flask(__name__, static_url_path='')

# root page of our web application (home page)
@app.route('/')
def homepage():
    return app.send_static_file('business.html')

#@app.route('/business', methods=["GET"])
#def get_businesses():





   

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)