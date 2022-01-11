import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./app/store";

import { HeroesSectionSearch } from "./features/Heroes";
import { NavBar } from "./features/NavBar";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <HeroesSectionSearch />
    </Provider>
  );
}

export default App;
