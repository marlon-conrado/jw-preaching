import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Body from "./pages/Body/Body";

function App() {
  return (
    <>
      <BrowserRouter>
        <div
          style={{
            position: "fixed",
            width: "100%",
            left: "0",
            height: "60px",
            zIndex: 100
          }}
        >
          <Navbar />
        </div>
        <Body />
      </BrowserRouter>
    </>
  );
}

export default App;
