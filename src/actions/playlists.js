import fetch from "cross-fetch"
const apiURL = window.location.protocol + "//" + window.location.host 

export const GET_PLAYLIST = "PLAYLIST"

export function getPlaylist(playlistID) {
    return dispatch => {
        fetch(`${apiURL + "/playlist/" + playlistID}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(json => 
            dispatch({
            type: GET_PLAYLIST,
            songs: json.songs,
            playlist: json.playlist
        }))
    }
}