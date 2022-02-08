import React from "react";
import "./eventsInfo.scss";
import NavBar from "../../components/homepage/NavBar";
import SubNavBar from "../../components/homepage/SubNavBar";
import Heading from "../../components/eventsInfo/Heading";
import Body from "../../components/eventsInfo/Body";
import SideAttraction from "../../components/eventsInfo/SideAttraction";
import Map from "../../components/eventsInfo/Map";
import Subscription from "../../components/eventsInfo/Subscription";
import Footer from "../../components/homepage/Footer";
import avatar from "../../components/eventsInfo/images/avatar.png"
import image1 from "../../components/eventsInfo/images/image1.png"
import image2 from "../../components/eventsInfo/images/image2.png"
import image3 from "../../components/eventsInfo/images/image3.png"

const EventsInfo = () => {
    const eventInfo = {
        eventName: "M & M Music Show",
        location: "Lekki",
        ticket1: "Regular",
        ticket2: "Vip",
        agentAvatar: avatar,
        agentName: "Kareem Abu",
        yearJoined: 2020,
        image1: image1,
        image1Alt: "",
        image2: image2,
        image2Alt: "",
        image3: image3,
        image3Alt: "",
        ticketPrice: "N590,000"
    }

    return (
        <div>
            <NavBar />
            <SubNavBar />
            <Heading
                eventName={eventInfo.eventName}
                location={eventInfo.location}
                ticket1={eventInfo.ticket1}
                ticket2={eventInfo.ticket2}
                agentAvatar={eventInfo.agentAvatar}
                agentName={eventInfo.agentName}
                yearJoined={eventInfo.yearJoined}
            />
            <Body
                image1={eventInfo.image1}
                image1Alt={eventInfo.image1Alt}
                image2={eventInfo.image2}
                image2Alt={eventInfo.image2Alt}
                image3={eventInfo.image3}
                image3Alt={eventInfo.image3Alt}
                ticketPrice={eventInfo.ticketPrice}
            />
            <SideAttraction />
            <Map />
            <Subscription />
            <Footer />
        </div>
    );
};

export default EventsInfo;
