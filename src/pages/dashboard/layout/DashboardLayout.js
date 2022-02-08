import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import SideBar from "../../../components/sideBar/SideBar";
import "./DashboardLayout.scss";

const DashboardLayout = (props) => {
  const Auth = useSelector((state) => state.Auth);

  if (!Auth?.isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className='d-flex dashboard'>
      <div className='side__navigation'>
        <SideBar />
      </div>

      <div className='dashboard-right'>
        <div className='dashboard-components'>{props.children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
