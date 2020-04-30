import { combineReducers } from 'redux';
import resultsReducer from './resultsReducer';
import refinedReducer from './refinedReducer';
import detailsReducer from './detailsReducer';
import modalReducer from './modalReducer';
import pageReducer from './pageReducer';
import entriesReducer from './entriesReducer';

const rootReducer = combineReducers({
    restaurants: resultsReducer,
    refined: refinedReducer,
    details: detailsReducer,
    modalShow: modalReducer,
    page: pageReducer,
    total_entries: entriesReducer
});

export default rootReducer;