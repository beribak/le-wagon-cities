// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import '../assets/stylesheets/application.scss';

import setCitiesReducer from './reducers/set_cities_reducer';
// import setCitiesReducer from './reducers/set_cities_reducer';

// internal modules
import App from './components/app';

// State and reduucers
const reducers = combineReducers({
  cities: setCitiesReducer,
  // selectedCity: selectedCityReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
