from flask import Flask,request
import pymongo
import bson.json_util as json_util
from Configuration import Configuration
from flask_cors import CORS, cross_origin
import json

ConfigApi = Configuration()
myclient = pymongo.MongoClient(ConfigApi.MONGO_DB_SERVER())
mydb = myclient[ConfigApi.MONGO_DB()]
mycol = mydb[ConfigApi.MONGO_COLL_FOOD()]


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
@cross_origin()
def main():
    return "API TEST VER. 1.0"


@app.route('/search', methods=['GET'])
@cross_origin()
def search():
    args = request.args
    result = search_for_text(args.get('value'))
    return result

def search_for_text(search_text):
    dataList =mycol.find({"$text": {"$search": search_text}})
    listResult=[]
    for data in dataList:
        objResult = {}
        objResult['description'] = data['description']
        objResult['publicationDate'] = data['publicationDate']
        objResult['foodClass'] = data['foodClass']
        objResult['foodCategory'] = data['foodCategory']['description']
        objResult['foodNutrients'] = data['foodNutrients']
        objResult['inputFoods'] = data['inputFoods']
        listResult.append(objResult)
    return listResult