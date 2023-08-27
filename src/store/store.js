import { createStore } from 'react-redux';
import mainReducer from './reducers/index'

const store = createStore(mainReducer);

export default store;
