# tells flask what routes/urls exist for the homepage
# what the server should return when visiting the route
# running this file starts the flask developement server
from flask import Flask


app = Flask(__name__)

@app.route("/api/greeting")
def greeting():
    return {"message": "hello from flask!"}

if __name__ == "__main__":
    app.run(debug=True) # start the flask server, debug true means auto update changes and show errors
    # python app.py
    # http://127.0.0.1:5000/