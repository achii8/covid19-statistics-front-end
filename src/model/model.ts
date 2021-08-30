
export interface UserData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface countryName {
    ka: string;
    en:string;
}

export interface Statistics {
    country: string;
    code: string;
    name: countryName;
    confirmed: number;
    recovered: string;
    critical: boolean;
    deaths: boolean;
    lastChange: Date;
    lastUpdate: Date;
}

export interface Countries {
    sortBy?: string; 
}

export enum ActionType {
    LOGIN_USER = 'action/LOGIN_USER',
    LOGIN_USER_SUCCESS = 'action/LOGIN_USER_SUCCESS',
    LOGIN_USER_ERROR = 'action/LOGIN_USER_ERROR',
    LOGOUT = 'action/LOGOUT',
    LOGOUT_SUCCESS = 'action/LOGOUT_SUCCESS',
    
    GET_COUNTRIES= 'action/GET_COUNTRIES ',
    GET_COUNTRIES_SUCCESS = 'action/GET_COUNTRIES_SUCCESS',
    GET_COUNTRIES_ERROR='action/GET_COUNTRIES_FAIL'
}

export interface Action<T> {
    type: ActionType;
    payload: T;
}

export interface LoginData {
    email: string | null;
    password: string | null;
}

export interface SearchData {
    searchData: string;
}
