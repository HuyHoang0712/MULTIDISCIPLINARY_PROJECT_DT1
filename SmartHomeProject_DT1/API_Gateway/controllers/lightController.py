from flask import Blueprint, request, jsonify
import json
from Database.aio_db import get_aio
import sys

light_bp = Blueprint('light', __name__, url_prefix='/light')
FEED_ID = "bbc-led"
AUTO_FEED = "bbc-led-auto"
aio_client = get_aio()


@light_bp.route('/get_status', methods=['GET'])
def get_led_status():
    data = aio_client.receive(FEED_ID)
    return jsonify(data.value)
    
@light_bp.route('/turn_on_off',  methods=['POST'])
def turn_On_Off():
    new_data = request.json['data']
    aio_client.send_data(FEED_ID, new_data)
    return jsonify(new_data)

@light_bp.route('/handle_autoMode',  methods=['POST'])
def turn_Auto():
    new_data = request.json['data']
    aio_client.send_data(AUTO_FEED, new_data)
    return jsonify(new_data)

@light_bp.route('/auto_mode',  methods=['GET'])
def get_auto_status():
    data = aio_client.receive(AUTO_FEED)
    return jsonify(data.value)


