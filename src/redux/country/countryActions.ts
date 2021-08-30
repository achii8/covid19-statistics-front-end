import { ActionType, Countries } from '../../model/model';

export const getStatistics = () => {
  return {
    type: ActionType.GET_COUNTRIES
  }
};
