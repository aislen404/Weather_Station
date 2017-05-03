#!/usr/bin/python3

import Adafruit_DHT

# Class for DTH11 , based on the module of adaFruit
# This Sensor provides : Temperature and humidity

class DTH11(object):
    def __init__(self, pin=None):
        self.sensor = Adafruit_DHT.DHT11
        self.pin = pin
        self.humidity, self.temperature = Adafruit_DHT.read_retry(self.sensor, self.pin)

    def get_temperature(self):
        self.humidity, self.temperature = Adafruit_DHT.read_retry(self.sensor, self.pin)
        return self.temperature

    def get_humidity(self):
        self.humidity, self.temperature = Adafruit_DHT.read_retry(self.sensor, self.pin)
        return self.humidity
