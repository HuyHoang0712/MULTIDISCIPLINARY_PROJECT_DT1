from flask import Blueprint, request, jsonify
import json
from Database.aio_db import get_aio
import sys

fan_controll = Blueprint('fan', __name__, url_prefix='/fan')
FEED_ID = "bbc-fan"
AUTO_FEED = "bbc-auto"
aio_client = get_aio()

@fan_controll.route('/get_status', methods=['GET'])
def get_Status():
    feed = aio_client.feeds(FEED_ID)
    data = aio_client.data(feed.key)
    if data and data[0].value:
        return jsonify(data[0].value)
    else:
        return jsonify("no data")
    
@fan_controll.route('/adjust_speed', methods=['POST'])
def adjust_Speed():
    if request.json['data'] == 0:
        new_data = 0
    elif request.json['data'] == 1:
        new_data = 25
    elif request.json['data'] == 2:
        new_data = 50
    elif request.json['data'] == 3:
        new_data = 75
    aio_client.send_data(FEED_ID, new_data)
    return jsonify("new data")
