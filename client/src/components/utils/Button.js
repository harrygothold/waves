import React from "react";
import { Link } from "react-router-dom";

const Button = props => {
  const buttons = () => {
    let template = "";
    switch (props.type) {
      case "default":
        return (template = (
          <Link className="link_default" {...props.addStyles} to={props.linkTo}>
            {props.title}
          </Link>
        ));
      default:
        template = "";
    }
    return template;
  };
  return <div className="my_link">{buttons()}</div>;
};

export default Button;
