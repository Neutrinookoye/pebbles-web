import React from 'react';
import NavBar from '../../components/homepage/NavBar';
import SubNavBar from '../../components/homepage/SubNavBar';
import Banner from '../../components/homepage/Banner/index';
import SignUpCTA from '../../components/homepage/SignUpCTA';
import Footer from '../../components/homepage/Footer';
import ApartmentInfo from './ApartmentInfo';

const ExploreMoreApartments = () => {
  return (
    <div>
      <NavBar />
      <SubNavBar />
      <Banner />
      <ApartmentInfo />
      <SignUpCTA />
      <Footer />
    </div>
  );
};

export default ExploreMoreApartments;
