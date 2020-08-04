import isDetailsOpenReducer from './isDetailsOpenReducer'
import openOffers from './openOffers'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
    isDetailsOpen: isDetailsOpenReducer,
    openOffers
})

export default allReducers;