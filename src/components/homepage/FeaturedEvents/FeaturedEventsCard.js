import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedEventsCard = ({ events }) => {
  //  constructor(props){
  //   super(props);
  //   this.next = this.next.bind(this);
  //   this.previous = this.previous.bind(this);
  // }
  // next(){
  //   this.slider.slickNext();
  // }
  // previous(){
  //   this.slider.slickPrev();
  // }

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    variableWidth: true,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
    return (
    <Slider {...settings} className="featured-events">
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
      ))}
    </Slider>
  );
};

export default FeaturedEventsCard;
