import os
from flask_cors import CORS, cross_origin
from flask import Flask


app = Flask(__name__)
CORS(app)


@app.route("/")
def index():
    print('slhsad;hlfa')
    return "Hello, World"


@app.route('/createuser', methods=['POST'])
def create_user():
    print("random")
    response = request.json
    response.headers.add('Access-Control-Allow-Origin', '*')
    print(response)
    return "Hello, World"


if __name__ == "__main__":
    app.run(
        host=os.environ.get("IP", "0.0.0.0"),
        port=int(os.environ.get("PORT", "5000")),
        debug=True)

        
