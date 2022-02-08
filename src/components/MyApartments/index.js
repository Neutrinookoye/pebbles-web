import React, { useState } from "react";
import "../MyApartments/css/myApartments.scss";
import MyApartmentCard from "./MyApartmentCard";

import avatar from "../MyApartments/img/avatar.png";
import avatar2 from "../MyApartments/img/avatar2.png";
import apartment1 from "../MyApartments/img/featured-images/feat-house1.png";
import apartment2 from "../MyApartments/img/featured-images/feat-house2.png";
import apartment3 from "../MyApartments/img/featured-images/feat-house3.png";
import apartment4 from "../MyApartments/img/featured-images/feat-house4.png";
import Heading from "./Heading";

const MyApartments = () => {
  const agent = {
    agentAvatar: avatar2,
    agentName: "Kareem Abu",
    yearJoined: 2020,
  };
  const [apartments, setapartments] = useState([
    {
      id: "1",
      postImage: apartment1,
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
      postImage: apartment2,
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
      postImage: apartment3,
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
      postImage: apartment4,
      postTitle: "Blue apartment",
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
      postImage: apartment1,
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
      id: "6",
      postImage: apartment2,
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
      id: "7",
      postImage: apartment3,
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
      id: "8",
      postImage: apartment4,
      postTitle: "Blue apartment",
      apartmentPrice: "N22,000",
      bedroomNo: 3,
      toiletNo: 3,
      parlorNo: 2,
      ownerAvatar: avatar,
      ownerName: "Mariam Sadik",
      apartmentLocation: "Amen Estate, Lagos",
    },
    {
      id: "9",
      postImage: apartment1,
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
      id: "10",
      postImage: apartment2,
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
      id: "11",
      postImage: apartment3,
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
      id: "12",
      postImage: apartment4,
      postTitle: "Blue apartment",
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
    <section className="apartments-section">
      <Heading
        agentAvatar={agent.agentAvatar}
        agentName={agent.agentName}
        yearJoined={agent.yearJoined}
      />
      <MyApartmentCard apartments={apartments} />
    </section>
  );
};

export default MyApartments;
