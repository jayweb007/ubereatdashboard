import React from "react";
import { Layout, Image } from "antd";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import OrderDetails from "./components/OrderDetails";
import Orders from "./components/Orders";
import SideMenu from "./components/SideMenu";

const { Content, Footer, Sider } = Layout;

function App() {
  return (
    <Layout>
      <Sider style={{ height: "100vh", backgroundColor: "white" }}>
        <Image
          src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg"
          preview={false}
        />
        <SideMenu />
      </Sider>
      <Layout>
        <Content
          style={{
            backgroundColor: "lightgrey",
          }}
        >
          <Routes>
            <Route path="" element={<Orders />} />
            <Route path="order/:id" element={<OrderDetails />} />
          </Routes>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "grey",
          }}
        >
          Uber Eat Dashboard ©2022 Created by PSC
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
