import { RESTAURANT_DETAILS } from '../constants';

const reducer = (state = [], action) => {
    switch(action.type) {
        case RESTAURANT_DETAILS:
            return action.payload;
        default:
            return state;
    }
}; 

export default reducer;