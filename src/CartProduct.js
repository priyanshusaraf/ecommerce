import "./CartProduct.css";
import { useStateValue } from "./StateProvider";
import { Button } from "@chakra-ui/react";

function CartProduct({ title, image, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove item from cart...
    dispatch({
      type: "REMOVE_FROM_BASKET",
    });
  };

  return (
    <div className="cartProduct">
      <img className="cartProduct__image" src={image} alt="" />

      <div className="cartProduct__info">
        <p className="cartProduct__title">{title}</p>
        <p className="cartProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="cartProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <Button color="teal" onClick={removeFromBasket}>
            Remove from Cart
          </Button>
        )}
      </div>
    </div>
  );
}

export default CartProduct;
