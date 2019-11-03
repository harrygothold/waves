import React, { Component } from "react";

import { connect } from "react-redux";
import FormField from "../utils/Forms/FormField";
import { update, generateData, isFormValid } from "../utils/Forms/FormActions";
import { loginUser } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";

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
    let dataToSubmit = generateData(this.state.formData, "login");
    let formIsValid = isFormValid(this.state.formData, "login");

    if (formIsValid) {
      this.props.dispatch(loginUser(dataToSubmit)).then(response => {
        if (response.payload.loginSuccess) {
          this.props.history.push("/user/dashboard");
        } else {
          this.setState({ formError: true });
        }
      });
    } else {
      this.setState({ formError: true });
    }
  };

  render() {
    const { formData, formError } = this.state;
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
          {formError && (
            <div className="error_label">Please check your data</div>
          )}
          <button onClick={e => this.submitForm(e)}>Login</button>
        </form>
      </div>
    );
  }
}

export default connect()(withRouter(Login));
