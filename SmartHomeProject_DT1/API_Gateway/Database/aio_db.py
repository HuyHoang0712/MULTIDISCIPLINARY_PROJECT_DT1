def get_aio():
    from Adafruit_IO import Client
    
    AIO_USERNAME = "smartHome123321"
    AIO_KEY = "aio_vmNE88gMtVnwX4TNrr1LqBy0ZyWc"
    
    return Client(AIO_USERNAME, AIO_KEY)