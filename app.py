from flask import Flask, render_template, jsonify

app = Flask(__name__)

JOBS = [
    {
        'id': 1,
        'title': "Data Analyst",
        'location' : 'Stockholm, Sweden',
        'salary' : '100 000'
    },
    {
        'id': 2,
        'title': "Programmer",
        'location' : 'Göteborg, Sweden',
        'salary' : '200 000'
    },
    {
        'id': 3,
        'title': "Tester",
        'location' : 'Stockholm, Sweden',
        'salary' : '300 000'
    }
]

@app.route("/")
def hello_world():
    return render_template('home.html', jobs=JOBS, greet='Hej')

@app.route("/jobs")
def list_jobs():
    return jsonify(JOBS)
  
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)  
