#! @include remote
from machine import unique_id as machine_id
from binascii import hexlify

@print_as_json
def unique_id():
    return {'id': hexlify(machine_id())}

unique_id()
