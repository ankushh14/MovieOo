import { combineReducers } from 'redux';
import themeReduceer from './reducer';

const mainReducer = combineReducers({
  theme: themeReduceer,
});

export default mainReducer;