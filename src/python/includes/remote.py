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