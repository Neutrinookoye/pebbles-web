import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import dashboard from "./pages/dashboard";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Signup from "./pages/auth/Signup";
import BecomeHost from "./pages/auth/BecomeHost";
import ConfirmNumber from "./pages/auth/ConfirmNumber";
import StartBooking from "./pages/auth/StartBooking";
import ExploreEvents from "./pages/EventsPages/ExploreEvents";
import EventsInfo from "./pages/EventsPages/EventsInfo";
import ExploreApartments from "./pages/exploreMoreApartments/ExploreMoreApartments";
import ApartmentInfo from "./pages/exploreMoreApartments/ApartmentInfo";
import MyApartment from "./pages/myApartments/MyApartment";
import MyApartmentInfo from "./pages/myApartments/MyApartmentInfo";
import SignupIndividual from "./pages/auth/SignupIndividual";
import SignupBusiness from "./pages/auth/SignupBusiness";
// import DashboardHome from "./pages/dashboard/dashboardHome/DashboardHome";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/forgot-password' component={ForgotPassword} />
          <Route exact path='/reset-password' component={ResetPassword} />
          <Route exact path='/signup' component={Signup} />
          <Route
            exact
            path='/become-host/individual'
            component={SignupIndividual}
          />
          <Route
            exact
            path='/become-host/business'
            component={SignupBusiness}
          />
          <Route exact path='/become-host' component={BecomeHost} />
          <Route exact path='/confirm-number' component={ConfirmNumber} />
          <Route exact path='/start-booking' component={StartBooking} />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/explore-events' component={ExploreEvents} />
          <Route exact path='/events-info' component={EventsInfo} />
          <Route path='/app' component={dashboard} />
          <Route
            exact
            path='/explore-apartments'
            component={ExploreApartments}
          />
          <Route
            exact
            path='/become-host/individual'
            component={SignupIndividual}
          />
          <Route
            exact
            path='/become-host/business'
            component={SignupBusiness}
          />
          <Route exact path='/apartment-info' component={ApartmentInfo} />
          <Route exact path='/my-apartment' component={MyApartment} />
          <Route exact path='/my-apartment-info' component={MyApartmentInfo} />
          {/* <Route exact path="/dashboard" component={DashboardHome} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
