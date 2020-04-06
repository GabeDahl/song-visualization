import { GET_ANALYSIS } from '../actions'

export function getAnalysis(state = {}, action) {
    switch (action.type) {
        case GET_ANALYSIS:
            const bars = action.analysis.bars
            const beats = action.analysis.beats
            const sections = action.analysis.sections
            const segments = action.analysis.segments
            const tatums = action.analysis.tatums
            return {...state, bars, beats, sections, segments, tatums};
        default:
            return state
    }
}