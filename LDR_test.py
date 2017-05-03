#!/usr/bin/python3


from gpiozero import LightSensor
import RPi.GPIO as GPIO
from time import sleep

# Class for LDR data management
# Method 1 - get_light : difference of timing charging and discharging a capacitor of 1 microfaradio
# Method 2 - get_light_old : directly the value of the resistance it become from 0.000000000 to 1.000000000

while True:
    count = 0
    # Output on the pin for
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(17, GPIO.OUT)
    GPIO.output(17, GPIO.LOW)
    sleep(1)
    # Change the pin back to input
    GPIO.setup(17, GPIO.IN)
    # Count until the pin goes high
    while GPIO.input(17) == GPIO.LOW:
        count += 1
    print(count)

    

