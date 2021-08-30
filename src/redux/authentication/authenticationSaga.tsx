import { put, takeLatest, fork, call } from 'redux-saga/effects';
import { createApiCall, loginRoute, MethodType } from '../../services/Api';
import { removeCookie, setCookie } from '../../utils/cookies';
import { LoginData, ActionType } from '../../model/model';

export interface ResponseGenerator{
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  userData: string,
  token:string,
  isLoggedIn: boolean,
  statusText?:string
}

function* loginSaga({ payload }: { payload: LoginData }) {
  try {
    const response:ResponseGenerator = yield call(
      createApiCall, { method: MethodType.POST, url: loginRoute, data: payload }
    );
    if (response.token) {
      setCookie('token', response.token);
      yield put({ type: ActionType.LOGIN_USER_SUCCESS, payload: response.token});
    } else {
      yield put({ type: ActionType.LOGIN_USER_ERROR, payload: 'error' })
    }
  } catch (error) {
    yield put({ type: ActionType.LOGIN_USER_ERROR, payload: 'error' })
  }
}
function* logoutSaga() {
  removeCookie('token');
  yield put({ type: ActionType.LOGOUT_SUCCESS})
}
function* onLoginSubmitWatcher() {
  yield takeLatest(ActionType.LOGIN_USER as any, loginSaga);
}
function* onLogoutWatcher() {
  yield takeLatest(ActionType.LOGOUT as any, logoutSaga);
}

export default [
  fork(onLoginSubmitWatcher),
  fork(onLogoutWatcher)
];