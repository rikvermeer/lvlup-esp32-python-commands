#! @include remote
from os import uname

@print_as_json
def uname():
    return uname()

uname()
