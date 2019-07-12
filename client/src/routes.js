import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./hoc/Layout";
import RegisterLogin from "./components/Register_Login";
import Register from "./components/Register_Login/Register";
import UserDashboard from "./components/User";
import Auth from "./hoc/Auth";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home, null)} />
        <Route
          path="/register_login"
          exact
          component={Auth(RegisterLogin, false)}
        />
        <Route path="/register" exact component={Auth(Register, false)} />
        <Route
          path="/user/dashboard"
          exact
          component={Auth(UserDashboard, true)}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;
