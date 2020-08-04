export const openDetails = (item) => {
    return {
        type: 'DETAILS_OPEN',
        payload: item
    };
};

export const openOffers = () => {
    return {
        type: 'OPEN_OFFERS',
    };
};