import React, { Component } from "react";
import PayPalExpressBtn from "react-paypal-express-checkout";

class Paypal extends Component {
  render() {
    const onSuccess = payment => {
      this.props.onSuccess(payment);
    };

    const onCancel = data => {
      console.log(JSON.stringify(data));
    };

    const onError = error => {
      this.props.transactionError(error);
    };

    let env = "sandbox";
    let currency = "GBP";
    let total = this.props.toPay;

    const client = {
      sandbox:
        "AQXHeeEdSV7-Irh5-g4i5sw8WAjtWL0yBytLDCgQJ4Ve7Cy658qOcCiJTGT42rm5bC94qOuKJmBmccux",
      production: ""
    };
    return (
      <div>
        <PayPalExpressBtn
          env={env}
          client={client}
          currency={currency}
          total={total}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel}
          style={{
            size: "large",
            color: "blue",
            shape: "rect",
            label: "checkout"
          }}
        />
      </div>
    );
  }
}

export default Paypal;
