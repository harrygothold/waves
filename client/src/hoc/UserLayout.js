import React from "react";
import { Link } from "react-router-dom";

const UserLayout = props => {
  const links = [
    {
      name: "My account",
      linkTo: "/user/dashboard"
    },
    {
      name: "User Infomation",
      linkTo: "/user/user_profile"
    },
    {
      name: "My Cart",
      linkTo: "/user/cart"
    }
  ];

  const generateLinks = links =>
    links.map((item, i) => (
      <Link to={item.linkTo} key={i}>
        {item.name}
      </Link>
    ));
  return (
    <div className="container">
      <div className="user_container">
        <div className="user_left_nav">
          <h2>My Account</h2>
          <div className="links">{generateLinks(links)}</div>
        </div>
        <div className="user_right">{props.children}</div>
      </div>
    </div>
  );
};

export default UserLayout;
