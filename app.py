from flask import Flask, render_template, jsonify, request
from database import load_films_from_db #"kan importera från andra filer"
from database import load_film_from_db, confirm_newsletter, load_newsletters_from_db
from sqlalchemy import text, MetaData, Table
from email_validator import validate_email, EmailNotValidError



app = Flask(__name__)


@app.route("/")
def hello_world():
    films_data = load_films_from_db()
    return render_template('home.html', films=films_data, greet='Hej')

@app.route("/filmlist")
def film_list():
    films_data = load_films_from_db()
    return render_template('filmlist.html', films=films_data)

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
        #template_name = f'filmpage{id}.html'
        return render_template('filmpage1.html', film=film)
    else:
        return jsonify({"error": "Film not found"}), 404
    
@app.route("/terms")
def terms():
    return render_template('terms.html')

from flask import render_template, jsonify, request

@app.route('/confirmation', methods=['POST'])
def confirmation():
    
        # Get the form data
    data = request.form
    full_name = data.get('full_name')
    email = data.get('email')
    print(f"Received request with full_name: {full_name}, email: {email}")

    if validate_email(email):
        # Confirm newsletter and handle the result
        success = confirm_newsletter(full_name, email)

        if success:
            return render_template('confirmation.html', person=data, new_email=True)
        else:
            return render_template('confirmation.html', person=data, new_email=False)

    else:
        # Handle other HTTP methods (e.g., GET) or redirect to an error page
        return "Method Not Allowed", 405
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True) 
    