import fetch from "cross-fetch"
const apiURL = window.location.protocol + "//" + window.location.host 

export const GET_ALBUM = "GET_ALBUM"

export function getAlbum(albumID) {
    return dispatch => {
        fetch(`${apiURL + "/album/" + albumID}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(json => 
            dispatch({
            type: GET_ALBUM,
            songs: json.songs,
            album: json.album
        }))
    }
}