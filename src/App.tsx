import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Body from "./pages/Body/Body";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Body />
      </BrowserRouter>
    </>
  );
}

export default App;
