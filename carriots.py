#!/usr/bin/python3

from urllib.request import urlopen, Request
from json import dumps

class Client (object):
    api_url = "http://api.carriots.com/streams"

    def __init__(self,CLIENTE_TYPE , APIKEY):
        self.client_type = CLIENTE_TYPE
        self.api_key = APIKEY
        self.content_type = "application/vnd.carriots.api.v2+%s" % self.client_type
        self.headers = {"User-Agent": "Raspberry-Carriots",
                        "Content-Type": self.content_type,
                        "Accept": self.content_type,
                        "Carriots.apikey": self.api_key}
        self.data = None
        self.response = None

    def send(self, data):
        print(data)
        self.data = data
        mierda = {
    "protocol": "v2",
    "checksum": "",
    "device": "jrdvll_e_w_1@aislen404.aislen404",
    "at": "now",
    "data": {
        "LDR": 4,
        "TEMPERATURE": 22,
        "HUMIDITY": 35
    }
}
        request = Request(Client.api_url, dumps(mierda), self.headers)
        self.response = urlopen(request)
        return self.response

