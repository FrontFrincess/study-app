import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Test from "./Test";
import Detail from "./Detail";
import Repo from "./Repo";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/:path" element={<Detail />} />
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Repo />} />
      </Routes>
    </BrowserRouter>
  );
}
