import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import TodoList from "../pages/TodoList";
import Details from "../pages/Details";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/details" element={<Details />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;