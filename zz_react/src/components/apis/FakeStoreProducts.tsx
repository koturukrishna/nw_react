import { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import type { ProductType } from "../../types/types";

const FakeStoreProducts = () => {
  const { data, loading, error, makeRequest } = useApi();
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    makeRequest("https://fakestoreapi.com/products/", "get");
  }, [makeRequest]);

  useEffect(() => {
    if (data) {
      setProducts(data as ProductType[]);
      console.log("Products fetched:", data);
    }
    return () => {
      setProducts([]); // Clear products on unmount
    };
  }, [data]);
  return (
    <div>
      <h3>All products are here!</h3>
      {loading && <h3>Loading...</h3>}
      {error && <h3>Error: {error}</h3>}
      {Array.isArray(products) && products?.length > 0 ? (
        <ul>
          {products?.map((product) => (
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
          ))}
        </ul>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default FakeStoreProducts;
