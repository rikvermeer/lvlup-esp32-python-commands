#! @include remote

@print_as_json
def cmd():
    import network
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    ip, gateway, subnet, dns =  wlan.ifconfig()
    return {'ip': ip, 'gateway': gateway, 'subnet': subnet, 'dns': dns}

cmd()