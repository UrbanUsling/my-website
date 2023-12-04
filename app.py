from flask import Flask, render_template, jsonify
from database import engine #"kan importera från andra filer"
from sqlalchemy import text, MetaData, Table

app = Flask(__name__)


metadata = MetaData()
films_table = Table('films', metadata, autoload_with=engine)

def load_films_from_db():
    # Connect to the database
    with engine.connect() as connection:
        # Execute a SELECT query to fetch all rows from the 'films' table
        result = connection.execute(films_table.select())

        # Fetch all rows as a list of dictionaries
        rows_dict_list = [dict(row) for row in result]

    return rows_dict_list
    


@app.route("/")
def hello_world():
    films_data = load_films_from_db()
    return render_template('home.html', jobs=films_data, greet='Hej')

@app.route("/jobs")
def list_jobs():
    return jsonify(JOBS)
  
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)  
