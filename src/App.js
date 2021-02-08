import "./App.css";
import { useEffect } from "react";
import Shop from "./Shop";
import Navbar from "./Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStateValue } from "./StateProvider";
import axios from "./axios";
import Cart from "./Cart.js";

function App() {
  const [{ user }, dispatch] = useStateValue();

  const checkAuthentication = async () => {
    try {
      if (!localStorage.getItem("token")) return;
      const token = localStorage.getItem("token");
      const res = await axios.get("/auth", {
        headers: {
          "x-auth-token": token,
        },
      });
      await dispatch({
        type: "SET_USER",
        user: res.data.user,
      });
    } catch (err) {
      console.error(err);
      localStorage.removeItem("token");
      dispatch({
        type: "UNSET_USER",
      });
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  //const cart = JSON.parse(localStorage.getItem("basket") || "[]");

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Shop />
          </Route>
          <Route exact path="/cart">
            <Navbar />
            <Cart />
          </Route>
          <Route exact path="/login">
            <Navbar />
            <Login />
          </Route>
          {/* This is the default route */}
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
