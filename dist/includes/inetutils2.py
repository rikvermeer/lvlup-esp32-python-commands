

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


