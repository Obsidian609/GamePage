import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import MainContainer from "./container/MainContainer";
import Layout from "./layouts/Layout";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { loginUser, registerUser, removeToken, verifyUser } from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <Layout currentUser={currentUser} handleLogout={handleLogout}>
      <Switch>
        <Route path="/login">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path="/register">
          <Register handleRegister={handleRegister} />
        </Route>
        <Route path="/">
          <MainContainer currentUser={currentUser} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
