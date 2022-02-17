#! @include remote
#! @include files

from json import dumps
from os import ilistdir

@print_as_json
def cmd(path):
    try:
        return {'file': {'path': path, 'content': read_file(path)}}
    except Exception as e:
        raise e


path=#! @param path
cmd(path)
