from flask import Flask
from flask.json import JSONEncoder
from bson import ObjectId
from datetime import datetime, date

from Database import user_db, aio_db

from controllers.userController import user_bp
from controllers.temp_humidController import temp_bp, humid_bp

class MongoJSONEncoder(JSONEncoder):
    def default(self, o):
        if isinstance(o, (datetime, date)):
            return iso.datetime_isoformat(o)
        if isinstance(o, ObjectId):
            return str(o)
        else:
            return super().default(o)

# Setup Serverr
HOST = '0.0.0.0'
PORT = 8080

app = Flask(__name__)
app.json_encoder = MongoJSONEncoder
app.register_blueprint(user_bp)
app.register_blueprint(temp_bp)
app.register_blueprint(humid_bp)

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