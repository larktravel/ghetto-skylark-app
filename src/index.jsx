import React from 'react';
import ReactDOM from 'react-dom';
import {getHotel} from './actions/hotel-action';
import {HotelContainer} from './components/Hotel';
import {Router, Route, hashHistory} from 'react-router';
import {App} from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import httpReducer from './utils/reducers';
import { fetchHotel } from './utils/actions';

const store = createStore(
  // reducer,
  combineReducers({reducer, httpReducer}),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

store.dispatch(fetchHotel())

// getHotel()
// .then(function(response) {
//     return response.json()
//   }).then(function(json) {
//     console.log('parsed json', json)
//     store.dispatch({
//       type: 'SET_STATE',
//       state: json
//     })
//   }).catch(function(ex) {
//     console.log('parsing failed', ex)
//   })

const routes = <Route component={App}>
  <Route path="/" component={HotelContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
   </Provider>,
  document.getElementById('app')
);