import flask
import spotipy
import spotipy.util as util
from spotipy.oauth2 import SpotifyOAuth
import json

username='yomama1175'
scope = 'user-top-read'

app = flask.Flask(__name__, static_folder='./build/static', template_folder='./build')

util.prompt_for_user_token(username,
                           scope,
                           client_id='7ec7cb0a86f144dd80ec7a6f6e1af76f',
                           client_secret='acd12ab771124e21bc43ccef11a0cab4',
                           redirect_uri='https://google.com')

sp = spotipy.Spotify(client_credentials_manager=SpotifyOAuth(scope=scope, cache_path='.cache-yomama1175')
sp.trace = False

@app.route("/")
def index():
    return flask.render_template("index.html")

@app.route("/api/song/<songID>/")
def song_api(songID):
    analysis = sp.audio_analysis(songID)
    name = sp.track(songID)

    new_analysis = analysis.copy()
    new_analysis['name'] = name
    del new_analysis['segments']
    new_analysis['segments'] = []
    for segment in analysis['segments']:
        new_segment = segment.copy()
        
        del new_segment['start']
        new_segment['start'] = round(segment['start'], 2)
        
        del new_segment['pitches']
        new_segment['pitches'] = []
        pitchTotal = 0
        for pitch in segment['pitches']:
            pitchTotal += pitch

        for pitch in segment['pitches']:
            pitch = pitch / pitchTotal * 100
            new_segment['pitches'].append(pitch)
        new_analysis['segments'].append(new_segment)
    
    return new_analysis

@app.route("/api/search/<query>/")
def track_search(query):
    search = sp.search(query, type='track')
    return search

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)

