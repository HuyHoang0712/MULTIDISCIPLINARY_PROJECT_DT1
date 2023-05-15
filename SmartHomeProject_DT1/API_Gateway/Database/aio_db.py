def get_aio():
    from Adafruit_IO import Client
    
    AIO_USERNAME = "smartHome123321"
    AIO_KEY = "aio_wlFa58PVqcas2spCApAl8TZ5JRW9"
    
    return Client(AIO_USERNAME, AIO_KEY)