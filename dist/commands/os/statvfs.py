#! @include remote
from json import dumps
from os import statvfs

@print_as_json
def statvfs(dir='/'):
    (bsize, frsize, blocks, bfree, bavail, files, ffree, favail, flag, namemax) = statvfs(dir)
    return {'bsize': bsize, 'frsize': frsize, 'blocks': blocks, 'bfree': bfree,
            'bavail': bavail,'files': files, 'ffree': ffree, 'favail':favail, 'flag':flag, 'namemax': namemax}


dir=#! @param dir
statvfs(dir)
