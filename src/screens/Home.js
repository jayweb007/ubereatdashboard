import React from "react";
import { Layout, Menu } from "antd";
import OrderDetails from "../components/OrderDetails";
import Orders from "../components/Orders";
const { Header, Content, Footer, Sider } = Layout;

const Home = () => {
  return (
    <Layout>
      <Sider style={{ height: "100vh", backgroundColor: "lightgreen" }}></Sider>
      <Layout>
        <Content
          style={{
            backgroundColor: "lightgrey",
          }}
        >
          {/* <OrderDetails /> */}
          <Orders />
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Uber Eat Dashboard ©2022 Created by PSC
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
