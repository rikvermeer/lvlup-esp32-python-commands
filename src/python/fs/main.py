from config import config
from wifi import connect

connected = False
try:
    connect(config['wifiSSID'], config['wifiPSK'])
    connected = True
except Exception as e:
    print("Could not connect to WiFi", e)
