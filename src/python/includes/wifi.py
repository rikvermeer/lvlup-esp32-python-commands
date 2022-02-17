def connect(SSID, PSK, reconnects=5):
    import network
    from time import sleep
    sta_if = network.WLAN(network.STA_IF)
    sta_if.active(True)
    sta_if.config(reconnects=reconnects)
    if not sta_if.isconnected():
        #print("Connecting to network", sta_if.status())
        sta_if.connect(SSID, PSK)
        while not sta_if.isconnected():
            sleep(0.1)
    return sta_if.ifconfig()

def disconnect():
    import network
    from time import sleep
    sta_if = network.WLAN(network.STA_IF)
    sta_if.active(True)
    sta_if.disconnect()
    while sta_if.isconnected():
        sleep(0.1)
    return sta_if.ifconfig()