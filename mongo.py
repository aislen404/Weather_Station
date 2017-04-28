#!/usr/bin/python3

from pymongo import MongoClient


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
            print ("FALLO EN MONGODB")
