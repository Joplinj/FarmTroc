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
            return {
                ...state,
                opened: !state.opened,
                item: action.payload

            }
        default:
            return state;
    }
}

export default isDetailsOpenReducer;