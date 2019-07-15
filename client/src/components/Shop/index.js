import React, { Component } from "react";
import PageTop from "../utils/PageTop";

import { connect } from "react-redux";
import { getBrands, getWoods } from "../../actions/products_actions";

class Shop extends Component {
  state = {};
  componentDidMount() {
    this.props.dispatch(getBrands());
    this.props.dispatch(getWoods());
  }
  render() {
    const products = this.props.products;
    return (
      <div>
        <PageTop title="Browse Products" />
        <div className="container">
          <div className="shop_wrapper">
            <div className="left">
              <h1>Left</h1>
            </div>
            <div className="right">
              <h1>Right</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(Shop);
