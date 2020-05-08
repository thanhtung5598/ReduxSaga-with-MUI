import TASK_TYPE from './../../constants/task';
import { toastError } from './../../commons/toastHelper';

const initialState = {
  listTasks: []
};

const TasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_TYPE.FETCH_TASK_REQUEST: {
      return {
        ...state,
        listTasks: []
      };
    }
    case TASK_TYPE.FETCH_TASK_SUCCESS: {
      return {
        ...state,
        listTasks: action.payload
      };
    }
    case TASK_TYPE.FETCH_TASK_FAILURE: {
      toastError(action.payload);
      return {
        ...state,
        listTasks: []
      };
    }
    case TASK_TYPE.FILTER_TASK_SUCCESS: {
      const { data } = action.payload;
      console.log(data);
      return {
        ...state,
        listTasks: data
      };
    }
    default:
      return state;
  }
};

export default TasksReducer;
