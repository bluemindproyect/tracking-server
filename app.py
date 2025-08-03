from flask import Flask, request
import json
from datetime import datetime

app = Flask(__name__)

@app.route("/track", methods=["POST"])
def track_click():
    data = request.json
    data['timestamp'] = datetime.utcnow().isoformat()
    with open("clicks.json", "a") as f:
        f.write(json.dumps(data) + "\n")
    return {"status": "received"}, 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
