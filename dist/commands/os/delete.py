#! @include remote
#! @include files

@print_as_json
def cmd(path):
    return rm(path)


path=#! @param path
cmd(path)
