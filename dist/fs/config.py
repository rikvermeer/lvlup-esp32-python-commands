import json
import machine
from binascii import hexlify

DEFAULT_CONFIG_FILE = '/config.json'

def load_from(filename):
    with open(filename, 'r') as f:
        content = f.read()
    return content

def save_as(filename, content):
    with open(filename, 'w') as f:
        f.write(content)

def load_json_from(filename):
    return json.loads(load_from(filename))

def save_json_to(filename, content):
    return save_as(filename, json.dumps(content))

# default config, always there
config = {
    "unique_id": hexlify(machine.unique_id()),
    "server": "c4c.lvl-up.dev",
    "wifiSSID": None,
    "wifiPSK": None
}

try:
    default_config = load_json_from(DEFAULT_CONFIG_FILE)
    #print('Default config on filesystem', default_config)
    config.update(default_config)
except:
    save_json_to(DEFAULT_CONFIG_FILE, config);
    #print("No default config file found")
