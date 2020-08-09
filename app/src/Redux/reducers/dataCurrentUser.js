const initState = {}

const dataCurrentUser = (state = initState, action) => {
    switch (action.type) {
        case 'CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default dataCurrentUser;