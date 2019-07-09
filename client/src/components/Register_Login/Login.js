import React, { Component } from "react";

import { connect } from "react-redux";
import FormField from "../utils/Forms/FormField";
import { update } from "../utils/Forms/FormActions";

class Login extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formData: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      }
    }
  };

  updateForm = el => {
    const newFormData = update(el, this.state.formData, "login");
    this.setState({ formError: false, formData: newFormData });
  };

  submitForm = e => {
    e.preventDefault();
  };

  render() {
    const { formData } = this.state;
    return (
      <div className="signin_wrapper">
        <form onSubmit={e => this.submitForm(e)}>
          <FormField
            id={"email"}
            formdata={formData.email}
            change={el => this.updateForm(el)}
          />
          <FormField
            id={"password"}
            formdata={formData.password}
            change={el => this.updateForm(el)}
          />
        </form>
      </div>
    );
  }
}

export default connect()(Login);
