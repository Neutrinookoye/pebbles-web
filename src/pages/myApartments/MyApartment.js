import React from "react";
import NavBar from "../../components/homepage/NavBar";
import SubNavBar from "../../components/homepage/SubNavBar";
import Footer from "../../components/homepage/Footer";
import MyApartments from "../../components/MyApartments/index";

const MyApartment = () => {
  return (
    <div>
      <NavBar />
      <SubNavBar />
      <MyApartments />
      <Footer />
    </div>
  );
};

export default MyApartment;
