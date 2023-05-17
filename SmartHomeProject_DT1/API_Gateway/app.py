from flask import Flask, jsonify
from bson import ObjectId
from datetime import datetime, date
import json

from Database import user_db, aio_db

from controllers.userController import user_bp
from controllers.lightController import light_controll
class MongoJSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, (datetime, date)):
            return o.isoformat()
        if isinstance(o, ObjectId):
            return str(o)
        return super().default(o)

# Setup Server
HOST = '0.0.0.0'
PORT = 8080

app = Flask(__name__)
app.json_encoder = MongoJSONEncoder
app.register_blueprint(user_bp)
app.register_blueprint(light_controll)
# @app.route('/', methods=['POST'])
# def postuser():
#     db = user_db.get_database()
#     collection_name = db["user"]
#     post = {"name": "huy", "score": 5}
#     collection_name.insert_one(post)
#     return "Hello"

# @app.route('/light', methods=['POST'])
# def turnOn():
#     aio = aio_db.get_aio()
#     data = {"value": 1}
#     test_btn = aio.feeds('bbc-led')
#     aio.send_data(test_btn.key, '1')
#     print(test_btn)

#     return "<p>hello</p>"


if __name__ == "__main__":
    app.run(HOST, PORT, debug=True)
