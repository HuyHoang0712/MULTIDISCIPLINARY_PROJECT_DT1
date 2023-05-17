from flask import Blueprint, request, jsonify
import json
from Database import user_db


db = user_db.get_database()['user']

user_bp = Blueprint('user', __name__, url_prefix='/user')

@user_bp.route('/', methods=['POST'])
def test():
    user = request.get_json()
    db.insert_one(user)
    return jsonify("Added")

@user_bp.route('/login', methods=['POST'])
def login():
    body = request.get_json()
    user = db.find_one({"username": body["username"]})
    if user is None:
        return jsonify("Username not found!"), 404
    elif body["password"] != user["password"]:
        return jsonify("Incorrect Password!"), 404
    
    else:
        return jsonify(user)