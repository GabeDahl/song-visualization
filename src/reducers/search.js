import { SEARCH } from '../actions'

export function search(state = {}, action) {
    switch (action.type) {
        case SEARCH:
            const searchResults = action.results.tracks.items
            return {...state, searchResults};
        default:
            return state
    }
}