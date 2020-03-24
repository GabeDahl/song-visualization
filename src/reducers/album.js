import { GET_ALBUM } from '../actions'

export function getAlbum(state = {}, action) {
    switch (action.type) {
        case GET_ALBUM:
            const songs = action.songs
            const album = action.album
            return {...state, songs, album};
        default:
            return state
    }
}