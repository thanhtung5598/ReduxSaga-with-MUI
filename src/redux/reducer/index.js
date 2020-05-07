import { combineReducers } from 'redux';
import tasks from './tasks';
import ui from './ui';

const rootReducers = combineReducers({
  tasks,
  ui
});

export default rootReducers;
