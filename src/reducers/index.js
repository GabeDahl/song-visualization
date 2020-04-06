import { combineReducers } from 'redux'

import { getAnalysis } from './analysis'

const rootReducer = combineReducers({
    analysis: getAnalysis
})

export default rootReducer