import { MODAL_SHOW } from '../constants';

const reducer = (state = false, action) => {
    switch(action.type) {
        case MODAL_SHOW:
            return action.payload;
        default:
            return state;
    }
}; 

export default reducer;