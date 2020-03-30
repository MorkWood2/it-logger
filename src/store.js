//all of our actions and reducers attached to this store file
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
//an array of middleware
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  //so we can see middleware in redux devtools functinality
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
