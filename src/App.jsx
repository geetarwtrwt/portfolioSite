import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./component/Home";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-full font-Raleway bg-blackBg">
          <Nav />
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/about" exact={true} element={<About />} />
            <Route path="/portfolio" exact={true} element={<Portfolio />} />
            <Route path="/contact" exact={true} element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
