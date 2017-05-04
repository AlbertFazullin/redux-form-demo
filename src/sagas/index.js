import { routinesWatcherSaga } from 'redux-saga-routines';

import getUserSaga from './userSaga';

export default function* rootSaga() {
  yield [
    getUserSaga(),
    routinesWatcherSaga(),
  ];
}
