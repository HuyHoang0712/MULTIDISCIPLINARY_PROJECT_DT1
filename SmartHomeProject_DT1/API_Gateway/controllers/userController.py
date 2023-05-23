from flask import Blueprint, request, jsonify
from bson import ObjectId
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
    
@user_bp.route('/update-password/<id>', methods=['POST'])
def updatePassword(id):
    body = request.get_json()
    user = db.find_one_and_update({"_id": ObjectId(id)},{"$set": {"password": body["newPassword"]}})
    user = db.find_one({"_id": ObjectId(id)})
    return jsonify(user)

@user_bp.route('/update-phone/<id>', methods=['POST'])
def updatePhone(id):
    body = request.get_json()
    user = db.find_one_and_update({"_id": ObjectId(id)},{"$set": {"phone": body["newPhone"]}})
    user = db.find_one({"_id": ObjectId(id)})
    return jsonify(user)

@user_bp.route('/update-email/<id>', methods=['POST'])
def updateEmail(id):
    body = request.get_json()
    user = db.find_one_and_update({"_id": ObjectId(id)},{"$set": {"email": body["newEmail"]}})
    user = db.find_one({"_id": ObjectId(id)})
    return jsonify(user)