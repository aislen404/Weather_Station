#!/usr/bin/python3

import time
import picamera


class cam(object):
    def __init__(self):
        with picamera.PiCamera() as camera:
            camera.start_preview()
            time.sleep(0)
            camera.stop_preview()

    def get_picture(self, location):
        self.camera.capture(location)
