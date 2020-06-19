import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../component/Header";
import TodoList from "../containers/TodoList";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Header} />
      <Route exact path="/todo-list" component={TodoList} />
    </BrowserRouter>
  );
};

export default App;
