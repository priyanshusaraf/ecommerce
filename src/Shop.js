import "./Shop.css";
import Product from "./Product.js";

// All the product image imports
import prod1 from "./images/prod1.jpg";
import prod2 from "./images/prod2.jpg";
import prod3 from "./images/prod3.jpg";
import prod4 from "./images/prod4.jpg";
import prod5 from "./images/prod5.jpg";
import prod6 from "./images/prod6.jpg";
import prod7 from "./images/prod7.jpg";
import prod8 from "./images/prod8.jpg";
import prod9 from "./images/prod9.jpg";

function Shop() {
  return (
    <div className="shop">
      <div className="shop__row">
        <Product
          id="1"
          title="
          The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover"
          price={13}
          rating={5}
          image={prod1}
        />
        <Product
          id="2"
          title="New Apple MacBook Pro (13-inch, 16GB RAM, 512GB SSD Storage, Magic Keyboard) - Space Gray"
          price={1656}
          rating={5}
          image={prod2}
        />
        <Product
          id="3"
          title="Kindle Paperwhite – Now Waterproof with 2x the Storage - 8 GB (International Version)"
          price={155}
          rating={5}
          image={prod3}
        />
      </div>
      <div className="shop__row">
        <Product
          id="4"
          title="CHEFTRONIC SM928-Red Standing Mixer, One Size, Red"
          price={93}
          rating={5}
          image={prod4}
        />
        <Product
          id="5"
          title="The Monk Who Sold His Ferrari: A Fable About Fulfilling Your Dreams & Reaching Your Destiny Paperback"
          price={11}
          rating={5}
          image={prod5}
        />
        <Product
          id="6"
          title="LG 34WN80C-B USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)"
          price={545}
          rating={5}
          image={prod6}
        />
      </div>
      <div className="shop__row">
        <Product
          id="7"
          title="Nike Men's Flex Experience Run 8 Sneaker"
          price={70}
          rating={4}
          image={prod7}
        />
        <Product
          id="8"
          title="PlayStation 4 Pro 1TB Console"
          price={400}
          rating={5}
          image={prod8}
        />
        <Product
          id="9"
          title="New Apple iPad Pro (11-inch, Wi-Fi, 1TB) - Space Gray (2nd Generation)"
          price={1299}
          rating={5}
          image={prod9}
        />
      </div>
    </div>
  );
}

export default Shop;
