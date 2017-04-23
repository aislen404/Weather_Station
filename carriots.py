#-*-coding:utf8-*-
"""
    Carriots.com
    Created 11 Jan 2013
    This sketch sends streams to Carriots according to the values read by a LDR sensor


    device = "YOUR DEVICE's ID_DEVELOPER HERE"  # Replace with the id_developer of your device
    apikey = "YOUR APIKEY HERE"  # Replace with your Carriots apikey
    
    client_carriots = Client(apikey)
    
    data = {"protocol": "v2", "device": device, "at": timestamp, "data": WHATEVER YOU NEED}
    
    client_carriots.send(data)
"""

from urllib2 import urlopen, Request
from json import dumps

class Client (object):
    api_url = "http://api.carriots.com/streams"

    def __init__(self, api_key=None, client_type='json'):
        self.client_type = client_type
        self.api_key = api_key
        self.content_type = "application/vnd.carriots.api.v2+%s" % self.client_type
        self.headers = {'User-Agent': 'Raspberry-Carriots',
                        'Content-Type': self.content_type,
                        'Accept': self.content_type,
                        'Carriots.apikey': self.api_key}
        self.data = None
        self.response = None

    def send(self, data):
        self.data = dumps(data)
        request = Request(Client.api_url, self.data, self.headers)
        self.response = urlopen(request)
        return self.response