import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SimpleMap from "./components/SimpleMap";
import Widget from "./components/Widget";
import CityDetails from "./components/CityDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/city/:id" element={<CityDetails />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <SimpleMap />
      <Widget />
    </div>
  );
}

export default App;
