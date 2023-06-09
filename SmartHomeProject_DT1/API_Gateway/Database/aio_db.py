def get_aio():
    from Adafruit_IO import Client
    
    AIO_USERNAME = "smartHome123321"
    AIO_KEY = "aio_dzoh47iVyZJrMMhjSFQOCzSJ9JCi"
    
    return Client(AIO_USERNAME, AIO_KEY)