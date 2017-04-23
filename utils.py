#!/usr/bin/python3

from time import mktime
from datetime import datetime


def now():
    return int(mktime(datetime.utcnow().timetuple()))
