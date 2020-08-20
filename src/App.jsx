import React from "react";
import "./libs/FontAwesomeIcons";
import "./assets/css/App.css";
import TopBar from "./components/TopBar/TopBar";
import CardList from "./components/CardList/CardList";

import { Provider } from "react-redux";
import generateStore from "./redux/redux";

function App() {

  const store = generateStore();

  return (
    <Provider store={store}>
      <TopBar />
      <CardList />
    </Provider>
  );
}

export default App;
