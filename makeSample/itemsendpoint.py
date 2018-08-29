from cerberus import Validator
from datetime import datetime
from uuid import uuid4
from flask import Flask,jsonify,request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

items = {"name": "Vivian",
         "quantity": 5,
         "date_created":"02/05/2018",
         "date_modified":"02/05/2018"
         }
class Items(Resource):
    def get(self):
        return items
    def post(self):
        body = request.json
        try:
            item = {k: body[k] for k in ('name', 'quantity')}
        except:
            return 'Error while parsing request', 500

# Generate random item id
        id = uuid4()
        
        item['date_created'] = datetime.now()
        item['date_modified'] = datetime.now()
# We shall be validating the request body data against this
        schema = {
            'name': {'required': 'True', 'type': 'string'},
            'quantity': {'type': 'integer', 'min': 10},
            'date_created': {'type': 'datetime'},
            'date_modified': {'type': 'datetime'}
        }
        v = Validator(schema)
        if not v(item):
            return "There was something wrong with your arguments", 400
        
        item[id] = id
        items[id] = item
        return item, 201

api.add_resource(Items, '/items/')

class SingleItem(Resource):
    def get(self, id):
        try:
            item = items[id]
        except IndexError:
            return "Item could not be found", 404
        return item

    def put(self, id):
        try:
            item = items[id]
        except IndexError:
            return "Item could not be found", 404
        body = request.json
        item['name'] = body['name'] or item['name']
        item['quantity'] = body['quantity'] or item['quantity']
        item['date_created'] = datetime.now()
        item['date_modified'] = datetime.now()

        # We shall be validating the request body data against this
        schema = {
            'name': {'required': 'True', 'type': 'string'},
            'quantity': {'type': 'integer', 'min': 10},
            'date_created': {'type': 'datetime'},
            'date_modified': {'type': 'datetime'}
        }
        v = Validator(schema)
        if not v(item):
            return "There was something wrong with your arguments", 400

        item[id] = id
        items[id] = item
        return item

    def delete(self, id):
        try:
            item = items[id]
        except IndexError:
            return "Item could not be found", 404
        return "Item has been deleted", 204

api.add_resource(SingleItem, '/items/<string:id>')

if __name__ == '__main__':
    app.run(debug=True, port = 8080)