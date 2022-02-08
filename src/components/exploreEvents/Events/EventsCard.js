import React from 'react'

const EventsCard = ({ events }) => {
    return (
        <div className="explore-events">
            {events.map((event) => (
                <div className="post-card" key={event.id}>
                    <div className="post-image">
                        <img src={event.postImage} alt="" />
                    </div>
                    <div className="body">
                        <p className="post-title">{event.postTitle}</p>
                        <p className="price">{event.apartmentPrice}</p>

                        <div className="events">
                            <div className="user">
                                <img className="event-avatar" src={event.eventAvatar} alt="" />
                                <div className="event-details">
                                    <p className="name">{event.eventName}</p>
                                    <p className="location">{event.eventLocation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    );
}

export default EventsCard
