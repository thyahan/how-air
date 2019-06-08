import React, { useEffect, useState } from "react";
import { Divider } from "antd";
import { Layout, AirViewer } from "../components";

const index = () => {
  return (
    <Layout>
      <div className="homepage">
        <div className="greeting-message-wraper">
          <h1 className="greeting-message">Welcome to How Air</h1>
          <h3 className="greeting-message">Thailand Air Quality Report</h3>
          <Divider />
        </div>
        <AirViewer />
      </div>
    </Layout>
  );
};

export default index;
