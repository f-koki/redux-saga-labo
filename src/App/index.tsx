import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../component/Header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Header} />
    </BrowserRouter>
  );
};

export default App;
