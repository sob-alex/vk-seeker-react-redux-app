import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { paramsReducer } from './paramsReducer';
import { dataReducer } from './dataReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  params: paramsReducer,
  data: dataReducer,
});
