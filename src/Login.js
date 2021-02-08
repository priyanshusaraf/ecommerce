import React, { useState, useEffect } from "react";
import { Input, Stack, Button } from "@chakra-ui/react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "./axios";
import { useStateValue } from "./StateProvider";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [{ user, isAuth }, dispatch] = useStateValue();

  useEffect(() => {
    if (isAuth) {
      history.replace("/");
    }
  }, [isAuth]);

  const login = async () => {
    try {
      if (email === "" || password === "") {
        return toast.error("All fields are required!");
      }
      const res = await axios.post("/auth", { email, password });
      // auth success
      localStorage.setItem("token", res.data.user.token);
      await dispatch({
        type: "SET_USER",
        user: res.data.user,
      });
      toast.success(res.data.message);
      history.push("/");
    } catch (err) {
      if (err.response.data) {
        return toast.error(err.response.data.message);
      }
      toast.error("Cannot connect to server!");
      //history.replace("/");
    }
  };

  const signUp = async () => {
    try {
      // throw new Error();
      const res = await axios.post("/register", { name, email, password });
      localStorage.setItem("token", res.data.user.token);
      await dispatch({
        type: "SET_USER",
        user: res.data.user,
      });
      toast.success(res.data.message);
      history.push("/");
    } catch (err) {
      if (err?.response.data) {
        return toast.error(err.response.data.message);
        setName("");
        setEmail("");
        setPassword("");
      }
      toast.error("Cannot connect to server!");
      //history.replace("/");
    }
  };

  return (
    <div className="login">
      <Stack spacing={3} className="stack">
        <h1 style={{ fontSize: 50 }}>Login</h1>
        <Input
          placeholder="Name"
          size="md"
          type="text"
          className="input"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          size="md"
          type="email"
          className="input"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          size="md"
          type="password"
          className="input"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="buttons">
          <Button onClick={login} colorScheme="blue" className="button_login">
            Login
          </Button>
          <Button onClick={signUp} colorScheme="green">
            Signup
          </Button>
        </div>
      </Stack>
    </div>
  );
}

export default Login;
