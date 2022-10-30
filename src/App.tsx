import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./hoc/Layout";
import Router from "./components/Router";

const App = () => {
  return (
    <Layout>
      <Router />
    </Layout>
  );
};

export default App;
