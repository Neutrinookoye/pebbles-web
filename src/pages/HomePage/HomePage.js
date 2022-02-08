import React from "react";
import "./HomePage.css";
import NavBar from "../../components/homepage/NavBar";
import SubNavBar from "../../components/homepage/SubNavBar";
import Banner from "../../components/homepage/Banner/index";
import ExploreApartments from "../../components/homepage/ExploreApartments/index";
import Services from "../../components/homepage/Services";
import FeaturedHouses from "../../components/homepage/FeaturedApartments/index";
import UserReviews from "../../components/homepage/UserReviews";
import BecomeHostCTA from "../../components/homepage/BecomeHostCTA";
import FeaturedEvents from "../../components/homepage/FeaturedEvents/index";
import SignUpCTA from "../../components/homepage/SignUpCTA";
import Footer from "../../components/homepage/Footer";
import Login from "../auth/Login";

const HomePage = () => {
  // show login modal if user is not logged in
  // if (!localStorage.getItem("user")) {
  //   document.getElementById("loginModal").style.display = "block";
  // }

  // close login modal
  // const closeLoginModal = () => {
  //   document.getElementById("loginModal").style.display = "none";
  // }

  const [isOpen, setIsOpen] = React.useState(false);

  const openLoginModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && <Login openLoginModal={openLoginModal} />}
      <NavBar openLoginModal={openLoginModal}/>
      <SubNavBar />
      <Banner />
      <ExploreApartments />
      <Services />
      <FeaturedHouses />
      <UserReviews />
      <BecomeHostCTA />
      <FeaturedEvents />
      <SignUpCTA />
      <Footer />
    </div>
  );
};

export default HomePage;
