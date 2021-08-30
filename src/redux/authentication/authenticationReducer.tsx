import { Action, ActionType, LoginData } from "../../model/model";
import createReducer from "../createReducer";


export interface AuthenticationReducerType {
  email: string;
  loading: boolean;
  error?: string;
  token: string;
  isLoggedIn: boolean;
}

const defaultState: AuthenticationReducerType = {
  email: '',
  loading: false,
  error: undefined,
  token: '',
  isLoggedIn: false,
}

export const authenticationReducer = createReducer<AuthenticationReducerType>(defaultState, {

  [ActionType.LOGIN_USER](state:AuthenticationReducerType, action: Action<LoginData>) {
    return {
      ...state,
      loading: true,
      isLoggedIn: false,
    };
  },

  [ActionType.LOGIN_USER_ERROR](state: AuthenticationReducerType, action: Action<string>) {
  
    return {
      ...state,
      loading: false,
      isLoggedIn: false,
      error: action.payload,
    };
  },

  [ActionType.LOGIN_USER_SUCCESS](state: AuthenticationReducerType, action: Action<string>) {
    return {
      ...state,
      loading: false,
      error: null,
      isLoggedIn: true,
      token: action.payload,
      
    };
  },

  [ActionType.LOGOUT](state: AuthenticationReducerType, action: Action<string>) {
    return {
      ...state,
      loading: false,
      error: null,
    };
  },
  [ActionType.LOGOUT_SUCCESS](state: AuthenticationReducerType, action: Action<string>) {
    return {
      ...state,
      loading: false,
      error: null,
      isLoggedIn: false,
      token: null,
    };
  },
});
