import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ProductDetailsPage.css";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + productId)
      .then((response) => {
        setProduct(response.data);
        // Handle success
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <div className="ProductDetailsImg">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="ProductDetailsInfo">
        <p>{product.category}</p>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>
          <span>${product.price}</span>
        </p>
      </div>
      <Link className="ProductDetailsButton" to="/">
        Back
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
