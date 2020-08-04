const initState = {
    opened: false,
    type: ""
}

const openOffers = (state = initState, action) => {
    switch (action.type) {
        case 'OPEN_OFFERS':
            if (state.opened && state.type === action.payload) {
                return {
                    ...state,
                    opened: false
                }
            }
            else if (state.opened && state.type !== action.payload) {
                return {
                    ...state,
                    opened: true,
                    type: action.payload
                }
            }
            else {
                return {
                    ...state,
                    opened: !state.opened,
                    type: action.payload
                }
            }
        default:
            return state;
    }
}

export default openOffers;