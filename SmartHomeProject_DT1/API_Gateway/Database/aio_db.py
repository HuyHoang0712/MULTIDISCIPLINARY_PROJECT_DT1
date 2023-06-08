def get_aio():
    from Adafruit_IO import Client
    
    AIO_USERNAME = "smartHome123321"
    AIO_KEY = "aio_rKhB25ScU1K9tisspqq9fvqX4HG3"
    
    return Client(AIO_USERNAME, AIO_KEY)