import { TOTAL_ENTRIES } from '../constants';

const reducer = (state = [], action) => {
    switch(action.type) {
        case TOTAL_ENTRIES:
            return action.payload;
        default:
            return state;
    }
}; 

export default reducer;