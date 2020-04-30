import { RECEIVED_RESTAURANTS } from '../constants';

const reducer = (state = [], action) => {
    switch(action.type) {
        case RECEIVED_RESTAURANTS:
            return action.payload;
        default:
            return state;
    }
}; 

export default reducer;