import select
from sqlalchemy import create_engine, text, MetaData, Table
import configparser

config = configparser.ConfigParser()
config.read('config.ini')

db_username = config['database']['username']
db_password = config['database']['password']
db_connection_string= f"mysql+pymysql://{db_username}:{db_password}@aws.connect.psdb.cloud/webshop?charset=utf8mb4"
engine = create_engine(db_connection_string,
        connect_args={
        "ssl": {
            "ssl_ca": "/etc/ssl/certs/ca-certificates.crt"
        }
    }            )
metadata = MetaData()
films_table = Table('films', metadata, autoload_with=engine)
newsletter_table = Table('newsletter', metadata, autoload_with=engine)

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


def load_film_from_db(film_id):
    # Connect to the database
    with engine.connect() as connection:
        # Execute a SELECT query to fetch a specific film by id
        result = connection.execute(films_table.select().where(films_table.c.id == film_id))

        # Fetch the film as a dictionary
        film = dict(zip(result.keys(), result.fetchone()))

    return film

def load_newsletters_from_db():
    # Connect to the database
    with engine.connect() as connection:
        # Execute a SELECT query to fetch all rows from the 'films' table
        result = connection.execute(newsletter_table.select())

        # Fetch all rows as a list of dictionaries
        rows = result.fetchall()
        column_names = result.keys()
        rows_dict_list = [dict(zip(column_names, row)) for row in rows]


    return rows_dict_list

def confirm_newsletter(full_name, email):
    # Check if the email already exists in the database
    with engine.connect() as connection:
        result = connection.execute(text("SELECT * FROM newsletter WHERE email = :email"), {'email': email})
        existing_entry = result.fetchone()

        # If the email doesn't exist, insert a new entry
        if not existing_entry:
            connection.execute(text("INSERT INTO newsletter (full_name, email) VALUES (:full_name, :email)"), {'full_name': full_name, 'email': email})
            return True  # Email added successfully
        else:
            return False  # Email already exists