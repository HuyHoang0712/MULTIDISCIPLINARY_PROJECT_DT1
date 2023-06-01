def get_aio():
    from Adafruit_IO import Client
    
    AIO_USERNAME = "smartHome123321"
    AIO_KEY = "aio_dDDX97B4ogBGM1all9BB1zW1ag8V"
    
    return Client(AIO_USERNAME, AIO_KEY)