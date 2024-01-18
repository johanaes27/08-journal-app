// import React from 'react';
// import ReactDOM, { createRoot } from 'react-dom/client';

// import { JournalApp } from './JournalApp';
// import './styles.css';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { AppRouter } from './router/AppRouter';
// import { Provider } from 'react-redux';
// import { store } from './store';

// const router = createBrowserRouter(AppRouter);
 
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={ store }>
//     <AppTheme>
//     <RouterProvider router={router} />
//     </AppTheme>
//     </Provider>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { JournalApp } from "./JournalApp.jsx";
import { Provider } from "react-redux";
 
import { AppTheme } from "./theme";
import { store } from "./store";
 
import "./styles.css";
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <JournalApp />
      </AppTheme>
    </Provider>
  </React.StrictMode>
);



