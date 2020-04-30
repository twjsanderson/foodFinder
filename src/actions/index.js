import { 
    RECEIVED_RESTAURANTS, 
    REFINED_RESTAURANTS, 
    RESTAURANT_DETAILS, 
    MODAL_SHOW, 
    CURRENT_PAGE,
    TOTAL_ENTRIES
} from '../constants';
import axios from 'axios';

export const setModalShow = (value) => {
    return (dispatch) => {
        dispatch({ type: MODAL_SHOW, payload: value })
    } 
};

export const incrementRestaurants = () => {
    return (dispatch, getState) => {
        let current_page = getState().page,
            total_entries = getState().total_entries,
            current_city = getState().restaurants[0].city;
        if (current_page <= total_entries) {
            current_page++
            return axios.get(`http://opentable.herokuapp.com/api/restaurants?city=${current_city}&page=${current_page}`)
                .then(response => {
                    let restaurants = response.data.restaurants,
                        current_page = response.data.current_page;
                    dispatch({ type: CURRENT_PAGE, payload: current_page });
                    dispatch({ type: RECEIVED_RESTAURANTS, payload: restaurants });
                    dispatch({ type: REFINED_RESTAURANTS, payload: [] });
                })
                .catch(error => {
                    console.log('increment error: ', error)
                }) 
        }
    }
};

export const decrementRestaurants = () => {
    return (dispatch, getState) => {
        let current_page = getState().page,
            current_city = getState().restaurants[0].city;
        if (current_page > 1) {
            current_page--
            return axios.get(`http://opentable.herokuapp.com/api/restaurants?city=${current_city}&page=${current_page}`)
                .then(response => {
                    let restaurants = response.data.restaurants,
                        current_page = response.data.current_page;
                    dispatch({ type: CURRENT_PAGE, payload: current_page });
                    dispatch({ type: RECEIVED_RESTAURANTS, payload: restaurants });
                    dispatch({ type: REFINED_RESTAURANTS, payload: [] });
                })
                .catch(error => {
                    console.log('decrement error: ', error)
                })  
        }
    }
};

export const fetchRestaurant = (id) => {
    return (dispatch) => (
        axios.get(`http://opentable.herokuapp.com/api/restaurants/${id}`)
            .then(response => {
                let details = response.data;
                dispatch({ type: RESTAURANT_DETAILS, payload: details });
            })
            .catch(error => {
                console.log('fetchRestaurant error: ', error)
            })  
    )
}

export const fetchRestaurants = (city) => {
    return (dispatch) => {
        if (city.length > 0) {
            return axios.get(`http://opentable.herokuapp.com/api/restaurants?city=${city}`)
                .then(response => {
                    let restaurants = response.data.restaurants,
                        total_entries = response.data.total_entries,
                        current_page = response.data.current_page;
                    dispatch({ type: CURRENT_PAGE, payload: current_page });
                    dispatch({ type: TOTAL_ENTRIES, payload: total_entries });
                    dispatch({ type: RECEIVED_RESTAURANTS, payload: restaurants });
                    dispatch({ type: REFINED_RESTAURANTS, payload: [] });
                })
                .catch(error => {
                    console.log('fetchRestaurants error: ', error)
                })  
        } else {
            dispatch({ type: RECEIVED_RESTAURANTS, payload: [] });
            dispatch({ type: REFINED_RESTAURANTS, payload: [] });
        }
    }
};

export const refineSearch = (term) => {
    return async (dispatch, getState) => {
        let data = getState().restaurants;
        if (term && data) {
            let refinedData,
                nameBasedData = data.filter((restaurant) => restaurant.name.toLowerCase().includes(term.toLowerCase())),
                addressBasedData = data.filter((restaurant) => restaurant.address.toLowerCase().includes(term.toLowerCase())),
                areaBasedData = data.filter((restaurant) => restaurant.area.toLowerCase().includes(term.toLowerCase()));
            
            if (nameBasedData.length > 0) { 
                refinedData = nameBasedData;
            } else if (addressBasedData.length > 0) {
                refinedData = addressBasedData;
            } else if (areaBasedData.length > 0) {
                refinedData = areaBasedData;
            } else {
                refinedData = []
            }
            dispatch({ type: REFINED_RESTAURANTS, payload: refinedData });
        }
    }
};