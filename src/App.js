import React from "react";
import { BrowserRouter } from "react-router-dom";

import ConditionalRoute from "./components/ConditionalRoute/ConditionalRoute";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ConditionalRoute />
      </BrowserRouter>
    );
  }
}

export default App;
