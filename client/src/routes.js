import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./hoc/Layout";
import RegisterLogin from "./components/Register_Login";
import Register from "./components/Register_Login/Register";
import UserDashboard from "./components/User";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register_login" exact component={RegisterLogin} />
        <Route path="/register" exact component={Register} />
        <Route path="/user/dashboard" exact component={UserDashboard} />
      </Switch>
    </Layout>
  );
};

export default Routes;
