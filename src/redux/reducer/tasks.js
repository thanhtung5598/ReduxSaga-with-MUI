import TASK_TYPE from './../../constants/task';
import { toastError } from './../../commons/toastHelper';

const initialState = {
  listTasks: [],
  taskEditting: null,
  error: null
};

const TasksReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TASK_TYPE.FETCH_TASK_REQUEST: {
      return {
        ...state,
        listTasks: []
      };
    }
    case TASK_TYPE.FETCH_TASK_SUCCESS: {
      return {
        ...state,
        listTasks: actions.payload
      };
    }
    case TASK_TYPE.FETCH_TASK_FAILURE: {
      toastError(actions.payload);
      return {
        ...state,
        error: actions.payload
      };
    }
    case TASK_TYPE.FILTER_TASK_SUCCESS: {
      const { data } = actions.payload;
      return {
        ...state,
        listTasks: data
      };
    }
    case TASK_TYPE.ADD_TASK_REQUEST: {
      return {
        ...state
      };
    }
    case TASK_TYPE.ADD_TASK_SUCCESS: {
      const { data } = actions.payload;
      return {
        ...state,
        listTasks: [data].concat(state.listTasks)
      };
    }
    case TASK_TYPE.SET_TASK_EDITTING: {
      const { task } = actions.payload;
      return {
        ...state,
        taskEditting: task
      };
    }
    case TASK_TYPE.ADD_TASK_FAILURE: {
      toastError(actions.payload);
      return {
        ...state,
        error: actions.payload
      };
    }
    default:
      return state;
  }
};

export default TasksReducer;
