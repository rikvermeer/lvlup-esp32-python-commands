#! @include remote

@print_as_json
def cmd():
    import network
    from binascii import hexlify
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    return [{
      'ssid': ssid,
      'bssid': hexlify(bssid),
      'channel': channel,
      'RSSI': RSSI,
      'authmode': authmode,
      'hidden': hidden
    } for ssid, bssid, channel, RSSI, authmode, hidden in wlan.scan()]

cmd()