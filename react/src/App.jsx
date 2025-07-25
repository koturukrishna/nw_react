import React from "react";
import ProductsDisplay from "./components/ProductsDisplay";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginFrom";
import GetData from "./components/apis/GetData";
import AddUser from "./components/apis/AddUser";

const App = () => {
  return (
    <div>
      <AddUser />
    </div>
  );
};

export default App;
