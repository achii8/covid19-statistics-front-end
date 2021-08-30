import { Reducer } from "redux";
import { Action } from "../model/model";

export default function createReducer<S>(
	initialState: S,
	handlers: any
): Reducer<S> {
	const r = (state: S = initialState, action: Action<S>): S => {
		// eslint-disable-next-line no-prototype-builtins
		if (handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action);
		} else {
			return state;
		}
	};

	return r as Reducer<S>;
}
