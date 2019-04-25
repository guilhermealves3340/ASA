"""
Trabalho da disciplina de Arquitetura de Software Aplicada - UFU 2019
Microserviços usando python-Flask
Aluno: Guilherme Alves da Silva
"""

print(__doc__)


from flask import Flask, request, jsonify
import logging, sys

import engine as eng


app = Flask(__name__)

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


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/create', methods=['POST'])
def create():
    _request = request.get_json(force=True)
    eng.create(_request)


@app.route('/read', methods=['GET'])
def get():
    _request = request.get_json(force=True)


@app.route('/update', methods=['PUT'])
def update():
    _request = request.get_json(force=True)


@app.route('/delete', methods=['DELETE'])
def delete():
    _request = request.get_json(force=True)



if __name__ == '__main__':
    app.run(port=5001)