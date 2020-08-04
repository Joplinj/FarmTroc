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