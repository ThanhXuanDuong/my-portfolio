import React from 'react';
import './App.css';
import Root from "./pages/Root";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <>
        <BrowserRouter>
          <Root/>
        </BrowserRouter>
      </>


  );
}

export default App;
