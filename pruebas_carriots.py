#!/usr/bin/python3

from urllib.request import urlopen, Request
from json import dumps


api_url = "http://api.carriots.com/streams"
api_key = "27521767967e8732cfeda31297c32bdc684f843ae141a14b85efed20bbe63234"
device = "jrdvll_e_w_1@aislen404.aislen404"
client_type = "json"
content_type = "application/vnd.carriots.api.v2+%s" % client_type
headers = {"User-Agent": "Raspberry-Carriots",
           "Content-Type": content_type,
           "Accept": content_type,
           "Carriots.apikey": api_key}
test_p = {
            "protocol": "v2",
            "device": device,
            "at": "now",
            "data": {
                "TEMPERATURE": 30,
                "HUMIDITY": 40,
                "LDR": 50}
            }

def send(data):
    data = dumps(data)
    request = Request(Client.api_url, data, headers)
    response = urlopen(request)
    return response

print (send(test_p))