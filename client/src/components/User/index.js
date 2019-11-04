import React from "react";
import UserLayout from "../../hoc/UserLayout";
import Button from "../utils/Button";
import PurchaseHistory from "../utils/User/PurchaseHistory";

const UserDashboard = ({ user }) => {
  return (
    <UserLayout>
      <div>
        <div className="user_nfo_panel">
          <h1>User information</h1>
          <div>
            <span>{user.userData.name}</span>
            <span>{user.userData.lastname}</span>
            <span>{user.userData.email}</span>
          </div>
          <Button
            type="default"
            title="Edit Account Info"
            linkTo="/user/user_profile"
          />
        </div>
        {user.userData.history && (
          <div className="user_nfo_panel">
            <h1>Purchase History</h1>
            <div className="user_product_block_wrapper">
              <PurchaseHistory purchaseHistory={user.userData.history} />
            </div>
          </div>
        )}
      </div>
    </UserLayout>
  );
};

export default UserDashboard;
