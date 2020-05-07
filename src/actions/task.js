import TASK_TYPE from './../constants/task';

export const fetchListTaskRequrest = () => {
  return {
    type: TASK_TYPE.FETCH_TASK_REQUEST
  };
};

export const fetchListTaskSuccessed = data => {
  return {
    type: TASK_TYPE.FETCH_TASK_SUCCESS,
    payload: data
  };
};

export const fetchListTaskFailed = error => {
  return {
    type: TASK_TYPE.FETCH_TASK_FAILURE,
    payload: error
  };
};

// export const fetchListTask = () => dispatch => {
//   dispatch(fetchListTaskRequrest());
//   taskApis
//     .getList()
//     .then(data => {
//       dispatch(fetchListTaskSuccessed(data.data));
//     })
//     .catch(error => {
//       dispatch(fetchListTaskFailed(error));
//     });
// };
