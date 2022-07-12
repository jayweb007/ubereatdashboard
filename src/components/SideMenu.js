import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const items = [
  { label: "Orders", key: "/" }, // remember to pass the key prop
  { label: "Menu", key: "menu" }, // which is required
  { label: "Order History", key: "order-history" }, // which is required
  {
    label: "Settings",
    key: "settings",
  },
];

const SideMenu = () => {
  const navigate = useNavigate();

  const onMenuPress = (menuItems) => {
    navigate(`${menuItems.key}`);
  };

  //
  return <Menu items={items} style={{ marginTop: 10 }} onClick={onMenuPress} />;
};

export default SideMenu;
