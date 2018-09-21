"""An API that fetches all entries of the diary that the user has ever entered"""
from flask import Flask, jsonify
APP = Flask(__name__)

# Defining a datastructure, for this case, its a list
ENTRIES = [
    {'id':1,
     'Topic':'My first day at Andela',
     'Content':'It was really an amazing '+
               'experience having to met fellow spring software developers'
    }
    ,
    {'id':2,
     'Topic':'Andela Women Initiative',
     'Content':'After having joined Andela Womens initiative'+
               ', I have really gianed a lot of experience'
    }
]
# Defining a route ie index page
@APP.route('/api/v1/entries')
def get_entries():
    "Getting all the entries of users"
    return jsonify({'entries':ENTRIES})
if __name__ == '__main__':
    APP.run(debug=True, port=8080)
