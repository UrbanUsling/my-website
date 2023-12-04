from flask import Flask, render_template, jsonify
from database import load_films_from_db #"kan importera från andra filer"
from sqlalchemy import text, MetaData, Table

app = Flask(__name__)


@app.route("/")
def hello_world():
    films_data = load_films_from_db()
    return render_template('home.html', jobs=films_data, greet='Hej')

@app.route("/films")
def list_jobs():
    films_data = load_films_from_db()
    return jsonify(films_data)
  
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)  
