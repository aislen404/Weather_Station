#!/usr/bin/python3

from urllib.request import urlopen, Request
import urllib.parse
from json import dumps

class Client (object):
    api_url = "http://api.carriots.com/streams/"

    def __init__(self,CLIENTE_TYPE , APIKEY):
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
        # prepare POST data
        self.data = dumps(data).encode('ascii')
        request = Request(Client.api_url, self.data, self.headers)
        try:
            self.response = urlopen(request)
            return self.response.read().decode('utf-8')
        except urllib.error.HTTPError as e:
            return "http error: ", e.reason


