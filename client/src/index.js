import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import App from './App';
import { store } from './App/store';
import { Provider } from 'react-redux';




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
    <BrowserRouter>
      <Routes>
          <Route path="*" element={ <App /> }>
          </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


