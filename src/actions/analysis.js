import fetch from 'cross-fetch'
const apiURL = window.location.protocol + '//' + window.location.host + '/api/'

export const GET_ANALYSIS = 'ANALYSIS'

export function getAnalysis(songID) {
    return dispatch => {
        fetch(`${apiURL + 'song/' +  songID}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(json => dispatch({
            type: GET_ANALYSIS,
            analysis: json
        }))
    }
}