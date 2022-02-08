import React, { useState } from 'react'
import "../../homepage/css/banner.css"
import '../css/exploreEvents.css'
import EventsCard from './EventsCard'

import avatar from '../img/avatar.png'
import event1 from '../img/featured-images/feat-event1.png'
import event2 from '../img/featured-images/feat-event2.png'
import event3 from '../img/featured-images/feat-event3.png'
import event4 from '../img/featured-images/feat-event4.png'


const Events = () => {
    const [events, setEvent] = useState([
        {
            id: "1",
            postImage: event1,
            postTitle: "Music Concert",
            apartmentPrice: "N35,000",
            eventAvatar: avatar,
            eventName: "House of Villain",
            eventLocation: "Ikeja, Lagos"
        },
        {
            id: "2",
            postImage: event2,
            postTitle: "New Year Carnival",
            apartmentPrice: "N20,000",
            eventAvatar: avatar,
            eventName: "Brian Jotter",
            eventLocation: "Yaba, Lagos"
        },
        {
            id: "3",
            postImage: event3,
            postTitle: "Fun Fiesta",
            apartmentPrice: "N44,000",
            eventAvatar: avatar,
            eventName: "AY Live",
            eventLocation: "Surulere, Lagos"
        },
        {
            id: "4",
            postImage: event4,
            postTitle: "MIL Concert",
            apartmentPrice: "N22,000",
            eventAvatar: avatar,
            eventName: "MIL Concert",
            eventLocation: "Amen Estate, Lagos"
        },
        {
            id: "5",
            postImage: event1,
            postTitle: "Music Concert",
            apartmentPrice: "N35,000",
            eventAvatar: avatar,
            eventName: "House of Villain",
            eventLocation: "Ikeja, Lagos"
        },
        {
            id: "6",
            postImage: event2,
            postTitle: "New Year Carnival",
            apartmentPrice: "N20,000",
            eventAvatar: avatar,
            eventName: "Brian Jotter",
            eventLocation: "Yaba, Lagos"
        },
        {
            id: "7",
            postImage: event3,
            postTitle: "Fun Fiesta",
            apartmentPrice: "N44,000",
            eventAvatar: avatar,
            eventName: "AY Live",
            eventLocation: "Surulere, Lagos"
        },
        {
            id: "8",
            postImage: event4,
            postTitle: "MIL Concert",
            apartmentPrice: "N22,000",
            eventAvatar: avatar,
            eventName: "MIL Concert",
            eventLocation: "Amen Estate, Lagos"
        },
        {
            id: "9",
            postImage: event1,
            postTitle: "Music Concert",
            apartmentPrice: "N35,000",
            eventAvatar: avatar,
            eventName: "House of Villain",
            eventLocation: "Ikeja, Lagos"
        },
        {
            id: "10",
            postImage: event2,
            postTitle: "New Year Carnival",
            apartmentPrice: "N20,000",
            eventAvatar: avatar,
            eventName: "Brian Jotter",
            eventLocation: "Yaba, Lagos"
        },
        {
            id: "11",
            postImage: event3,
            postTitle: "Fun Fiesta",
            apartmentPrice: "N44,000",
            eventAvatar: avatar,
            eventName: "AY Live",
            eventLocation: "Surulere, Lagos"
        },
        {
            id: "12",
            postImage: event4,
            postTitle: "MIL Concert",
            apartmentPrice: "N22,000",
            eventAvatar: avatar,
            eventName: "MIL Concert",
            eventLocation: "Amen Estate, Lagos"
        }
    ]);

    return (
        <section className="events-section">
            <h2>Explore upcoming events in your Location</h2>
            <EventsCard events={events} />
        </section>
    )
}

export default Events
