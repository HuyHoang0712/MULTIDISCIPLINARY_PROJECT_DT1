def get_aio():
    from Adafruit_IO import Client
    
    AIO_USERNAME = "smartHome123321"
    AIO_KEY = "aio_JBRX24pucOOiycU1DLv98zCkfDlb"
    
    return Client(AIO_USERNAME, AIO_KEY)