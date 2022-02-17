#! @include remote
#! @include files

@print_as_json
def cmd(path, content):
    return write_file(path, content, True)


path=#! @param path
content=#! @param content
cmd(path, content)
