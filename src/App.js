import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="Tiziano" />} />
        <Route path="/counter" element={<Counter/>} />
      </Routes>
    </div>
  );
}