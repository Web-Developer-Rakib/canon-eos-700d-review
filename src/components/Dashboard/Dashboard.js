import React from "react";
import Revenues from "../Charts/Revenues/Revenues";
import Sells from "../Charts/Sells/Sells";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <h1>Dashboard</h1>
      <div className="charts">
        <div>
          <h3 className="chart-title">
            Sells analytics from{" "}
            <span className="chart-title-color">March 2021 to August 2021</span>
          </h3>
          <Sells></Sells>
        </div>
        <div className="revenues">
          <h3 className="chart-title">
            Revenue & Investments analytics from
            <span className="chart-title-color">
              {" "}
              March 2021 to August 2021
            </span>
          </h3>
          <Revenues></Revenues>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
