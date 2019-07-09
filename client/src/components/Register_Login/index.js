import React from "react";
import Button from "../utils/Button";
import Login from "./Login";

const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customers</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              eum natus reiciendis voluptate! Molestias possimus minima aut iure
              dolorem nesciunt.
              <Button
                type="default"
                title="Create an account"
                linkTo="/register"
                addStyles={{
                  margin: "10px 0 0 0"
                }}
              />
            </p>
          </div>
          <div className="right">
            <h2>Registered Customers</h2>
            <p>If you have an account, please login</p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
