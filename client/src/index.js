import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
// import { store } from './app/store';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from "./features/Input/patientSlice"
import App from './App';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});



ReactDOM.render(
  <Provider store = {store}>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={ <App /> }>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


