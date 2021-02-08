import { useStateValue } from "./StateProvider";
import CartProduct from "./CartProduct";
import "./Cart.css";
function Cart() {
  const [{ basket }] = useStateValue();

  return (
    <div className="cart">
      <div className="cart__left">
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is empty</h2>
            <p>
              You have no items in your cart. To buy one or more items, click
              "Add to Cart" next to the item.
            </p>
          </div>
        ) : (
          <div className="cart_product">
            {/* List out all of the Checkout Products */}
            {basket?.map((item) => (
              <CartProduct
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                className="product"
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && <div className="cart__right"></div>}
    </div>
  );
}

export default Cart;
