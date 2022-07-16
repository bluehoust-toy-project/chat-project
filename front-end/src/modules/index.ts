import { combineReducers } from 'redux';
import friend from './friend';
import user from './user';
import inputs from './inputs';

const rootReducer = combineReducers({
  friend,
  user,
  inputs,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
