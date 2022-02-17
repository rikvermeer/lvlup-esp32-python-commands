import json

def test():
    print('test')

def test_with_args(arg):
    print('test', arg)

def test_json():
    print(json.dumps({'a': 1}))

def test_json_with_args(arg):
    print(json.dumps(arg))
