import React from "react";
import { Button, Card, Descriptions, Divider, List } from "antd";
import dishes from "../assets/data/dishes.json";
const OrderDetails = () => {
  return (
    <Card title={`Order $id`} style={{ margin: 20 }}>
      <Descriptions
        title=""
        bordered
        column={{
          xxl: 1,
          xl: 1,
          lg: 1,
          md: 1,
          sm: 1,
          xs: 1,
        }}
        size="small"
      >
        <Descriptions.Item label="Customer">James Momoh</Descriptions.Item>
        <Descriptions.Item label="Customer Address">
          12b, wesley park, high lovik, jakata
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <List
        dataSource={dishes}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <div style={{ fontWeight: "normal" }}>
              {item.name} x{item.quantity}
            </div>
            <div> ${item.price} </div>
          </List.Item>
        )}
      />
      <Divider />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ fontWeight: "normal" }}>subtotal:</h3>
        <h3 style={{ fontWeight: "normal", fontSize: 13 }}>$38.96</h3>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ fontWeight: "bold", fontSize: 15 }}>Total:</h2>
        <h2 style={{ fontWeight: "bold", fontSize: 13 }}>$42.96</h2>
      </div>

      <div
        style={{
          display: "flex",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Button style={{ marginRight: 20 }} type="primary" block danger>
          Decline Order
        </Button>
        <Button type="primary" block>
          Accept Order
        </Button>
      </div>
      <Button type="primary" block>
        Food is Done
      </Button>
    </Card>
  );
};

export default OrderDetails;
