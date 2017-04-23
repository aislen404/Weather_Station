#!/usr/bin/python3

#more simplistic way
from gpiozero import LightSensor

class LDR(object):
    def __init__(self, pin=None):
        self.ldr = LightSensor(pin)
    def get_light(self):
        return self.ldr.value

