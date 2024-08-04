import React from "react";
import "w3-css/w3.css";
import HomePage from "./pages/HomePage";
import NavigationComponent from "./components/Navigation";

const App = () => {
  return (
    <div className="w3-mobile" style={{ flex: 1 }}>
      {/* <HomePage /> */}
      <NavigationComponent />
    </div>
  );
};

export default App;
