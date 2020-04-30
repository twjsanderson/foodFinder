import { CURRENT_PAGE } from '../constants';

const reducer = (state = [], action) => {
    switch(action.type) {
        case CURRENT_PAGE:
            return action.payload;
        default:
            return state;
    }
}; 

export default reducer;