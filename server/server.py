import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
import pickle
import json

app = Flask(__name__)
model = pickle.load(open('model.pkl','rb'))

@app.route('/api/predict',methods=['POST'])
def predict():
    data = request.get_json(force=True)
    prediction = model.predict([[np.array(data['exp'])]])
    output = prediction[0]

    return jsonify(output)

@app.route('/api/data', methods=['GET'])
def get_data():
    df = pd.read_csv('./dataset.csv')
    print(df.head())
    df = df.to_json(orient='records')
    print(df)
    return json.loads(df)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
    app.run(debug=True)