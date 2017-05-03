#!/usr/bin/python3


from gpiozero import LightSensor
import RPi.GPIO as GPIO
import time

# Class for LDR data management
# Method 1 - get_light : difference of timing charging and discharging a capacitor of 1 microfaradio
# Method 2 - get_light_old : directly the value of the resistance it become from 0.000000000 to 1.000000000

class LDR(object):
    def __init__(self, pin=None):
        self.ldr = LightSensor(pin)
        self.pin = pin

    def get_light(self):
        count = 0

        # Output on the pin for
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(self.pin, GPIO.OUT)
        GPIO.output(self.pin, GPIO.LOW)
        time.sleep(1)

        # Change the pin back to input
        GPIO.setup(self.pin, GPIO.IN)

        # Count until the pin goes high
        while GPIO.input(self.pin) == GPIO.LOW:
            count += 1

        return count

    def get_light_old(self):
        return self.ldr.value

