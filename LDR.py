#!/usr/bin/python3


import RPi.GPIO as GPIO, time

class LDR(object):
    def __init__(self, pin=None):
        self.pin = pin
        self.reading = 0
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(self.pin, GPIO.OUT)
        GPIO.output(self.pin, GPIO.LOW)
        time.sleep(0.1)
        GPIO.setup(self.pin, GPIO.IN)

    def get_light(self):
        while (GPIO.input(RCpin) == GPIO.LOW):
            self.reading += 1
        return self.reading

