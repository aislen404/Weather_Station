#!/usr/bin/python3

from pymongo import MongoClient

'''
Class to manage the comunications with MONGODB 
    for Data Streams , in this version only inserts information
    you must provide : SERVER , PORT , DB 
    you must pass the data on a Python Dictionary to the 'insert' function.

    [HOW TO USE]
    
1-    mongoDB_REPORT = mongo.MONGO(MONGODB_SERVER, MONGODB_PORT, MONGO_DB)

2-         mongo_data = {
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

3- mongoDB_REPORT.insert(MONGO_COLLECTION, mongo_data)            

'''

# TODO : user/rol management in the connection

class MONGO(object):
    def __init__(self,SERVER,PORT,DB):
        # creating connectioons for communicating with Mongo DB
        self._server = SERVER
        self._port = PORT
        self.client = MongoClient(self._server, self._port)
        self.db = self.client[DB]

    # Function to insert data into Mongo db
    def insert(self, collection, data):
        coleccion = self.db[collection]
        try:
            coleccion.insert_one(data)
            print ("Inserted data successfully")
            self.client.close()
        except:
            print ("Hey Oh !! Something was WRONG !!! ")
