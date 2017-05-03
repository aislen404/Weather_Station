#!/usr/bin/python3

import DTH11
import LDR
import CAM
import BMP085_S
import carriots
import mongo
import utils
from time import sleep

# TODO: better error & exceptions control

# SNAPSHOTS LOCATION
PICTURE_LOCATION = "/home/pi/Desktop/Weather_Station/"

#PARAMETERS FOR GPIO
# Deal with pins like BCM
PIN_DHT11 = 18  # DHT pin - real
PIN_LDR = 17  # LDR pin - real
PIN_BPM085 = ["SDA", "SCL"]  # BMP085 pins - only for listing purpose
CYCLE = 5  # seconds for reading
CYCLE_REPORT = 200  # seconds for uploads , max 500 streams per day

# PARAMETERS FOR REPORTING
CARRIOTS_APIKEY = "9f360db18ea03993415f0ff8e77c42c89b1b7d2656fc75cfa504a9db7b86d84e"
CARRIOTS_DEVICE = "jrdvll_e_w_1@aislen404.aislen404"
CARRIOTS_CLIENTE_TYPE = "json"

MONGODB_SERVER = "localhost"
MONGODB_PORT = 27017
MONGO_DB = "weather_rpi"
MONGO_COLLECTION = "jrdvll_e_w_1"

# GPIO SENSORS
sensor_DTH = DTH11.DTH11(PIN_DHT11)
sensor_LDR = LDR.LDR(PIN_LDR)
# sensor_CAM = CAM.CAM()
sensor_BMP = BMP085_S.BMP085_S()

# REPORTING
carriots_STREAM = carriots.Client(CARRIOTS_CLIENTE_TYPE, CARRIOTS_APIKEY) # TO Carriots
mongoDB_REPORT = mongo.MONGO(MONGODB_SERVER, MONGODB_PORT, MONGO_DB) # TO MongoDB

try:
    while True:
        print("Another messureament")
        # getting the TIMESTAMP
        timestamp = utils.now_tuple()

        # Carriots DATA DYCT for DATA STREAM
        carriots_data = {
            "protocol": "v2",
            "checksum": "",
            "at": timestamp,
            "device": CARRIOTS_DEVICE,
            "data": {
                "TEMPERATURE": sensor_DTH.get_temperature(),
                "TEMPERATURE_2": sensor_BMP.get_temperature(),
                "PRESSURE": sensor_BMP.get_pressure(),
                "PRESSURE_SEA_LEVEL": sensor_BMP.get_sealevel(),
                "HUMIDITY": sensor_DTH.get_humidity(),
                "LDR": sensor_LDR.get_light_old(),
                "ALTITUDE": sensor_BMP.get_altitude()
                }
            }

        # MongoDB DATA DYCT for INSERT
        mongo_data = {
            "at": timestamp,
            "device": CARRIOTS_DEVICE,
            "TEMPERATURE": sensor_DTH.get_temperature(),
            "TEMPERATURE_2": sensor_BMP.get_temperature(),
            "PRESSURE": sensor_BMP.get_pressure(),
            "PRESSURE_SEA_LEVEL": sensor_BMP.get_sealevel(),
            "HUMIDITY": sensor_DTH.get_humidity(),
            "LDR": sensor_LDR.get_light_old(),
            "ALTITUDE": sensor_BMP.get_altitude()
            }

        print(mongo_data) # TODO: Delete this line

        # CARRIOTS.COM
        print(carriots_STREAM.send(carriots_data))  # Post to CARRIOTS data stream

        # MONGODB
        print(mongoDB_REPORT.insert(MONGO_COLLECTION, mongo_data))  # Insert on to MongoDB

        # PICTURES
        # new_picture_location = PICTURE_LOCATION + str(timestamp) + ".jpg"  # new file with the timeStamp
        # sensor_CAM.get_picture(new_picture_location)  # Take the picture

        # Now WAIT till next data adquisition cycle
        sleep(CYCLE_REPORT)

except KeyboardInterrupt:
    print ("¡¡¡ That All Folks !!!")
