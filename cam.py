#!/usr/bin/python3

import time
import picamera

class cam(object):
    def __init__(self):
        with picamera.PiCamera() as self.camera:
            self.camera.start_preview()
            time.sleep(0)
            self.camera.stop_preview()
    #getter for pictures
    def get_picture(self, location):
        self.camera.capture(location)