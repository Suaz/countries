import {combineReducers, createStore} from 'redux';
import countryReducer from "./country/reducer";

const rootReducer = combineReducers({
	country: countryReducer,
});

const store = createStore(rootReducer);

export default store;