import React, { useEffect } from "react";
import type { ProductType } from "../../types/types";

const ProductsDisplay = () => {
  const [products, setProducts] = React.useState<ProductType[]>([]);

  const apiCall = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    console.log("ProductsDisplay component mounted");
    apiCall();
    return () => {
      console.log("ProductsDisplay component unmounted");
      setProducts([]); // Clear products on unmount
    };
  }, []);
  return (
    <div>
      <h3>here is the list of products</h3>
      {/* {products.length > 0 ? (
        <ul>
          {products.map((product) => {
            return <li key={product.id}>{product.title}</li>;
          })}
        </ul>
      ) : (
        <p>No products available</p>
      )} */}
      {products.length > 0 ? (
        <ul>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100px" }}
                />
                <p>
                  Rating: {product.rating.rate} ({product.rating.count} reviews)
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductsDisplay;
