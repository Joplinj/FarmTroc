import isDetailsOpenReducer from './isDetailsOpenReducer'
import openOffers from './openOffers'
import dataCurrentUser from './dataCurrentUser'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
    isDetailsOpen: isDetailsOpenReducer,
    openOffers,
    currentUser : dataCurrentUser
})

export default allReducers;