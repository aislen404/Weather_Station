#!/usr/bin/python3


import RPi.GPIO as GPIO, time

class LDR(object):
    def __init__(self, pin=None):
        self.pin = pin
    def get_light(self):
        self.reading = 0
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(self.pin, GPIO.OUT)
        GPIO.output(self.pin, GPIO.LOW)
        time.sleep(0.1)
        GPIO.setup(self.pin, GPIO.IN)
        while (GPIO.input(self.pin) == GPIO.LOW):
            self.reading += 1
        return self.reading

