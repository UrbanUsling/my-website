import select
from sqlalchemy import create_engine, text, MetaData, Table
import configparser
import os

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
        
def get_number_of_cards_from_file():
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(BASE_DIR, 'static', 'textfiles', 'movie_data.txt')

    # Implement logic to read the number of cards from the text file
    # For example, you can count the number of non-empty lines in the file
    with open(file_path, 'r') as file:
        lines = file.readlines()
        return len([line.strip() for line in lines if line.strip()])

def search_films_by_title(card_title):
    # Connect to the database
    with engine.connect() as connection:
        # Execute a SELECT query to fetch films that contain the card title in the 'title' or 'actors' column
        query = text("SELECT * FROM films WHERE title LIKE :card_title OR actors LIKE :card_title").bindparams(card_title=f"%{card_title}%")
        result = connection.execute(query)
        
        # Fetch all rows as a list of dictionaries
        rows = result.fetchall()
        column_names = result.keys()
        rows_dict_list = [dict(zip(column_names, row)) for row in rows]

    return rows_dict_list


