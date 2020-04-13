import fetch from 'cross-fetch'
const apiURL = window.location.protocol + '//' + window.location.host + '/api/'

export const SEARCH = 'SEARCH'

export function search(query) {
    return dispatch => {
        fetch(`${apiURL + 'search/' + query}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(json => dispatch({
            type: SEARCH,
            results: json
        }))
    }
}