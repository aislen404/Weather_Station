#!/usr/bin/python3

from urllib.request import urlopen, Request
import urllib.parse 
from json import dumps

url = 'http://api.carriots.com/streams/'
headers = {'carriots.apikey': '9f360db18ea03993415f0ff8e77c42c89b1b7d2656fc75cfa504a9db7b86d84e'
           }
params = {
    "protocol": "v1",
    "at": "now",
    "device": "jrdvll_e_w_1@aislen404.aislen404",
    "data": {
        "temp": 51,
        "hum": 100
    },
    "checksum": ""
}
# prepare POST data
data = dumps(params).encode('ascii')
req = urllib.request.Request(url, data, headers=headers)

try:
    response = urllib.request.urlopen(req)
    print(response.read().decode('utf-8'))
except urllib.error.HTTPError as e:
    print("http error: ", e.reason)
