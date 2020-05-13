import TASK_TYPE from './../../constants/task';
import { toastError, toastSuccess } from './../../commons/toastHelper';

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
      toastSuccess('Thêm thành công');
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
    case TASK_TYPE.UPDATE_TASK_REQUEST: {
      return {
        ...state
      };
    }
    case TASK_TYPE.UPDATE_TASK_SUCCESS: {
      const { data } = actions.payload;
      const { listTasks } = state;
      const index = listTasks.findIndex(item => item.id === data.id);
      if (index !== -1) {
        const newList = [
          ...listTasks.slice(0, index),
          data,
          ...listTasks.slice(index + 1)
        ];
        toastSuccess('cập nhật thành công');
        return {
          ...state,
          listTasks: newList
        };
      }
      return {
        ...state
      };
    }
    case TASK_TYPE.UPDATE_TASK_FAILURE: {
      toastError(actions.payload);
      return {
        ...state,
        error: actions.payload
      };
    }
    case TASK_TYPE.DELETE_TASK_REQUEST: {
      return {
        ...state
      };
    }
    case TASK_TYPE.DELETE_TASK_SUCCESS: {
      const { data: taskID } = actions.payload;
      toastSuccess('xóa thành công');
      return {
        ...state,
        listTasks: state.listTasks.filter(item => item.id !== taskID)
      };
    }
    case TASK_TYPE.DELETE_TASK_FAILURE: {
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
