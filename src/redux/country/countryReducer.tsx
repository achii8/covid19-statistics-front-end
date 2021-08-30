import { Action, ActionType, UserData } from "../../model/model";
import createReducer from "../createReducer";
export interface StatisticsType{
  id: number;
  code: string;
  country: string;
  confirmed: number;
  recovered: number;
  critical: number;
  deaths: number;
  lastChange: Date;
  lastUpdate: Date;
}
export interface CountryNameType {
  ka: string;
  en: string;
}
export interface CountryType{
  id: number;
  code: string;
  name: CountryNameType;
  statistics: StatisticsType;
}

export interface StatisticsListType {
  statistics: CountryType[];
  loading: boolean;
  error?: string;
}

const defaultState: StatisticsListType = {
  statistics: [],
  loading: false,
  error: undefined,
}

export const countryReducer = createReducer<StatisticsListType>(defaultState, {

  [ActionType.GET_COUNTRIES](state:StatisticsListType, action: Action<string>) {
    return {
      ...state,
      loading: true,
    };
  },

  [ActionType.GET_COUNTRIES_ERROR](state: StatisticsListType, action: Action<string>) {
  
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  },

  [ActionType.GET_COUNTRIES_SUCCESS](state: StatisticsListType, action: Action<string>) {
    return {
      ...state,
      loading: false,
      error: null,
      statistics: action.payload
    };
  },

});
export const countryCardsSelector = (state: StatisticsListType)=>{
  let deaths = 0;
  let confirmed = 0;
  let recovered = 0;
  let critical = 0;
  state.statistics.forEach(element => {
    deaths += element.statistics.deaths;
    confirmed += element.statistics.confirmed;
    recovered += element.statistics.recovered;
    critical += element.statistics.critical;
  });
  return {
    deaths,
    confirmed,
    recovered,
    critical
  }
}