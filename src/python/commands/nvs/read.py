#! @include remote
#! @include nvs

@print_as_json
def cmd(key):
    return read(key)

key=#! @param key
cmd(key)
