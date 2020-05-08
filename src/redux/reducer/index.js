import { combineReducers } from 'redux';
import tasks from './tasks';
import ui from './ui';
import modal from './modal';

const rootReducers = combineReducers({
  tasks,
  ui,
  modal
});

export default rootReducers;
