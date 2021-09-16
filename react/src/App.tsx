import * as React from "react";
import "./App.css";
import List from "./components/Product/List";

const App = () => {
  return (
    <div className="App">
      <React.Suspense fallback="loading">
        <List />
      </React.Suspense>
    </div>
  );
};

export default App;
