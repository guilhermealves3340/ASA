import pandas as pd
from psycopg2 import connect
from psycopg2.extras import DictCursor
import logging

from db_config import db_postgres


class Database():

    __database = None
    __port = None
    __host = None
    __user = None
    __password = None
    result = None
    
    def __init__(self):
        self.__host = db_postgres['host']
        self.__port = db_postgres['port']
        self.__database = db_postgres['database']
        self.__user = db_postgres['username']
        self.__password = db_postgres['password']

    
    def execute(self,sql_command, _type):
        try:
            conn = connect("dbname={} user={} password={}".format(self.__database, self.__user,
            self.__password))
        except:
            print('[INFO]: NÃO FOI POSSÍVEL CONECTAR COM O BANCO DE DADOS!')
            return False
        
        logging.debug('[SQL]: ',sql_command)
        cur = conn.cursor(cursor_factory=DictCursor)
        cur.execute(sql_command)

        if _type:
            rows =  cur.fetchall()
            conn.commit()
            cur.close()
            self.result = rows
        else:
            conn.commit()
            cur.close()
            self.result = True
