import React from "react";
import "./Product.css";
import { Button } from "@chakra-ui/react";
import { useStateValue } from "./StateProvider.js";
function Product({ name, price, title, rating, image }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    // Add item to basket...
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <p className="product__title">{title}</p>
      <div style={{ height: 15 }} />
      <p>${price}</p>
      <div style={{ height: 15 }} />
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_) => (
            // eslint-disable-next-line
            <p>⭐</p>
          ))}
      </div>
      <div style={{ height: 15 }} />
      <img src={image} alt="" />
      <div style={{ height: 15 }} />
      <Button onClick={addToBasket} colorScheme="teal" variant="solid">
        Add To Cart
      </Button>
    </div>
  );
}

export default Product;
