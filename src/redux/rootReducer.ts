import { History } from "history";
import { combineReducers } from "redux";
import { routerReducer, RouterState } from "react-router-redux";
import { authenticationReducer, AuthenticationReducerType } from '../redux/authentication/authenticationReducer';
import { countryReducer, StatisticsListType } from "../redux/country/countryReducer";

export interface RootState {
	loginForm: AuthenticationReducerType,
	countryReducer: StatisticsListType,
	routerReducer: RouterState,
}

export default (history: History) =>
	combineReducers({
		loginForm: authenticationReducer,
		countryReducer: countryReducer,
		routerReducer,
});
