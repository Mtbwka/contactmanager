import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager1" />
        <Contact />
      </div>
    );
  }
}

export default App;
