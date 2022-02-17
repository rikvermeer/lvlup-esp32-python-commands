# This file is executed on every boot (including wake-boot from deepsleep)
import esp
esp.osdebug(0)

import webrepl
webrepl.start()

import sys
sys.path.extend(['/main', '/main/lib'])

import gc
gc.collect()
