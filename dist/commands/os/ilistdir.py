#! @include remote
#! @include files

@return_as_iterator
def cmd(path='/', recurse=True):
    return ilistdir(path, recurse)

path=#! @param path
cmd(path)
