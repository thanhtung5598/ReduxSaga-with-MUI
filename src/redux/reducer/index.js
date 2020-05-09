import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import tasks from './tasks';
import ui from './ui';
import modal from './modal';

const rootReducers = combineReducers({
  form: formReducer,
  tasks,
  ui,
  modal
});

export default rootReducers;
