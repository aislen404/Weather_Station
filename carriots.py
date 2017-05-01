#!/usr/bin/python3

from urllib.request import urlopen, Request
import urllib.parse
from json import dumps

'''
    Class to manage the comunications with Carriots.com
    for Data Streams , in this version only sending information
    you must provide : CLIENTE_TYPE 'json' , APIKEY 'the code that carriots provides you'
    you must pass the data on a Python Dictionary to the 'send' function.
    
    [HOW TO USE]
     
1-    carriots_STREAM = carriots.Client(CARRIOTS_CLIENTE_TYPE, CARRIOTS_APIKEY)
    
2-    carriots_data = {
       "protocol": "v2",
        "checksum": "",
        "at": timestamp,
        "device": CARRIOTS_DEVICE,
        "data": {
            "TEMPERATURE": XXXX,
            "TEMPERATURE_2": XXXX,
            "PRESSURE": XXXX,
            "PRESSURE_SEA_LEVEL": XXXX,
            "HUMIDITY": XXXX,
            "LDR": XXXX,
            "ALTITUDE": XXXX
            }
        }
    
3-     carriots_STREAM.send(carriots_data)
'''

class Client (object):
    api_url = "http://api.carriots.com/streams/"

    def __init__(self,CLIENTE_TYPE , APIKEY):

        # initialization of the object , mounting the header of the request.
        self.client_type = CLIENTE_TYPE
        self.api_key = APIKEY
        self.content_type = "application/vnd.carriots.api.v2+%s" % self.client_type
        self.headers = {"User-Agent": "Raspberry-Carriots",
                        "Content-Type": self.content_type,
                        "Accept": self.content_type,
                        "carriots.apikey": self.api_key}
        self.data = None
        self.response = None

    def send(self, data):
        self.data = dumps(data).encode('ascii')  # prepare POST data
        request = Request(Client.api_url, self.data, self.headers)  # mounting the request
        try:
            self.response = urlopen(request)  # make the request and wait for the ....
            return self.response.read().decode('utf-8')  # response (OK)
        except urllib.error.HTTPError as e:
            return "http error: ", e.reason  # response (KO)


