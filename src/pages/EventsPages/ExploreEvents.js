import React from "react";
import "./exploreEvents.css";
import NavBar from "../../components/homepage/NavBar";
import SubNavBar from "../../components/homepage/SubNavBar";
import Banner from "../../components/exploreEvents/Banner/index";
import Events from "../../components/exploreEvents/Events/index";
import Footer from "../../components/homepage/Footer";

const ExploreEvents = () => {
  return (
    <div>
      <NavBar />
      <SubNavBar />
      <Banner />
      <Events />
      <Footer />
    </div>
  );
};

export default ExploreEvents;
