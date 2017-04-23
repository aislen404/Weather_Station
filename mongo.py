#!/usr/bin/python3

from pymongo import MongoClient


class MONGO(object):
    def __init__(self,SERVER,PORT):
        # creating connectioons for communicating with Mongo DB
        self._server = SERVER
        self._port = PORT
        self.client = MongoClient(self._server, self._port)

    # Function to insert data into mongo db
    def insert(self, collection):
        db = self.client[collection]
        try:
            db.insert_one({})
            print '\nInserted data successfully\n'

        except Exception, e:
            print str(e)