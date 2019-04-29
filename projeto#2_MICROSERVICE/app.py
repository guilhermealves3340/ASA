"""
Trabalho #2 da disciplina de Arquitetura de Software Aplicada - UFU 2019
Microserviços usando python-Flask
Guilherme Alves da Silva - 11511ECP020
"""

print(__doc__)


from flask import Flask, request, jsonify
import logging, sys, json

import engine as eng


app = Flask(__name__)


@app.route('/')
def hello_world():
    return jsonify([{'response':'Hello, World!'}])


@app.route('/insert', methods=['POST'])
def create():
    req = request.get_json(force=True)
    response = eng.create(req)
    
    return response


@app.route('/select', methods=['GET'])
def get():
    req = request.get_json(force=True)
    response = eng.get(req)

    print(response)

    return jsonify(response)


@app.route('/update', methods=['PUT'])
def update():
    req = request.get_json(force=True)
    response = eng.update(req)

    return response


@app.route('/delete', methods=['DELETE'])
def delete():
    req = request.get_json(force=True)
    response = eng.delete(req)

    return response


def config_log():
    LEVELS = {'debug': logging.DEBUG,
              'info': logging.INFO,
              'warning': logging.WARNING,
              'error': logging.ERROR,
              'critical': logging.CRITICAL}
    level = logging.DEBUG
    if len(sys.argv) > 1:
        sys.argv
        level_name = sys.argv[1]
        level = LEVELS.get(level_name, logging.NOTSET)

    logging.basicConfig(filename='app.log', level=level)
    if level.__eq__(logging.DEBUG):
        logging.getLogger().addHandler(logging.StreamHandler())



if __name__ == '__main__':
    app.run(port=5001)