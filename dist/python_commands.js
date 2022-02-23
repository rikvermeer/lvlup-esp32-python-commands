


// Source src/python/commands/machine/unique_id.py
// Include: remote

const machine_unique_id = () => {
    return `
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response

from machine import unique_id as machine_id
from binascii import hexlify

@print_as_json
def unique_id():
    return {'id': hexlify(machine_id())}

unique_id()
`
}

export {machine_unique_id}


// Source src/python/commands/nvs/delete.py


const nvs_delete = () => {
    return `

`
}

export {nvs_delete}

// Source src/python/commands/nvs/read.py
// Include: remote
// Include: nvs

const nvs_read = (key) => {
    return `
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response
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




@print_as_json
def cmd(key):
    return read(key)

key=${key ? JSON.stringify(key) : "None"}
cmd(key)
`
}

export {nvs_read}

// Source src/python/commands/nvs/write.py
// Include: remote
// Include: nvs

const nvs_write = (key,value) => {
    return `
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response
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




@print_as_json
def cmd(key, value):
    return write(key, value)

key=${key ? JSON.stringify(key) : "None"}
value=${value ? JSON.stringify(value) : "None"}
cmd(key, value)`
}

export {nvs_write}


// Source src/python/commands/os/append_file.py
// Include: remote
// Include: files

const os_append_file = (path,content) => {
    return `
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response
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



@print_as_json
def cmd(path, content):
    return write_file(path, content, True)


path=${path ? JSON.stringify(path) : "None"}
content=${content ? JSON.stringify(content) : "None"}
cmd(path, content)
`
}

export {os_append_file}

// Source src/python/commands/os/delete.py
// Include: remote
// Include: files

const os_delete = (path) => {
    return `
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response
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



@print_as_json
def cmd(path):
    return rm(path)


path=${path ? JSON.stringify(path) : "None"}
cmd(path)
`
}

export {os_delete}

// Source src/python/commands/os/ilistdir.py
// Include: remote
// Include: files

const os_ilistdir = (path) => {
    return `
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response
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



@return_as_iterator
def cmd(path='/', recurse=True):
    return ilistdir(path, recurse)

path=${path ? JSON.stringify(path) : "None"}
cmd(path)
`
}

export {os_ilistdir}

// Source src/python/commands/os/iread_file.py
// Include: remote
// Include: files

const os_iread_file = (path) => {
    return `
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response
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



@return_as_iterator
def cmd(path):
    return i_read_file(path)

path=${path ? JSON.stringify(path) : "None"}
cmd(path)
`
}

export {os_iread_file}

// Source src/python/commands/os/iterator_next.py


const os_iterator_next = (iterId) => {
    return `

iter_id=${iterId ? JSON.stringify(iterId) : "None"}
print_iterator(iter_id)
`
}

export {os_iterator_next}

// Source src/python/commands/os/listdir.py
// Include: remote
// Include: files

const os_listdir = (path) => {
    return `
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response
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



@print_as_json
def cmd(path='/', recurse=True):
    return list(ilistdir(path, recurse))

path=${path ? JSON.stringify(path) : "None"}
cmd(path)
`
}

export {os_listdir}

// Source src/python/commands/os/ls.py
// Include: remote

const os_ls = (dir) => {
    return `
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response

from os import ilistdir

@print_as_json
def ls(dir='/'):
    return {'files': [{'name': name, 'type': type, 'inode': inode, 'size': size} for name, type, inode, size in ilistdir(dir)]}

class FileOrDir:
    TYPES = {
        0o40000: 'dir',
        0o100000: 'file'
    }
    files = None
    def __init__(self, name, type=None, inode=None, size=None, ):
        self.name = name
        self.type = type
        self.s_type = self.TYPES[type]
        self.inode = inode
        self.size = size
    def __lt__(self, other):
        if self.type == other.type:
            return self.name < other.name
        else:
            return self.type < other.type
    def __repr__(self):
        return (self.name, self.s_type, self.inode, self.size, self.files) if self.s_type == 'dir' else (self.name, self.s_type, self.inode, self.size)

def _ls2(dir='/', recurse=False):
    from os import ilistdir
    if recurse:
        tree = []
        for name, type, inode, size in ilistdir(dir):
            file_or_dir = FileOrDir(name, type, inode, size)
            if file_or_dir.s_type == 'dir':
                file_or_dir.files = _ls2(dir + '/' + name, recurse)
            tree.append(file_or_dir)
        return sorted(tree)
    else:
        return sorted([FileOrDir(name, type, inode, size) for name, type, inode, size in ilistdir(dir)])

@print_as_json
def ls2(dir='/', recurse=False):
    return _ls2(dir, recurse)

dir=${dir ? JSON.stringify(dir) : "None"}
ls(dir)
`
}

export {os_ls}

// Source src/python/commands/os/read_file.py
// Include: remote
// Include: files

const os_read_file = (path) => {
    return `
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response
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



from json import dumps
from os import ilistdir

@print_as_json
def cmd(path):
    try:
        return {'file': {'path': path, 'content': read_file(path)}}
    except Exception as e:
        raise e


path=${path ? JSON.stringify(path) : "None"}
cmd(path)
`
}

export {os_read_file}

// Source src/python/commands/os/stat.py
// Include: remote

const os_stat = (dir) => {
    return `
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response

from os import stat as _stat

@print_as_json
def stat(filepath='/'):
    (type, ino, dev, nlink, uid, guid, size, atime, mtime, ctime) = _stat(filepath)
    return {'type':type, 'ino':ino, 'dev':dev, 'nlink':nlink, 'uid':uid, 'guid':guid, 'size':size, 'atime':atime, 'mtime':mtime, 'ctime':ctime}

filepath=${dir ? JSON.stringify(dir) : "None"}
stat(filepath)
`
}

export {os_stat}

// Source src/python/commands/os/statvfs.py
// Include: remote

const os_statvfs = (dir) => {
    return `
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response

from json import dumps
from os import statvfs

@print_as_json
def statvfs(dir='/'):
    (bsize, frsize, blocks, bfree, bavail, files, ffree, favail, flag, namemax) = statvfs(dir)
    return {'bsize': bsize, 'frsize': frsize, 'blocks': blocks, 'bfree': bfree,
            'bavail': bavail,'files': files, 'ffree': ffree, 'favail':favail, 'flag':flag, 'namemax': namemax}


dir=${dir ? JSON.stringify(dir) : "None"}
statvfs(dir)
`
}

export {os_statvfs}

// Source src/python/commands/os/uname.py
// Include: remote

const os_uname = () => {
    return `
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response

from os import uname

@print_as_json
def uname():
    return uname()

uname()
`
}

export {os_uname}

// Source src/python/commands/os/write_file.py
// Include: remote
// Include: files

const os_write_file = (path,content) => {
    return `
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response
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



@print_as_json
def cmd(path, content):
    return write_file(path, content)


path=${path ? JSON.stringify(path) : "None"}
content=${content ? JSON.stringify(content) : "None"}
cmd(path, content)
`
}

export {os_write_file}


// Source src/python/commands/wifi/disconnect.py
// Include: wifi
// Include: remote

const wifi_disconnect = () => {
    return `
def connect(SSID, PSK, reconnects=5):
    import network
    from time import sleep
    sta_if = network.WLAN(network.STA_IF)
    sta_if.active(True)
    sta_if.config(reconnects=reconnects)
    if not sta_if.isconnected():
        #print("Connecting to network", sta_if.status())
        sta_if.connect(SSID, PSK)
        while not sta_if.isconnected():
            sleep(0.1)
    return sta_if.ifconfig()

def disconnect():
    import network
    from time import sleep
    sta_if = network.WLAN(network.STA_IF)
    sta_if.active(True)
    sta_if.disconnect()
    while sta_if.isconnected():
        sleep(0.1)
    return sta_if.ifconfig()
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response



print_as_json(disconnect)()`
}

export {wifi_disconnect}

// Source src/python/commands/wifi/dns_check.py
// Include: remote
// Include: inetutils2

const wifi_dns_check = (dns) => {
    return `
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response


import socket
import uasyncio as asyncio
from micropython import const
from uerrno import EINPROGRESS, ETIMEDOUT
from utime import ticks_ms, ticks_diff

BUSY_ERRORS = [EINPROGRESS, ETIMEDOUT, 118, 119]
_DEFAULT_MS = const(20)
_SOCKET_POLL_DELAY = const(5)
_response_time = 1000
_last_rx = None

def _timeout(t):
    return ticks_diff(ticks_ms(), t) > _response_time

async def _as_read(n, sock=None):  # OSError caught by superclass
    data = b''
    t = ticks_ms()
    while len(data) < n:
        if _timeout(t):
            raise OSError(-1)
        try:
            msg = sock.read(n - len(data))
        except OSError as e:  # ESP32 issues weird 119 errors here
            msg = None
            if e.args[0] not in BUSY_ERRORS:
                raise
        if msg == b'':  # Connection closed by host
            raise OSError(-1)
        if msg is not None:  # data received
            data = b''.join((data, msg))
            t = ticks_ms()
            _last_rx = ticks_ms()
        await asyncio.sleep_ms(_SOCKET_POLL_DELAY)
    return data

async def _as_write(bytes_wr, length=0, sock=None):
    if length:
        bytes_wr = bytes_wr[:length]
    t = ticks_ms()
    while bytes_wr:
        if _timeout(t):
            raise OSError(-1)
        try:
            n = sock.write(bytes_wr)
        except OSError as e:  # ESP32 issues weird 119 errors here
            n = 0
            if e.args[0] not in BUSY_ERRORS:
                raise
        if n:
            t = ticks_ms()
            bytes_wr = bytes_wr[n:]
        await asyncio.sleep_ms(_SOCKET_POLL_DELAY)

async def dns_check(dns='8.8.8.8'):
    packet = b'$\\x1a\\x01\\x00\\x00\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x03www\\x06google\\x03com\\x00\\x00\\x01\\x00\\x01'
    length = 32  # DNS query and response packet size
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.setblocking(False)
    s.connect((dns, 53))
    await asyncio.sleep(1)
    try:
        await _as_write(packet, sock=s)
        await asyncio.sleep(2)
        res = await _as_read(length, s)
        if len(res) == length:
            return True  # DNS response size OK
    except OSError:  # Timeout on read: no connectivity.
        return False
    finally:
        s.close()
    return False







dns=${dns ? JSON.stringify(dns) : "None"}

@print_as_json
def cmd():
    return asyncio.run(dns_check(dns))

cmd()`
}

export {wifi_dns_check}

// Source src/python/commands/wifi/get_config.py
// Include: remote

const wifi_get_config = () => {
    return `
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response


@print_as_json
def cmd():
    import network
    from binascii import hexlify
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    mac = hexlify(wlan.config('mac'))
    essid = wlan.config('essid')
    dhcp_hostname = wlan.config('dhcp_hostname')
    return {'mac': mac, 'ssid': essid, 'hostname': dhcp_hostname}

cmd()`
}

export {wifi_get_config}

// Source src/python/commands/wifi/ifconfig.py
// Include: remote

const wifi_ifconfig = () => {
    return `
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response


@print_as_json
def cmd():
    import network
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    ip, gateway, subnet, dns =  wlan.ifconfig()
    return {'ip': ip, 'gateway': gateway, 'subnet': subnet, 'dns': dns}

cmd()`
}

export {wifi_ifconfig}

// Source src/python/commands/wifi/ping.py
// Include: remote

const wifi_ping = () => {
    return `
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response


@print_as_json
def cmd():
    import network
    from binascii import hexlify
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    return [{
      'ssid': ssid,
      'bssid': hexlify(bssid),
      'channel': channel,
      'RSSI': RSSI,
      'authmode': authmode,
      'hidden': hidden
    } for ssid, bssid, channel, RSSI, authmode, hidden in wlan.scan()]

cmd()`
}

export {wifi_ping}

// Source src/python/commands/wifi/scan.py
// Include: remote

const wifi_scan = () => {
    return `
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response


@print_as_json
def cmd():
    import network
    from binascii import hexlify
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    return [{
      'ssid': ssid,
      'bssid': hexlify(bssid),
      'channel': channel,
      'RSSI': RSSI,
      'authmode': authmode,
      'hidden': hidden
    } for ssid, bssid, channel, RSSI, authmode, hidden in wlan.scan()]

cmd()`
}

export {wifi_scan}

// Source src/python/commands/wifi/status.py
// Include: remote

const wifi_status = (param) => {
    return `
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response


param=${param ? JSON.stringify(param) : "None"}

@print_as_json
def cmd():
    import network
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if param is None:
        return wlan.status()
    else:
        return wlan.status(param)

cmd()`
}

export {wifi_status}

// Source src/python/commands/wifi/test_wifi.py
// Include: wifi
// Include: remote

const wifi_test_wifi = (ssid,psk) => {
    return `
def connect(SSID, PSK, reconnects=5):
    import network
    from time import sleep
    sta_if = network.WLAN(network.STA_IF)
    sta_if.active(True)
    sta_if.config(reconnects=reconnects)
    if not sta_if.isconnected():
        #print("Connecting to network", sta_if.status())
        sta_if.connect(SSID, PSK)
        while not sta_if.isconnected():
            sleep(0.1)
    return sta_if.ifconfig()

def disconnect():
    import network
    from time import sleep
    sta_if = network.WLAN(network.STA_IF)
    sta_if.active(True)
    sta_if.disconnect()
    while sta_if.isconnected():
        sleep(0.1)
    return sta_if.ifconfig()
def print_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


ITERATORS = locals().get('ITERATORS', {})


def return_as_iterator(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            iter = function(*args, **kwargs)
            iter_id = hex(id(iter))
            iter_id = 'test'
            ITERATORS[iter_id] = iter
            result['result'] = iter_id
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            print(dumps(result))
    return response


@print_as_json
def print_iterator(iter_id):
    return next(ITERATORS[iter_id])


def return_as_json(function):
    def response(*args, **kwargs):
        result = {
            'success': False,
            'result': None,
            'error': None,
        }
        try:
            result['result'] = function(*args, **kwargs)
            result['success'] = True
        except Exception as e:
            result['error'] = repr(e)
        finally:
            from json import dumps
            return dumps(result)
    return response



ssid=${ssid ? JSON.stringify(ssid) : "None"}
psk=${psk ? JSON.stringify(psk) : "None"}

disconnect()
print_as_json(connect)(ssid, psk)
`
}

export {wifi_test_wifi}