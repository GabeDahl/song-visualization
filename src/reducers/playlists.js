import { GET_PLAYLIST } from '../actions'

export function getPlaylist(state = {}, action) {
    switch (action.type) {
        case GET_PLAYLIST:
            const songs = action.songs
            const playlist = action.playlist
            return {...state, songs, playlist};
        default:
            return state
    }
}