import React from 'react';
import { SiteLayout } from '../SiteLayout';
import {
  BrowserRouter
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <SiteLayout />
    </BrowserRouter>
  );
}

export default App;
