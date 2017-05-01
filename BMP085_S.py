#!/usr/bin/python3

import Adafruit_BMP.BMP085 as BMP085


# Class for BMP085_Sensor , based on the module of adaFruit
# This Sensor provides : Temperature , Pressure , Pressure at Sea Level and Altitude

class BMP085_S(object):
    def __init__(self):
        self.sensor = BMP085.BMP085()

    # getter for Temperature
    def get_temperature(self):
        return self.sensor.read_temperature()

    # getter for Pressure
    def get_pressure(self):
        return self.sensor.read_pressure()

    # getter for Altitude
    def get_altitude(self):
        return self.sensor.read_altitude()

    # getter for Pressure at Sea Level
    def get_sealevel(self):
        return self.sensor.read_sealevel_pressure()
