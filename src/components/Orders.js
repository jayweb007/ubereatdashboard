import React from "react";
import { Table, Tag, Card } from "antd";
import orders from "../assets/data/orders.json";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();

  const renderStatus = (orderStatus) => {
    if (orderStatus === "Accepted") {
      return <Tag color={"green"}> {orderStatus} </Tag>;
    }
    if (orderStatus === "Pending") {
      return <Tag color={"orange"}> {orderStatus} </Tag>;
    }
    if (orderStatus === "Declined") {
      return <Tag color={"red"}> {orderStatus} </Tag>;
    }
  };

  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderID",
      key: "orderID",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Delivery Address",
      dataIndex: "deliveryAddress",
      key: "deliveryAddress",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price}`,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: renderStatus,
    },
  ];

  //
  return (
    <Card title="Orders" style={{ margin: 20 }}>
      <Table
        dataSource={orders}
        columns={columns}
        rowKey="orderID"
        onRow={(orderItem) => ({
          onClick: () => {
            navigate(`order/${orderItem.orderID}`);
          },
        })}
      />
    </Card>
  );
};

export default Orders;
