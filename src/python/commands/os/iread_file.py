#! @include remote
#! @include files

@return_as_iterator
def cmd(path):
    return i_read_file(path)

path=#! @param path
cmd(path)
