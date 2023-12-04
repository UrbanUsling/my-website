from sqlalchemy import create_engine, text, MetaData, Table
import configparser

config = configparser.ConfigParser()
config.read('config.ini')

db_username = config['database']['username']
db_password = config['database']['password']
db_connection_string= "mysql+pymysql://"+db_username+":"+db_password+"@aws.connect.psdb.cloud/webshop?charset=utf8mb4"
engine = create_engine(db_connection_string,
        connect_args={
        "ssl": {
            "ssl_ca": "/etc/ssl/certs/ca-certificates.crt"
        }
    }            )
metadata = MetaData()
films_table = Table('films', metadata, autoload_with=engine)

def load_films_from_db():
    # Connect to the database
    with engine.connect() as connection:
        # Execute a SELECT query to fetch all rows from the 'films' table
        result = connection.execute(films_table.select())

        # Fetch all rows as a list of dictionaries
        rows = result.fetchall()
        column_names = result.keys()
        rows_dict_list = [dict(zip(column_names, row)) for row in rows]


    return rows_dict_list