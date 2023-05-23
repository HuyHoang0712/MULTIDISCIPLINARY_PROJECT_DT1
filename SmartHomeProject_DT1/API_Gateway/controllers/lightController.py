from flask import Blueprint, request, jsonify
import json
from Database.aio_db import get_aio
import sys

light_controll = Blueprint('light', __name__, url_prefix='/light')
FEED_ID = "bbc-led"
AUTO_FEED = "bbc-led-auto"
aio_client = get_aio()
@light_controll.route('/get_status', methods=['GET'])
def get_led_status():
    feed = aio_client.feeds(FEED_ID)
    data = aio_client.data(feed.key)
    if data and data[0].value:
        return jsonify(data[0].value)
    else:
        return jsonify("No data")
    
@light_controll.route('/turn_on_off',  methods=['POST'])
def turn_On_Off():
    # feed = aio_client.feeds(FEED_ID)
    # data = aio_client.data(feed.key)
    new_data = request.json['data']
    aio_client.send_data(FEED_ID, new_data)
    return jsonify(new_data)

@light_controll.route('/turn_auto',  methods=['POST'])
def turn_Auto():
    new_data = request.json['data']
    aio_client.send_data(AUTO_FEED, new_data)
    return jsonify(new_data)



