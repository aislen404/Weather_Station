#!/usr/bin/python3


import picamera

# Class for RPI Camera, So basic
# This class  make an instance of the CAMERA
# Take snapshots and put it in the selected location


class CAM(object):

    def __init__(self):
        self.camera = picamera.PiCamera()

    # Capture a Picture and Put in Location
    def get_picture(self, location):
        self.camera.capture(location)
