import React from "react";
import ManageBrands from "./manage_brands";
import ManageWoods from "./manage_woods.js";
import UserLayout from "../../../hoc/UserLayout";

const ManageCategories = () => {
  return (
    <UserLayout>
      <ManageBrands />
      <ManageWoods />
    </UserLayout>
  );
};

export default ManageCategories;
