#!/usr/bin/python3

from time import mktime
from datetime import datetime


def now():
    return mktime(datetime.utcnow())


def now_tuple():
    return int(mktime(datetime.utcnow().timetuple()))
