import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./component/Header";
import TodoList from "./containers/TodoList";
import { Provider } from "react-redux";
import { store } from "./store";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Header} />
        <Route exact path="/todo-list" component={TodoList} />
      </BrowserRouter>
    </Provider>
  );
};
