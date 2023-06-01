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
    return jsonify(data.value)

@fan_bp.route('/turn_on_off',  methods=['POST'])
def turn_On_Off():
    new_data = request.json['data']
    if new_data == '1':
        aio_client.send_data(FEED_ID, "25")
    else:
        aio_client.send_data(FEED_ID, new_data)  
    return jsonify(new_data)
    
@fan_bp.route('/adjust_speed', methods=['POST'])
def adjust_Speed():
    new_data = '0'
    if request.json['data'] == '0':
        new_data = 0
    elif request.json['data'] == '1':
        new_data = 25
    elif request.json['data'] == '2':
        new_data = 50
    elif request.json['data'] == '3':
        new_data = 75
    aio_client.send_data(FEED_ID, new_data)
    return jsonify("new data")


@fan_bp.route('/handle_autoMode',  methods=['POST'])
def turn_Auto():
    new_data = request.json['data']
    aio_client.send_data(AUTO_FEED, new_data)
    return jsonify(new_data)

@fan_bp.route('/auto_mode',  methods=['GET'])
def get_auto_status():
    data = aio_client.receive(AUTO_FEED)
    return jsonify(data.value)