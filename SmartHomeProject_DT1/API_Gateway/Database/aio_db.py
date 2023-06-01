def get_aio():
    from Adafruit_IO import Client
    
    AIO_USERNAME = "smartHome123321"
    AIO_KEY = "aio_YMdr43bJvaGVY8fXOuBeuZ4fKpuk"
    
    return Client(AIO_USERNAME, AIO_KEY)