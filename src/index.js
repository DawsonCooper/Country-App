// React imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

//Redux imports
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import logReducer from './reducers/logReducer';

// Component imports
import App from './App';
import Search from './components/Search/search'
import './index.css';

let store = configureStore({reducer: logReducer})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      <Routes>
        <Route path='/' element={
          <Provider store={store}>
            <App />
          </Provider>} />
          <Route path='/search' element={
          <Provider store={store}>
            <Search />
          </Provider>} />
      </Routes>
      
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
