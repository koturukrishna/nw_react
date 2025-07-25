import React from "react";
import ProductsDisplay from "./components/apis/ProductsDisplay";
import BioData from "./components/context/BioData";
import BioProvider from "./components/context/BioData";
import UsersCrud from "./components/crud/UsersCrud";
import CounterAppRedux from "./components/redux/CounterAppRedux";
import Display from "./components/apis/Display";
import MakeApiCall from "./components/hooks/useApi";
import FakeStoreProducts from "./components/apis/FakeStoreProducts";

const App = () => {
  return (
    <div>
      <h3>Hello welcome to the app</h3>
      <FakeStoreProducts></FakeStoreProducts>
    </div>
  );
};

export default App;
