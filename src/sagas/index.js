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
import { STATUS_CODE, addTask, updateTask, deleteTask } from './../apis/task';
import {
  fetchListTaskSuccessed,
  fetchListTaskFailed,
  // filterTaskSuccess,
  addTaskFailed,
  addTaskSuccessed,
  updateTaskSuccessed,
  updateTaskFailed,
  deleteTaskSuccessed,
  deleteTaskFailed
} from './../actions/task';
import { showLoading, hideLoading } from './../actions/ui';
import { fetchListTaskRequrest } from './../actions/task';
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
    const action = yield take(TASK_TYPE.FETCH_TASK_REQUEST); // chỉ theo dỏi 1 lần
    const { params } = action.payload;
    const resp = yield call(taskApis.getList, params);
    yield put(showLoading());
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

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  yield put(fetchListTaskRequrest({ q: keyword }));
  // const list = yield select(state => state.tasks.listTasks); filter task trên redux store
  // const filterTask = list.filter(task =>
  //   task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase())
  // );
  // yield put(filterTaskSuccess(filterTask));
}

function* addTaskSaga({ payload }) {
  const { title, description } = payload;
  yield put(showLoading());
  const resp = yield call(addTask, {
    title,
    description,
    status: 0
  });
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

function* updateTaskSaga({ payload }) {
  const { title, description, status } = payload;
  const taskEditting = yield select(state => state.tasks.taskEditting); // get id of the task we want to modify
  yield put(showLoading());
  const resp = yield call(
    updateTask,
    { title, description, status },
    taskEditting.id
  ); // call API
  const { data, status: Status_Code } = resp;
  if (Status_Code === STATUS_CODE.SUCCESS) {
    yield put(updateTaskSuccessed(data));
    yield put(hideModal());
  } else {
    yield put(updateTaskFailed(data));
  }
  yield delay(500);
  yield put(hideLoading());
}

function* deleteTaskSaga({ payload }) {
  const { id } = payload;
  const resp = yield call(deleteTask, id); // call API deleteTask
  yield put(showLoading());
  const { data, status: Status_Code } = resp;
  if (Status_Code === STATUS_CODE.SUCCESS) {
    yield put(deleteTaskSuccessed(id));
    yield put(hideModal());
  } else {
    yield put(deleteTaskFailed(data));
  }
  yield delay(500);
  yield put(hideLoading());
}

function* rootSaga() {
  yield fork(watchFetchListTaskActions); // tracking the action fetchList
  yield takeLatest(TASK_TYPE.FILTER_TASK_REQUEST, filterTaskSaga);
  yield takeEvery(TASK_TYPE.ADD_TASK_REQUEST, addTaskSaga);
  yield takeEvery(TASK_TYPE.UPDATE_TASK_REQUEST, updateTaskSaga);
  yield takeEvery(TASK_TYPE.DELETE_TASK_REQUEST, deleteTaskSaga);
}
// do non-blocking nên các process sẻ ko thực hiện tuần tự
// blocking là gọi tuần tự
export default rootSaga;
