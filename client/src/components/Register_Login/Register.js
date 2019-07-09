import React, { Component } from "react";
import FormField from "../utils/Forms/FormField";
import { update, generateData, isFormValid } from "../utils/Forms/FormActions";
import { connect } from "react-redux";
import { loginUser } from "../../actions/user_actions";

class Register extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formData: {
      name: {
        element: "input",
        value: "",
        config: {
          name: "name_input",
          type: "text",
          placeholder: "Enter your name"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      lastname: {
        element: "input",
        value: "",
        config: {
          name: "lastname_input",
          type: "text",
          placeholder: "Enter your last name"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
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
      },
      confirmPassword: {
        element: "input",
        value: "",
        config: {
          name: "confirm_password_input",
          type: "password",
          placeholder: "Confirm your password"
        },
        validation: {
          required: true,
          confirm: "password"
        },
        valid: false,
        touched: false,
        validationMessage: ""
      }
    }
  };

  updateForm = el => {
    const newFormData = update(el, this.state.formData, "register");
    this.setState({ formError: false, formData: newFormData });
  };

  submitForm = e => {
    e.preventDefault();
    let dataToSubmit = generateData(this.state.formData, "register");
    let formIsValid = isFormValid(this.state.formData, "register");

    if (formIsValid) {
      console.log(dataToSubmit);
    } else {
      this.setState({ formError: true });
    }
  };

  render() {
    const { formData, formError } = this.state;
    return (
      <div className="page_wrapper">
        <div className="container">
          <div className="register_login_container">
            <div className="left">
              <form onSubmit={e => this.submitForm(e)}>
                <h2>Personal Information</h2>
                <div className="form_block_two">
                  <div className="block">
                    <FormField
                      id={"name"}
                      formdata={formData.name}
                      change={el => this.updateForm(el)}
                    />
                  </div>
                  <div className="block">
                    <FormField
                      id={"lastname"}
                      formdata={formData.lastname}
                      change={el => this.updateForm(el)}
                    />
                  </div>
                </div>
                <div>
                  <FormField
                    id={"email"}
                    formdata={formData.email}
                    change={el => this.updateForm(el)}
                  />
                </div>
                <h2>Verify Password</h2>
                <div className="form_block_two">
                  <div className="block">
                    <FormField
                      id={"password"}
                      formdata={formData.password}
                      change={el => this.updateForm(el)}
                    />
                  </div>
                  <div className="block">
                    <FormField
                      id={"confirmPassword"}
                      formdata={formData.confirmPassword}
                      change={el => this.updateForm(el)}
                    />
                  </div>
                </div>
                <div>
                  {formError && (
                    <div className="error_label">Please check your data</div>
                  )}
                  <button onClick={e => this.submitForm(e)}>
                    Create an account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Register);
