from flask import Flask, render_template, jsonify
from database import load_films_from_db #"kan importera från andra filer"
from database import load_film_from_db
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

@app.route("/film/<int:id>")
def list_film(id):
    film = load_film_from_db(id)
    if film:
        template_name = f'filmpage{id}.html'
        return render_template(template_name, film=film)
    else:
        return jsonify({"error": "Film not found"}), 404
  
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)  
