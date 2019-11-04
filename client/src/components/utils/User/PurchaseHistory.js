import React from "react";
import moment from "moment";

const PurchaseHistory = ({ purchaseHistory }) => {
  const renderPurchaseHistory = () =>
    purchaseHistory &&
    purchaseHistory.map((history, i) => (
      <tr key={i}>
        <td>{moment(history.dateOfPurchase).format("DD-MM-YYYY")}</td>
        <td>
          {history.brand.name} {history.name}
        </td>
        <td>$ {history.price}</td>
        <td>{history.quantity}</td>
      </tr>
    ));
  return (
    <div className="history_blocks">
      <table>
        <thead>
          <tr>
            <th>Date of Purchase</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>{renderPurchaseHistory()}</tbody>
      </table>
    </div>
  );
};

export default PurchaseHistory;
