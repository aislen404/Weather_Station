#!/usr/bin/python3

import time
import picamera


class CAM(object):
    def __init__(self):
        self.camera = picamera.PiCamera()

    def get_picture(self, location):
        self.camera.capture(location)
