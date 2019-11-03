import React, { Component } from "react";
import { getCartItems, removeCartItem } from "../../actions/user_actions";
import { connect } from "react-redux";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFrown from "@fortawesome/fontawesome-free-solid/faFrown";
import faSmile from "@fortawesome/fontawesome-free-solid/faSmile";
import CartProduct from "../utils/User/CartProduct";
import UserLayout from "../../hoc/UserLayout";
import { Link } from "react-router-dom";

class UserCart extends Component {
  state = {
    loading: true,
    total: 0,
    showTotal: false,
    showSuccess: false
  };

  componentDidMount() {
    let cartItem = [];
    let { cart } = this.props.user.userData;

    if (cart) {
      if (cart.length > 0) {
        cart.forEach(item => {
          cartItem.push(item.id);
        });
        this.props.dispatch(getCartItems(cartItem, cart)).then(() => {
          if (this.props.user.cartDetail.length > 0) {
            this.calculateTotal(this.props.user.cartDetail);
          }
        });
      }
    }
  }

  calculateTotal = cartDetail => {
    let total = 0;
    cartDetail.forEach(item => {
      total += parseInt(item.price, 10) * item.quantity;
    });
    this.setState({ total, showTotal: true });
  };

  showNoItemMessage = () => (
    <div className="cart_no_items">
      <FontAwesomeIcon icon={faFrown} />
      <div>You have no items in your cart</div>
      <div style={{ textDecoration: "underline", cursor: "pointer" }}>
        <Link to="/shop">Click here to shop items</Link>
      </div>
    </div>
  );

  removeCartItem = id => {
    this.props.dispatch(removeCartItem(id)).then(() => {
      if (this.props.user.cartDetail.length <= 0) {
        this.setState({ showTotal: false });
      } else {
        this.calculateTotal(this.props.user.cartDetail);
      }
    });
  };

  render() {
    const { user } = this.props;
    return (
      <UserLayout>
        <div>
          <h1>My Cart</h1>
          <div className="user_cart">
            <CartProduct
              products={user}
              type="cart"
              removeItem={id => this.removeCartItem(id)}
            />
            {this.state.showTotal ? (
              <div>
                <div className="user_cart_sum">
                  <div>Total: $ {this.state.total}</div>
                </div>
              </div>
            ) : this.state.showSuccess ? (
              <div className="cart_success">
                <FontAwesomeIcon icon={faSmile} />
                <div>Thank you</div>
                <div>Your Order Is Complete!</div>
              </div>
            ) : (
              this.showNoItemMessage()
            )}
          </div>
          {this.state.showTotal && (
            <div className="paypal_button_container">Paypal</div>
          )}
        </div>
      </UserLayout>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(UserCart);
