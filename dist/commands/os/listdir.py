#! @include remote
#! @include files

@print_as_json
def cmd(path='/', recurse=True):
    return list(ilistdir(path, recurse))

path=#! @param path
cmd(path)
