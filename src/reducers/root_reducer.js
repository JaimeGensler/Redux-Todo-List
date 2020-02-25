export default (state = {}, action) => {
    const newState = { ...state };
    switch (action.type) {
        case 'ADD_ITEM':
            newState[action.item.id] = action.item;
            break;
        case 'CHECK_ITEM':
            newState[action.id].completed = true;
            break;
        case 'UNCHECK_ITEM':
            newState[action.id].completed = false;
            break;
        default:
            break;
    }
    return newState;
};
