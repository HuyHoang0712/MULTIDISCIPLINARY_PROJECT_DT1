from flask import Blueprint, request, jsonify
from bson import ObjectId
from Database import aio_db

aio = aio_db.get_aio()

temp_bp = Blueprint('temp', __name__, url_prefix='/temp')
humid_bp = Blueprint('humid', __name__, url_prefix='/humid')

@temp_bp.route('/', methods=['GET'])
def getTemp():
    data = aio.receive('bbc-temp')
    
    return jsonify(data.value)

@humid_bp.route('/', methods=['GET'])
def getHumid():
    data = aio.receive('bbc-humid')
    
    return jsonify(data.value)
    