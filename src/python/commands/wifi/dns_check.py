
#! @include remote
#! @include inetutils2

dns=#! @param dns

@print_as_json
def cmd():
    return asyncio.run(dns_check(dns))

cmd()