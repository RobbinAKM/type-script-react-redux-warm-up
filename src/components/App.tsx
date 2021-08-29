import React from "react";
import { Provider } from "react-redux";
import { store } from "../state";
import SearchList from "./SearchList";

const App = () => {
  return (
    <Provider store={store}>
      <h1>Please Search For A Package</h1>
      <SearchList />
    </Provider>
  );
};

export default App;
