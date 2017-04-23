#!/usr/bin/python3

import time
import picamera

class cam(object):
    def __init__(self):
        self.camera = picamera.PiCamera() 
    #getter for pictures
    def get_picture(self, location):
        self.camera.capture(location)
