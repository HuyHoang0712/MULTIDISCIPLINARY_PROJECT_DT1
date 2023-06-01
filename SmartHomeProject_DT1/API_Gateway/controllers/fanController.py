from flask import Blueprint, request, jsonify
import json
from Database.aio_db import get_aio
import sys

fan_bp = Blueprint('fan', __name__, url_prefix='/fan')
FEED_ID = "bbc-fan"
AUTO_FEED = "bbc-auto"
aio_client = get_aio()

@fan_bp.route('/get_status', methods=['GET'])
def get_Status():
    data = aio_client.receive(FEED_ID)
    if int(data.value) > 0:
        return jsonify('1')
    return jsonify(data.value)

@fan_bp.route('/turn_on_off',  methods=['POST'])
def turn_On_Off():
    new_data = request.json['data']
    print(new_data)
    aio_client.send_data(FEED_ID, new_data)
    return jsonify(new_data)
    
@fan_bp.route('/adjust_speed', methods=['POST'])
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