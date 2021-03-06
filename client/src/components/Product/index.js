import React, { Component } from "react";
import PageTop from "../utils/PageTop";
import { connect } from "react-redux";
import { addToCart } from "../../actions/user_actions";
import {
  getProductDetail,
  clearProductDetail
} from "../../actions/products_actions";
import ProductInfo from "./ProductInfo";
import ProductImages from "./ProductImages";

class ProductDetailPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(getProductDetail(id)).then(() => {
      if (!this.props.products.prodDetail) {
        this.props.history.push("/shop");
      }
    });
  }
  componentWillUnmount() {
    this.props.dispatch(clearProductDetail());
  }

  addToCartHandler(id) {
    this.props.dispatch(addToCart(id));
  }

  render() {
    return (
      <div>
        <PageTop title="Product Detail" />
        <div className="container">
          {this.props.products.prodDetail ? (
            <div className="product_detail_wrapper">
              <div className="left">
                <div style={{ width: "500px" }}>
                  <ProductImages detail={this.props.products.prodDetail} />
                </div>
              </div>
              <div className="right">
                <ProductInfo
                  addToCart={id => this.addToCartHandler(id)}
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
