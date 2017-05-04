import getUserSaga from './userSaga';

export default function* rootSaga() {
  yield [
    getUserSaga(),
  ];
}
