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

@app.route("/api/song/<songID>/")
def song_api(songID):
    analysis = sp.audio_analysis(songID)

    new_analysis = analysis.copy()
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

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)

