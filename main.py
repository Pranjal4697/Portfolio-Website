
#Retrive top 4 repositories of a user from github
import requests
import json
from flask import Flask,render_template,redirect
app = Flask(__name__)

def get_top_repos(username):
    url = f"https://api.github.com/users/{username}/repos"
    response = requests.get(url)
    if response.status_code != 200:
        raise Exception(f"Request to GitHub API failed with status {response.status_code}")
    repos = response.json()
    if isinstance(repos, dict):
        raise Exception(f"Expected a list of repositories but got a dictionary: {repos}")
    repos.sort(key=lambda x: x['stargazers_count'], reverse=True)
    return repos[:4]


   
@app.route('/')
def home():
     with app.app_context():
        repos = get_top_repos("pranjal4697")
        for repo in repos:
            print(f"Repo: {repo['name']}, Stars: {repo['stargazers_count']}, Forks: {repo['forks_count']}")

     return render_template('home.html',repos=repos)
        

if __name__ == "__main__":
    app.run(debug=True)