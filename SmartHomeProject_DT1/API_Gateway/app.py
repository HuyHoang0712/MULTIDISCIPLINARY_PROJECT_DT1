from flask import Flask
from Database import user_db, aio_db

# Setup Serverr
HOST = '0.0.0.0'
PORT = 8000

app = Flask(__name__)

@app.route('/', methods=['POST'])
def postuser():
    db = user_db.get_database()
    collection_name = db["user"]
    post = {"name": "huy", "score": 5}
    collection_name.insert_one(post)
    return "Hello"

@app.route('/light', methods=['POST'])
def turnOn():
    aio = aio_db.get_aio()
    data = {"value": 1}
    test_btn = aio.feeds('bbc-led')
    aio.send_data(test_btn.key, '1')
    print(test_btn)
    
    return "<p>hello</p>"
    

if __name__ == "__main__":
    
    app.run(HOST, PORT, debug=True)