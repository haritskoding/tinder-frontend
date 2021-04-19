import React from "react"
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from "./components/SwipeButtons"
import './App.css';
import ComponentTinder from "./components/ComponentTinder";

function App() {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ComponentTinder />
      </div>
    </div >
  );
}

export default App;
