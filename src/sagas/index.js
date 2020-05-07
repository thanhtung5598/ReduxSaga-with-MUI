import { fork, take, call, put, delay } from 'redux-saga/effects';
import TASK_TYPE from './../constants/task';
import * as taskApis from './../apis/task';
import { STATUS_CODE } from './../apis/task';
import { fetchListTaskSuccessed, fetchListTaskFailed } from './../actions/task';
import { showLoading, hideLoading } from './../actions/ui';

/**
 * fork , put : non-blocking
 * takeLatest : hay hơn fork, là phiên bản nâng cao của fork | chức năng dùng nhìu là search
 * không cần dùng endless loop như fork
 * take , call, delay : blocking
 */

function* watchFetchListTaskActions() {
  while (true) {
    yield take(TASK_TYPE.FETCH_TASK_REQUEST); // chỉ theo dỏi 1 lần
    yield put(showLoading());
    const resp = yield call(taskApis.getList);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccessed(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }
    yield delay(500);
    yield put(hideLoading());
  }
}

function* rootSaga() {
  yield fork(watchFetchListTaskActions); // tracking the action fetchList
}
// do non-blocking nên các process sẻ ko thực hiện tuần tự
// blocking là gọi tuần tự
export default rootSaga;
