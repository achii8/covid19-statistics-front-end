import { all } from 'redux-saga/effects';

import authenticationSagas from './authentication/authenticationSaga';
import countrySagas from './country/countrySaga';

export default function* startForman() {
  yield all([
    ...authenticationSagas,
    ...countrySagas,
  ]);
}