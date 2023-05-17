from flask import Blueprint, request, jsonify
import json
from Database.aio_db import get_aio
import sys

light_controll = Blueprint('light', __name__, url_prefix='/light')
FEED_ID = "bbc-led"
aio_client = get_aio()
@light_controll.route('/get_status', methods=['GET'])
def get_led_status():
    feed = aio_client.feeds(FEED_ID)
    data = aio_client.data(feed.key)
    if data and data[0].value:
        return jsonify(data[0].value)
    else:
        return jsonify("No data")
@light_controll.route('/turn_on_off', methods=['GET'])
def turn_On_Off():
    feed = aio_client.feeds(FEED_ID)
    data = aio_client.data(feed.key)
    new_data = '0' if data[0].value == '1' else '1'
    aio_client.send_data(FEED_ID, new_data)
    return jsonify(new_data)



