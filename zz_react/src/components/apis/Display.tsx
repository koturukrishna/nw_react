import { useEffect, useState } from "react";
import useApiCall from "../hooks/useApiCall";

interface ProductType {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

const Display = () => {
  const [result, loading, error] = useApiCall(
    "https://fakestoreapi.com/products/",
    "get",
    null
  );
  const [products, setProducts] = useState<
    ProductType[] | null | string | boolean
  >(result);
  //   console.log(loading, error, result);

  useEffect(() => {
    if (result) {
      setProducts(result);
    }
    return () => {
      setProducts([]);
    };
  }, [result]);

  return (
    <div>
      <h3>it is display</h3>
      {loading && <h3>Loading...</h3>}
      {error && <h3>Error: {error}</h3>}
      {Array.isArray(products) && products.length > 0 ? (
        <ul>
          {products.map((product: ProductType) => (
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

export default Display;
