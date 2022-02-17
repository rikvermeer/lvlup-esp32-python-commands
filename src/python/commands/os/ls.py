#! @include remote
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

dir=#! @param dir
ls(dir)
