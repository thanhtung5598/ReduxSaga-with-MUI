import TASK_TYPE from './../../constants/task';
import { toastError } from './../../commons/toastHelper';

const initialState = {
  listTasks: []
};

const Tasks = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default Tasks;
