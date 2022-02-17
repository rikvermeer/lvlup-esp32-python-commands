def read_file(path, binary=False):
    mode = 'rb' if binary else 'rt'
    with open(path, mode) as f:
        try:
            return f.read()
        except Exception as e:
            return e

def read_file_part(path, offset=0, length=None, binary=False):
    mode = 'rb' if binary else 'rt'
    from os import stat
    if offset != 0 and length is None:
        length = stat(path)[6] - offset

    with open(path, mode) as f:
        try:
            if offset != 0:
                f.seek(offset)

            if length != 0:
                return f.read(length)
            else:
                return f.read()
        except Exception as e:
            return e


def i_read_file(path, chunk_size=4096, binary=False):
    from os import stat
    full_length = stat(path)[6]
    chunks = full_length // chunk_size
    remainder = full_length % chunk_size
    offset = 0
    for i in range(0, chunks):
        yield read_file_part(path, offset, chunk_size, binary)
        offset += chunk_size
    yield read_file_part(path, offset, remainder, binary)


def exists(path):
    from os import stat
    try:
        stat(path)
        return True
    except:
        return False

def is_dir(path):
    from os import stat
    try:
        if stat(path)[0] == 16384:#dir
            return True
        else:
            return False
    except:
        return False

def mk_dir(path):
    from os import stat, rmdir, mkdir
    curDir = ''
    for b in [a for a in path.split('/')[1:] if a is not '']:
        curDir += '/' + b
        try:
            if stat(curDir)[0] == 0x4000:  # dir
                break
            else:
                rmdir(curDir)
        except:
            pass
        mkdir(curDir)

def rm_dir(path):
    from os import ilistdir, rmdir, remove
    for entry in ilistdir(path):
        is_dir = entry[1] == 0x4000
        if is_dir:
            rm_dir(path + '/' + entry[0])
        else:
            remove(path + '/' + entry[0])
    rmdir(path)

def rm(path):
    from os import remove
    if is_dir(path):
        rm_dir(path)
    else:
        remove(path)

def write_file(path, buffer, append=False, binary=False):
    mode = 'a' if append else 'w'
    mode = mode + 'b' if binary else mode + 't'

    with open(path, mode) as f:
        return f.write(buffer)

def stat_to_dict(*kwargs):
    (type, ino, dev, nlink, uid, guid, size, atime, mtime, ctime) = kwargs
    return {'type': type, 'ino': ino, 'dev': dev, 'nlink': nlink, 'uid': uid, 'guid': guid, 'size': size,
            'atime': atime, 'mtime': mtime, 'ctime': ctime}

def ilistdir(path='/', recurse=False):
    import os

    split_path = list(filter(lambda f: f is not None and f != '', path.split('/')))
    if len(split_path) == 0:
        #root
        yield None, '/', stat_to_dict(*os.stat(path))
    #elif len(split_path) == 1:
    #    yield '/', split_path[0], stat_to_dict(*os.stat(path))
    else:
        yield '/' + '/'.join(split_path[:-1]), split_path[-1], stat_to_dict(*os.stat(path))

    for name, type, *_ in os.ilistdir(path):
        if not recurse or type != 0o40000:
            yield path, name, stat_to_dict(*os.stat(path + '/' + name))
        else:
            fname = (path + name) if path.endswith('/') else path + '/' + name
            for stat in ilistdir(fname, recurse):
                yield stat