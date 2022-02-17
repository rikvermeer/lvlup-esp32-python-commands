#! @include remote
#! @include nvs

@print_as_json
def cmd(key, value):
    return write(key, value)

key=#! @param key
value=#! @param value
cmd(key, value)