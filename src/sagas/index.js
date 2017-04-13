import { fetchCompaniesSaga, searchParamsSaga, searchJobsSaga } from './jobsSaga';
import { getUserSaga, changeLocaleSaga } from './userSaga';

export default function* rootSaga() {
  yield [
    getUserSaga(),
    changeLocaleSaga(),
    fetchCompaniesSaga(),
    searchJobsSaga(),
    searchParamsSaga(),
  ];
}
