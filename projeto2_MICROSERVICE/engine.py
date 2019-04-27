import logging

from db import Database


def create(data):
    _db = Database()
    sql_command = "INSERT INTO TABLE (...) VALUES (...);"
    _db.execute(sql_command,False)
    if _db.result == True:
        return True
    else:
        return False


def get(req):
    _db = Database()
    try:
        cond = condition(req['data'])
        sql_command = "SELECT * FROM {} WHERE {};".format(req['class'],cond)
    except:
        print('[INFO]: ENTRADA INVALIDA DE VALORES')
        return False

    _db.execute(sql_command, True)
    if _db.result:
        return list(_db.result)


def condition(data):
    key = list(data.keys())
    values = list(data.values())
    cond = ''
    for i in range(len(key)):
        if i != len(key)-1:
            cond += key[i] + '=' + str(values[i]) + 'AND '
        else:
            cond += key[i] + '=' + str(values[i])
    return cond

def update(data):
    _db = Database()
    try:
        cond = condition(req['data'])
        new = condition(data['new_data'])
        sql_command = "UPDATE {} SET {} WHERE {};".format(req['class'],new,cond)
    except:
        print('[INFO]: ENTRADA INVALIDA DE VALORES')
        return False
    
    _db.execute(sql_command,false)
    if _db.result == True:
        return True
    else:
        return False


def delete(data):
    _db = Database()
    sql_command = "DELETE FROM table WHERE condition;"
    _db.execute(sql_command,False)
    if _db.result == True:
        return True
    else:
        return False