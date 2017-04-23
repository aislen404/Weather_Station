#!/usr/bin/python3


from gpiozero import LightSensor
import RPi.GPIO as GPIO
import time


class LDR(object):
    def __init__(self, pin=None):
        self.ldr = LightSensor(pin)
        self.pin = pin

    def get_light(self):
        count = 0

        # Output on the pin for
        GPIO.setup(self.pin, GPIO.OUT)
        GPIO.output(self.pin, GPIO.LOW)
        time.sleep(0.1)

        # Change the pin back to input
        GPIO.setup(self.pin, GPIO.IN)

        # Count until the pin goes high
        while GPIO.input(self.pin) == GPIO.LOW:
            count += 1

        return count

    def get_light_old(self):
        return self.ldr.value

