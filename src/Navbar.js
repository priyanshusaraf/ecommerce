import "./Navbar.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";

function Navbar() {
  const [{ basket, user, isAuth }, dispatch] = useStateValue();
  const history = useHistory();

  const logout = () => {
    if (user) {
      // window.location.reload();
      dispatch({
        type: "UNSET_USER",
      });
      return history.push("/");
    }
  };
  return (
    <div className="navbar">
      <div className="navbar__logoContainer"></div>
      <div className="navbar__content">
        <p>Ecom</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            {isAuth ? (
              <Link to="/" onClick={logout}>
                Logout
              </Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <p
            style={{
              fontSize: 12,
              marginRight: 20,
              width: 20,
              height: 20,
              borderRadius: 50,
              backgroundColor: "red",
            }}
          >
            {basket?.length}
          </p>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
