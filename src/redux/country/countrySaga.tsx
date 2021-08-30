import { put, takeLatest, fork, call, takeEvery } from 'redux-saga/effects';
import { createApiCall, MethodType, countriesRoute } from '../../services/Api';
import { ActionType } from '../../model/model';

export interface ResponseGenerator{
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  success?:boolean,
  statusText?:string
}


function* getCountrySaga() {
  try {
    const response: ResponseGenerator = yield call(
      createApiCall, { method: MethodType.GET, url: countriesRoute}
    );
    if (response) {
      yield put({ type: ActionType.GET_COUNTRIES_SUCCESS, payload: response});
    } else {
      yield put({ type: ActionType.GET_COUNTRIES_ERROR, payload: 'error' })
    }
  } catch (error) {
    yield put({ type: ActionType.GET_COUNTRIES_ERROR, payload: 'error' })
  }
}

function* onGetCountriesWatcher() {
  yield takeLatest(ActionType.GET_COUNTRIES as any, getCountrySaga);
}
export default [
  fork(onGetCountriesWatcher)
];