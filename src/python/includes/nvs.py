from esp32 import NVS

nvs = NVS('lvlup')

def read(key):
    ba = bytearray(64)
    nr = nvs.get_blob(key, ba)
    value = ba[:nr].decode()
    return value

def write(key, value):
    nvs.set_blob(key, value)
    nvs.commit()

def delete(key):
    nvs.erase_key(key)





write('wifi_ssid', 'hotpocket')
write('wifi_psk', 'k33pitc00l')


read('wifi_ssid')
read('wifi_psk')