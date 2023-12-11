from flask import Flask, render_template, jsonify, request
from database import load_films_from_db #"kan importera från andra filer"
from database import load_film_from_db, confirm_newsletter, load_newsletters_from_db
from sqlalchemy import text, MetaData, Table

app = Flask(__name__)


@app.route("/")
def hello_world():
    films_data = load_films_from_db()
    return render_template('home.html', films=films_data, greet='Hej')

@app.route("/films")
def list_films():
    films_data = load_films_from_db()
    return jsonify(films_data)

@app.route("/newsletter")
def list_newsletter():
    newsletter_data = load_newsletters_from_db()
    return jsonify(newsletter_data)

@app.route("/film/<int:id>")
def list_film(id):
    film = load_film_from_db(id)
    if film:
        template_name = f'filmpage{id}.html'
        return render_template(template_name, film=film)
    else:
        return jsonify({"error": "Film not found"}), 404
    
@app.route("/terms")
def terms():
    return render_template('terms.html')

from flask import render_template, jsonify, request

@app.route('/confirmation', methods=['POST'])
def confirmation():
    if request.method == 'POST':
        # Get the form data
        data = request.form
        full_name = data.get('full_name')
        email = data.get('email')
        # Confirm newsletter and handle the result
        success = confirm_newsletter(full_name, email)

        if success:
            return render_template('confirmation.html', person=data)
        else:
            return render_template('confirmation2.html', error="Email already exists", person=data)
    else:
        # Handle other HTTP methods (e.g., GET) or redirect to an error page
        return "Method Not Allowed", 405
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True) 
    