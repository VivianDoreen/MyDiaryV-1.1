from flask import request, Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

#@app.route('/someendpoint', methods=['GET', 'POST'])
#def endpoint_callback():
#    if request.method == 'GET':
#        return "Some random string"
#    if request.method == 'POST':
#        return "From the post method"

class EndpointResource(Resource):
    def get(self):
        return "Some random string" 
    def post(self):
        return "From the post method" 
api.add_resource(EndpointResource, '/someendpoint')

if __name__ == '__main__':
    app.run(debug=True, port=8080)