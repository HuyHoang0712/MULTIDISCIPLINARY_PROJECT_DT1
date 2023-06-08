def get_aio():
    from Adafruit_IO import Client
    
    AIO_USERNAME = "smartHome123321"
    AIO_KEY = "aio_QwVM45ZU34AbnKb22xeoN8cIAkC6"
    
    return Client(AIO_USERNAME, AIO_KEY)