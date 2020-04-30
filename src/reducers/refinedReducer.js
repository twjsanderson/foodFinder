import { REFINED_RESTAURANTS } from '../constants';

const reducer = (state = [], action) => {
    switch(action.type) {
        case REFINED_RESTAURANTS:
            return action.payload;
        default:
            return state;
    }
}; 

export default reducer;