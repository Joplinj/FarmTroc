const openOffers = (state = false, action) => {
    switch (action.type) {
        case 'OPEN_OFFERS':
            return !state;
        default:
            return state;
    }
}

export default openOffers;