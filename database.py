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
#namnger en connection till conn
with engine.connect() as conn:
    result = conn.execute(films_table.select())

    # Fetch all rows as a list of dictionaries
    rows_dict_list = result.fetchall()

# Print the resulting list of dictionaries
for row_dict in rows_dict_list:
    print(row_dict)