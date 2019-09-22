import React, { Component } from "react";
import UserLayout from "../../../hoc/UserLayout";
import FormField from "../../utils/Forms/FormField";
import {
  update,
  generateData,
  isFormValid,
  populateOptionFields,
  resetFields
} from "../../utils/Forms/FormActions";
import { connect } from "react-redux";
import {
  getBrands,
  getWoods,
  addProduct,
  clearProduct
} from "../../../actions/products_actions";

class AddProduct extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formdata: {
      name: {
        element: "input",
        value: "",
        config: {
          label: "Product name",
          name: "name_input",
          type: "text",
          placeholder: "Enter product name"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      },
      description: {
        element: "textarea",
        value: "",
        config: {
          label: "Product description",
          name: "description_input",
          type: "text",
          placeholder: "Enter product description"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      },
      price: {
        element: "input",
        value: "",
        config: {
          label: "Product price",
          name: "price_input",
          type: "number",
          placeholder: "Enter product price"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      },
      brand: {
        element: "select",
        value: "",
        config: {
          label: "Product brand",
          name: "brands_input",
          options: []
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      },
      shipping: {
        element: "select",
        value: "",
        config: {
          label: "Shipping",
          name: "shipping_input",
          options: [{ key: true, value: "Yes" }, { key: false, value: "No" }]
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      },
      available: {
        element: "select",
        value: "",
        config: {
          label: "available, in stock",
          name: "available_input",
          options: [{ key: true, value: "Yes" }, { key: false, value: "No" }]
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      },
      wood: {
        element: "select",
        value: "",
        config: {
          label: "Wood material",
          name: "wood_input",
          options: []
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      },
      frets: {
        element: "select",
        value: "",
        config: {
          label: "Frets",
          name: "frets_input",
          options: [
            { key: 20, value: 20 },
            { key: 21, value: 21 },
            { key: 22, value: 22 },
            { key: 24, value: 24 }
          ]
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      },
      publish: {
        element: "select",
        value: "",
        config: {
          label: "Publish",
          name: "apublish_input",
          options: [
            { key: true, value: "Public" },
            { key: false, value: "Hidden" }
          ]
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      }
    }
  };

  updateFields = data => {
    this.setState({
      formdata: data
    });
  };

  resetFieldHandler = () => {
    const newFormData = resetFields(this.state.formdata, "products");
    this.setState({
      formdata: newFormData,
      formSuccess: true
    });
    setTimeout(() => {
      this.setState({ formSuccess: false }, () => {
        this.props.dispatch(clearProduct());
      });
    }, 3000);
  };

  updateForm = el => {
    const newFormData = update(el, this.state.formdata, "products");
    this.setState({ formError: false, formdata: newFormData });
  };

  submitForm = e => {
    e.preventDefault();
    let dataToSubmit = generateData(this.state.formdata, "products");
    let formIsValid = isFormValid(this.state.formdata, "products");

    if (formIsValid) {
      this.props.dispatch(addProduct(dataToSubmit)).then(() => {
        if (this.props.products.addProduct.success) {
          this.resetFieldHandler();
        } else {
          this.setState({ formError: true });
        }
      });
    }
  };

  componentDidMount() {
    const formdata = this.state.formdata;
    this.props.dispatch(getBrands()).then(response => {
      const newFormData = populateOptionFields(
        formdata,
        this.props.products.brands,
        "brand"
      );
      this.updateFields(newFormData);
    });
    this.props.dispatch(getWoods()).then(response => {
      const newFormData = populateOptionFields(
        formdata,
        this.props.products.woods,
        "wood"
      );
      this.updateFields(newFormData);
    });
  }

  render() {
    const { formdata, formError, formSuccess } = this.state;
    return (
      <UserLayout>
        <div>
          <h1>Add Products</h1>
          <form onSubmit={e => this.submitForm(e)}>
            <FormField
              id={"name"}
              formdata={formdata.name}
              change={el => this.updateForm(el)}
            />
            <FormField
              id={"description"}
              formdata={formdata.description}
              change={el => this.updateForm(el)}
            />
            <FormField
              id={"price"}
              formdata={formdata.price}
              change={el => this.updateForm(el)}
            />
            <div className="form_devider" />
            <FormField
              id={"brand"}
              formdata={formdata.brand}
              change={el => this.updateForm(el)}
            />
            <FormField
              id={"shipping"}
              formdata={formdata.shipping}
              change={el => this.updateForm(el)}
            />
            <FormField
              id={"available"}
              formdata={formdata.available}
              change={el => this.updateForm(el)}
            />
            <div className="form_devider" />
            <FormField
              id={"wood"}
              formdata={formdata.wood}
              change={el => this.updateForm(el)}
            />
            <FormField
              id={"frets"}
              formdata={formdata.frets}
              change={el => this.updateForm(el)}
            />
            <div className="form_devider" />
            <FormField
              id={"publish"}
              formdata={formdata.publish}
              change={el => this.updateForm(el)}
            />
            {formSuccess && <div className="form_success">Success!</div>}
            {formError && (
              <div className="error_label">Please check your data</div>
            )}
            <button onClick={e => this.submitForm(e)}>Add Product</button>
          </form>
        </div>
      </UserLayout>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(AddProduct);
