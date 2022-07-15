import { combineReducers } from 'redux';
import friend from './friend';
import user from './user';

const rootReducer = combineReducers({
  friend,
  user,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
