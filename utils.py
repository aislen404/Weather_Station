#!/usr/bin/python3

from time import mktime
from datetime import datetime

'''
Auxiliar library for usefull functions
'''

def now():
    return mktime(datetime.utcnow())
