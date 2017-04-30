#!/usr/bin/python3

import Adafruit_BMP.BMP085 as BMP085


class BMP085_S(object):
    def __init__(self):
        self.sensor = BMP085.BMP085()

    def get_temperature(self):
        return self.sensor.read_temperature()

    def get_pressure(self):
        return self.sensor.read_pressure()

    def get_altitude(self):
        return self.sensor.read_altitude()

    def get_sealevel(self):
        return self.sensor.read_sealevel_pressure()
