import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import DashboardApartmentAdd from "./dashboardAapartmentAdd/DashboardApartmentAdd";
import DashboardHome from "./dashboardHome/DashboardHome";
import DashboardProfile from "./dashboardprofile/DashboardProfile";
import DashboardLayout from "./layout/DashboardLayout";

function Dashboard(props) {
  const {
    match: { path },
  } = props;

  console.log(props.match.path);

  return (
    <DashboardLayout>
      <Switch>
        <Route path={`${path}/dashboard/profile`}>
          <DashboardProfile />
        </Route>
        <Route path={`${path}/apartment/add`}>
          <DashboardApartmentAdd />
        </Route>
        <Route path={`${path}/dashboard`}>
          <DashboardHome />
        </Route>
      </Switch>
    </DashboardLayout>
  );
}

export default withRouter(Dashboard);
