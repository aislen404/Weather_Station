#!/usr/bin/python3

import DTH11
import LDR
import CAM
import BMP085
import utils
from time import sleep


#where we put the images?
PICTURE_LOCATION = "/home/pi/Desktop/Weather_Station/"

# Deal with pins like BCM
PIN_DHT11 = 18  # DHT pin - real
PIN_LDR = 17  # LDR pin - real
PIN_BPM085 = ["SDA", "SCL"]  # BMP085 pins - only for listing purpose
CYCLE = 10  # seconds for reading
CYCLE_REPORT = 360  # seconds for uploads

sensor_DTH = DTH11.DTH11(PIN_DHT11)
sensor_LDR = LDR.LDR(PIN_LDR)
sensor_CAM = CAM.CAM()

try:
    while True:
        # Here we go !!
        timestamp = utils.now_tuple()
        print (utils.now())
        print (sensor_DTH.get_temperature())
        print (sensor_DTH.get_humidity())
        print (sensor_LDR.get_light)
        new_picture_location = PICTURE_LOCATION + timestamp + ".jpg"
        sensor_CAM.get_picture(new_picture_location)
        sleep(CYCLE)

except KeyboardInterrupt:
    print ("finito")
