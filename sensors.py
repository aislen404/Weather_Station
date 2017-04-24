#!/usr/bin/python3

import DTH11
import LDR
import CAM
import BMP085
import carriots
import mongo
import utils
from time import sleep


# where we put the images?
PICTURE_LOCATION = "/home/pi/Desktop/Weather_Station/"

# Deal with pins like BCM
PIN_DHT11 = 18  # DHT pin - real
PIN_LDR = 17  # LDR pin - real
PIN_BPM085 = ["SDA", "SCL"]  # BMP085 pins - only for listing purpose
CYCLE = 10  # seconds for reading
CYCLE_REPORT = 360  # seconds for uploads

# Now reporting - make the data persistent !!!
CARRIOTS_APIKEY = ""
CARRIOTS_DEVICE = ""
CARRIOTS_CLIENTE_TYPE = "json"

MONGODB_SERVER = ""
MONGODB_PORT = ""
MONGO_DB = ""

# GPIO SENSORS - Make the magic !!!
sensor_DTH = DTH11.DTH11(PIN_DHT11)
sensor_LDR = LDR.LDR(PIN_LDR)
sensor_CAM = CAM.CAM()

# REPORTING - began to begin
carriots_STREAM = carriots.Client(CARRIOTS_CLIENTE_TYPE, CARRIOTS_DEVICE, CARRIOTS_APIKEY)
mongoDB_REPORT = mongo.MONGO(MONGODB_SERVER, MONGODB_PORT, MONGO_DB)

try:
    while True:
        # Here we go !!
        timestamp = utils.now_tuple()

        carriots_data = {
            "at": timestamp,
            "data": {
                "TEMPERATURE": sensor_DTH.get_temperature(),
                "HUMIDITY": sensor_DTH.get_humidity(),
                "LDR": sensor_LDR.get_light()}
            }

        print (utils.now())

        print carriots_data

        print(carriots_STREAM.send(carriots_data))  # Post to CARRIOTS data stream

        mongoDB_REPORT.insert(CARRIOTS_DEVICE, carriots_data)  # Insert on to MongoDB

        # Take the picture
        new_picture_location = PICTURE_LOCATION + timestamp + ".jpg"
        sensor_CAM.get_picture(new_picture_location)

        sleep(CYCLE)  # Now Wait till next data adquisition cycle

except KeyboardInterrupt:
    print ("finito")
