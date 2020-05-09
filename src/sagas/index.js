import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  select,
  takeEvery
} from 'redux-saga/effects';
import TASK_TYPE from './../constants/task';
import * as taskApis from './../apis/task';
import { STATUS_CODE, addTask } from './../apis/task';
import {
  fetchListTaskSuccessed,
  fetchListTaskFailed,
  filterTaskSuccess,
  addTaskFailed,
  addTaskSuccessed
} from './../actions/task';
import { showLoading, hideLoading } from './../actions/ui';
import { hideModal } from '../actions/modal';

/**
 * fork , put : non-blocking
 * takeLatest : hay hơn fork, là phiên bản nâng cao của fork | chức năng dùng nhìu là search
 * không cần dùng endless loop như fork
 * take , call, delay : blocking
 * select : lấy data từ store
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
    yield delay(200);
    yield put(hideLoading());
  }
}

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  const list = yield select(state => state.tasks.listTasks);
  const filterTask = list.filter(task =>
    task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase())
  );
  yield put(filterTaskSuccess(filterTask));
}

function* addTaskSaga({ payload }) {
  const { title, description } = payload;
  yield put(showLoading());
  const resp = yield call(addTask, {
    title,
    description,
    status: 0
  });
  console.log(resp);
  const { data, status } = resp;
  if (status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccessed(data));
    yield put(hideModal());
  } else {
    yield put(addTaskFailed(data));
  }
  yield delay(500);
  yield put(hideLoading());
}

function* rootSaga() {
  yield fork(watchFetchListTaskActions); // tracking the action fetchList
  yield takeLatest(TASK_TYPE.FILTER_TASK_REQUEST, filterTaskSaga);
  yield takeEvery(TASK_TYPE.ADD_TASK_REQUEST, addTaskSaga);
}
// do non-blocking nên các process sẻ ko thực hiện tuần tự
// blocking là gọi tuần tự
export default rootSaga;
