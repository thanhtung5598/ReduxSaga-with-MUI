import TASK_TYPE from './../constants/task';

// START_FETCH_TASK
export const fetchListTaskRequrest = (params = {}) => {
  return {
    type: TASK_TYPE.FETCH_TASK_REQUEST,
    payload: {
      params
    }
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
// END_FETCH_TASK

// START_ADD_TASK
export const addTaskRequrest = data => {
  return {
    type: TASK_TYPE.ADD_TASK_REQUEST,
    payload: data
  };
};

export const addTaskSuccessed = data => {
  return {
    type: TASK_TYPE.ADD_TASK_SUCCESS,
    payload: {
      data
    }
  };
};

export const addTaskFailed = error => {
  return {
    type: TASK_TYPE.ADD_TASK_FAILURE,
    payload: error
  };
};
// END_ADD_TASK
// Update_TASK
export const updateTaskRequrest = data => {
  return {
    type: TASK_TYPE.UPDATE_TASK_REQUEST,
    payload: data
  };
};

export const updateTaskSuccessed = data => {
  return {
    type: TASK_TYPE.UPDATE_TASK_SUCCESS,
    payload: {
      data
    }
  };
};

export const updateTaskFailed = error => {
  return {
    type: TASK_TYPE.UPDATE_TASK_FAILURE,
    payload: error
  };
};
// Update task
// Filter_TASK
export const filterTask = keyword => {
  return {
    type: TASK_TYPE.FILTER_TASK_REQUEST,
    payload: {
      keyword
    }
  };
};

export const filterTaskSuccess = data => {
  return {
    type: TASK_TYPE.FILTER_TASK_SUCCESS,
    payload: {
      data
    }
  };
};
// End_Filter_TASK
export const setTaskEditting = task => {
  return {
    type: TASK_TYPE.SET_TASK_EDITTING,
    payload: {
      task
    }
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
