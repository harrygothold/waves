import React, { Component } from "react";
import PageTop from "../utils/PageTop";
import { connect } from "react-redux";
import {
  getProductDetail,
  clearProductDetail
} from "../../actions/products_actions";
import ProductInfo from "./ProductInfo";

class ProductDetailPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(getProductDetail(id));
  }
  componentWillUnmount() {
    this.props.dispatch(clearProductDetail());
  }
  render() {
    return (
      <div>
        <PageTop title="Product Detail" />
        <div className="container">
          {this.props.products.prodDetail ? (
            <div className="product_detail_wrapper">
              <div className="left">images</div>
              <div className="right">
                <ProductInfo
                  addToCart={id => this.addToCart(id)}
                  detail={this.props.products.prodDetail}
                />
              </div>
            </div>
          ) : (
            "Loading"
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(ProductDetailPage);
