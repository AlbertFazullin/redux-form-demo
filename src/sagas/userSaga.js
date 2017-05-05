import getUser from '../api';
import { SubmissionError } from 'redux-form';

import { put, takeLatest, call } from 'redux-saga/effects';
import { routine } from '../redux/userDuck';

export default function* () {
  yield takeLatest(routine.TRIGGER, callGetUser);
}

function* callGetUser({ payload: { username }}) {
  try {
    yield put(routine.request());
    const res = yield call(getUser, username);
    yield put(routine.success(res.body));
  } catch (e) {
    yield put(routine.failure(new SubmissionError({ username: e.message })));
  } finally {
    yield put(routine.fulfill());
  }
}
