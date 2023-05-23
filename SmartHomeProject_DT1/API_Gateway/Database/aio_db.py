def get_aio():
    from Adafruit_IO import Client
    
    AIO_USERNAME = "smartHome123321"
    AIO_KEY = "aio_dJDF53p1BrnnDWlycNHZcZem8l3V"
    
    return Client(AIO_USERNAME, AIO_KEY)