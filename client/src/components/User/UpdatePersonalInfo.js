import React, { Component } from "react";
import FormField from "../utils/Forms/FormField";
import { connect } from "react-redux";
import {
  update,
  generateData,
  isFormValid,
  populateFields
} from "../utils/Forms/FormActions";
import { updateUserData, clearUpdateUser } from "../../actions/user_actions";

class UpdatePersonalInfo extends Component {
  state = {
    formError: false,
    formSuccess: false,
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
      }
    }
  };

  updateForm = el => {
    const newFormData = update(el, this.state.formData, "update_user");
    this.setState({ formError: false, formData: newFormData });
  };

  submitForm = e => {
    e.preventDefault();
    let dataToSubmit = generateData(this.state.formData, "update_user");
    let formIsValid = isFormValid(this.state.formData, "update_user");

    if (formIsValid) {
      this.props.dispatch(updateUserData(dataToSubmit)).then(() => {
        if (this.props.user.updateUser.success) {
          this.setState({ formSuccess: true }, () => {
            setTimeout(() => {
              this.props.dispatch(clearUpdateUser());
              this.setState({ formSuccess: false });
            }, 2000);
          });
        }
      });
    }
  };

  componentDidMount() {
    const newFormData = populateFields(
      this.state.formData,
      this.props.user.userData
    );
    this.setState({
      formData: newFormData
    });
  }

  render() {
    const { formData, formError, formSuccess } = this.state;
    return (
      <div>
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
          <div>
            {formSuccess && <div className="form_success">Success!</div>}
            {formError && (
              <div className="error_label">Please check your data</div>
            )}
            <button onClick={e => this.submitForm(e)}>Update Info</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(UpdatePersonalInfo);
