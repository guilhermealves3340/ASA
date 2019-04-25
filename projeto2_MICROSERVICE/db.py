from db_config import db_postgres
import psycopg2 as pg
import pandas as pd


class Database():

    __database = None
    __port = None
    __host = None
    __user = None
    __password = None
    __conn = None
    
    def __init__(self):
        self.__host = db_postgres['host']
        self.__port = db_postgres['port']
        self.__database = db_postgres['database']
        self.__user = db_postgres['user']
        self.__password = db_postgres['password']

    def create(self):
        pass

    def update(self):
        pass

    def delete(self):
        pass

    def read(self):
        pass
