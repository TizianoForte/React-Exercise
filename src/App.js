import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";




export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="Tiziano" />} />
      </Routes>
    </div>
  );
}