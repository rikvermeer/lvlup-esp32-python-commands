#! @include remote

param=#! @param param

@print_as_json
def cmd():
    import network
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if param is None:
        return wlan.status()
    else:
        return wlan.status(param)

cmd()