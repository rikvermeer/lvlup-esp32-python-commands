#! @include wifi
#! @include remote

ssid=#! @param ssid
psk=#! @param psk

disconnect()
print_as_json(connect)(ssid, psk)
