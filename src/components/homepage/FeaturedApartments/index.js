import React, { useState } from "react";
import "../css/featuredHouses.css";
import FeaturedHousesNavbar from "./FeaturedHousesNavbar";
import FeaturedHousesCard from "./FeaturedHousesCard";

import avatar from "../img/avatar.png";
import house1 from "../img/featured-images/feat-house1.png";
import house2 from "../img/featured-images/feat-house2.png";
import house3 from "../img/featured-images/feat-house3.png";
import house4 from "../img/featured-images/feat-house4.png";

const FeaturedHouses = () => {
  const [houses, sethouses] = useState([
    {
      id: "1",
      postImage: house1,
      postTitle: "Jeff Apartments",
      apartmentPrice: "N35,000",
      bedroomNo: 3,
      toiletNo: 3,
      parlorNo: 2,
      ownerAvatar: avatar,
      ownerName: "Alex Sam",
      apartmentLocation: "Ikeja, Lagos",
    },
    {
      id: "2",
      postImage: house2,
      postTitle: " Revolution Plus",
      apartmentPrice: "N20,000",
      bedroomNo: 3,
      toiletNo: 3,
      parlorNo: 2,
      ownerAvatar: avatar,
      ownerName: "Akin Sam",
      apartmentLocation: "Yaba, Lagos",
    },
    {
      id: "3",
      postImage: house3,
      postTitle: "The Cubana homes",
      apartmentPrice: "N44,000",
      bedroomNo: 3,
      toiletNo: 3,
      parlorNo: 2,
      ownerAvatar: avatar,
      ownerName: "Tolu Ben",
      apartmentLocation: "Surulere, Lagos",
    },
    {
      id: "4",
      postImage: house4,
      postTitle: "Blue House",
      apartmentPrice: "N22,000",
      bedroomNo: 3,
      toiletNo: 3,
      parlorNo: 2,
      ownerAvatar: avatar,
      ownerName: "Mariam Sadik",
      apartmentLocation: "Amen Estate, Lagos",
    },
    {
      id: "5",
      postImage: house2,
      postTitle: " Revolution Plus",
      apartmentPrice: "N20,000",
      bedroomNo: 3,
      toiletNo: 3,
      parlorNo: 2,
      ownerAvatar: avatar,
      ownerName: "Akin Sam",
      apartmentLocation: "Yaba, Lagos",
    },
    {
      id: "6",
      postImage: house3,
      postTitle: "The Cubana homes",
      apartmentPrice: "N44,000",
      bedroomNo: 3,
      toiletNo: 3,
      parlorNo: 2,
      ownerAvatar: avatar,
      ownerName: "Tolu Ben",
      apartmentLocation: "Surulere, Lagos",
    },
    {
      id: "7",
      postImage: house4,
      postTitle: "Blue House",
      apartmentPrice: "N22,000",
      bedroomNo: 3,
      toiletNo: 3,
      parlorNo: 2,
      ownerAvatar: avatar,
      ownerName: "Mariam Sadik",
      apartmentLocation: "Amen Estate, Lagos",
    },
  ]);

  return (
    <section className="feat-houses-section">
      <FeaturedHousesNavbar />
      <FeaturedHousesCard houses={houses} />
    </section>
  );
};

export default FeaturedHouses;
