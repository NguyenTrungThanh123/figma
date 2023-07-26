import React from "react";
import AddProduct  from "./components/AddProduct";
import ProductList from "./components/ProductList";

function App() {
  return (
      <div className="app">
                <h1>Product List</h1>
                <AddProduct />
                <ProductList />

      </div>
  );
}

export default App;
