import flask
import spotipy
import spotipy.util as util
from spotipy.oauth2 import SpotifyOAuth
import json

username='yomama1175'
scope = 'user-top-read'

app = flask.Flask(__name__, static_folder='./build/static', template_folder='./build')

sp = spotipy.Spotify(client_credentials_manager=SpotifyOAuth(scope=scope, cache_path='.cache-yomama1175'))
sp.trace = False

@app.route("/")
def index():
    return flask.render_template("index.html")

@app.route("/playlist/<playlist_id>")
def playlist_api(playlist_id):
    song_data = []


if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)

