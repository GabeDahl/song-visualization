import { combineReducers } from 'redux'

import { getAnalysis } from './analysis'
import {search} from './search'

const rootReducer = combineReducers({
    analysis: getAnalysis,
    searchResults: search
})

export default rootReducer