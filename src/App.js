import React from 'react';
import "./libs/FontAwesomeIcons"
import "./assets/css/App.css";
import TopBar from "./components/TopBar/TopBar";
import CardList from "./components/CardList/CardList";

function App() {
  return (
    <div className="App">
      <TopBar/>
      <CardList/>
    </div>
  );
}

export default App;
