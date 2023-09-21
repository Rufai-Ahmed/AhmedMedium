import React from "react";
import "./App.css";
import styled from "styled-components";
import { RouterProvider } from "react-router-dom";
import Signin from "./Pages/Signin";
import Router from "./Router/Router";

function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
