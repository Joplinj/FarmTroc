const initState = {
    opened: false,
    item: {
        title: "",
        image_path: "",
        description: "",
        marker_Color: "",
        bio: true,
        lat: "",
        lng: "",
        note: 0,
        vote: 0,
        offers: [
            {
                type: "",
                title: "",
                quantity: 0,
                bio: true,
                picked_date: "",
                variety: ""
            }
        ]
    }
}

const isDetailsOpenReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DETAILS_OPEN':
            if (state.opened && state.item === action.payload) {
                return state
            }
            else if (state.opened && state.item !== action.payload) {
                return {
                    ...state,
                    opened: true,
                    item: action.payload
                }
            }
            else {
                return {
                    ...state,
                    opened: !state.opened,
                    item: action.payload

                }
            }
        default:
            return state;
    }
}

export default isDetailsOpenReducer;