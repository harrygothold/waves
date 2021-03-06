import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./hoc/Layout";
import RegisterLogin from "./components/Register_Login";
import Register from "./components/Register_Login/Register";
import UserDashboard from "./components/User";
import Auth from "./hoc/Auth";
import Shop from "./components/Shop";
import AddProduct from "./components/User/Admin/add_product";
import ManageCategories from "./components/User/Admin/manage_categories";
import ProductDetailPage from "./components/Product";
import UserCart from "./components/User/Cart";
import UpdateProfile from "./components/User/UpdateProfile";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home, null)} />
        <Route path="/shop" exact component={Auth(Shop, null)} />
        <Route
          path="/register_login"
          exact
          component={Auth(RegisterLogin, false)}
        />
        <Route
          path="/product_detail/:id"
          exact
          component={Auth(ProductDetailPage, null)}
        />
        <Route path="/register" exact component={Auth(Register, false)} />
        <Route
          path="/user/dashboard"
          exact
          component={Auth(UserDashboard, true)}
        />
        <Route path="/user/cart" exact component={Auth(UserCart, true)} />
        <Route
          path="/admin/add_product"
          exact
          component={Auth(AddProduct, true)}
        />
        <Route
          path="/admin/manage_categories"
          exact
          component={Auth(ManageCategories, true)}
        />
        <Route
          path="/user/user_profile"
          exact
          component={Auth(UpdateProfile, true)}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;
