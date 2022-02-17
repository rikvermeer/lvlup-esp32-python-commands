#! @include remote

@print_as_json
def cmd():
    import network
    from binascii import hexlify
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    mac = hexlify(wlan.config('mac'))
    essid = wlan.config('essid')
    dhcp_hostname = wlan.config('dhcp_hostname')
    return {'mac': mac, 'ssid': essid, 'hostname': dhcp_hostname}

cmd()