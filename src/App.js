import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/Layout";

import { ROUTES } from "./helpers/constants";


import './App.css';

function App() {
  return (
      <Routes>
          <Route path="/" element={<Layout />}>
              {
                  ROUTES.map((route, i) => {
                      const Element = route.element;
                      if (route.path === '') {
                          return <Route key={i} index element={<Element />} />
                      } else {
                          return <Route key={i} path={route.path} element={<Element />} />
                      }
                  })
              }
          </Route>
      </Routes>
  );
}

export default App;
