import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductListPage.css";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        // Handle success
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, []);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <Link key={product.id} to={`/product/details/${product.id}`}>
            <div className="ProductCard" key={product.id}>
              <img
                className="ProductImage"
                src={product.image}
                alt={product.title}
              />
              <div className="ProductInfo">
                <h3> {product.title}</h3>
                <p>{product.category}</p>
                <p>
                  <span>${product.price}</span>
                </p>
                <p>{product.description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
