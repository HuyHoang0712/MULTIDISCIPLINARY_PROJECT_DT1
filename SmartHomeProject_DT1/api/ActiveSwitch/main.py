import sys
from Adafruit_IO import MQTTClient
from Adafruit_IO import Client, Feed, RequestError
import time
import random
from uart import *
from flask import Flask, request, jsonify
import threading
from flask_cors import CORS

# 2 cai can subcribe (dang ki)
AIO_FEED_IDs = ["nutnhan1", "nutnhan2"]
#lay thong tin tren adafruit cua minh
AIO_USERNAME = "Huy_Hieu"
AIO_KEY = "aio_MzsX87hhg6pEkeCjI5HNb0LML6MP"

def connected(client):
    print("Ket noi thanh cong ...")
    for topic in AIO_FEED_IDs:
        client.subscribe(topic)

def subscribe(client , userdata , mid , granted_qos):
    print("Subscribe thanh cong ...")

def disconnected(client):
    print("Ngat ket noi ...")
    sys.exit (1)

def message(client , feed_id , payload):
    print("Nhan du lieu: " + payload +", feed id: " + feed_id)


app = Flask(__name__)
CORS(app)

aio = Client(AIO_USERNAME, AIO_KEY)


@app.route('/turnOnFan', methods=['POST'])
def turnOn():
    data = request.json['data']
    test_btn = aio.feeds('nutnhan1')
    aio.send_data(test_btn.key, data)
    return jsonify(data)

@app.route('/getData', methods=['GET'])
def getData():
    test_btn = aio.feeds('nutnhan1')
    return jsonify(test_btn)


if __name__ == '__main__':
    client = MQTTClient(AIO_USERNAME , AIO_KEY)
    client.on_connect = connected #ten ham
    client.on_disconnect = disconnected
    client.on_message = message
    client.on_subscribe = subscribe
    client.connect()
    client.loop_background()
    threading.Thread(target=app.run).start()

    while True:
        readSerial(client)

        time.sleep(1)
        pass