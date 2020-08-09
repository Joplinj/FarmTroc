export const openDetails = (item) => {
    return {
        type: 'DETAILS_OPEN',
        payload: item
    };
};

export const openOffers = (type) => {
    return {
        type: 'OPEN_OFFERS',
        payload: type
    };
};

export const currentUser = (item) => {
    return {
        type: 'CURRENT_USER',
        payload: item
    };
};