import { useState, useEffect } from "react";
import "./App.scss";
import Board from "./components/Board/Board";
import Question from "./components/Question/Question";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/:questionInfo' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
