#! @include remote
from os import stat as _stat

@print_as_json
def stat(filepath='/'):
    (type, ino, dev, nlink, uid, guid, size, atime, mtime, ctime) = _stat(filepath)
    return {'type':type, 'ino':ino, 'dev':dev, 'nlink':nlink, 'uid':uid, 'guid':guid, 'size':size, 'atime':atime, 'mtime':mtime, 'ctime':ctime}

filepath=#! @param dir
stat(filepath)
