import { GET_ANALYSIS } from '../actions'

export function getAnalysis(state = {}, action) {
    switch (action.type) {
        case GET_ANALYSIS:
            console.log(action)
            const bars = action.analysis.bars
            const beats = action.analysis.beats
            const sections = action.analysis.sections
            const segments = action.analysis.segments
            const tatums = action.analysis.tatums
            const name = action.analysis.name.name
            const artist = action.analysis.name.artists[0].name
            const albumURL = action.analysis.name.album.images[1].url
            return {...state, bars, beats, sections, segments, tatums, name, artist, albumURL};
        default:
            return state
    }
}