import React, { useState } from 'react'
import '../css/reviews.css'
import ReviewCard from './ReviewCard'
import UserReviewNavbar from './UserReviewNavbar'

import review2 from '../img/review-image2.png'
import review3 from '../img/review-image3.png'
import avatar from '../img/avatar.png'

const UserReviews = () => {
    const [reviews, setReview] = useState([
        {
            id: "1",
            reviewImage: review2,
            reviewTitle: "My house sold out fast!",
            description: "I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!",
            userAvatar: avatar,
            userName: "Courtney Henry",
            userJob: "CEO Andarafish",
            starRating: "4.3"
        },
        {
            id: "2",
            reviewImage: review2,
            reviewTitle: "Best! I got the house I wanted through Pebbles",
            description: "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
            userAvatar: avatar,
            userName: "Aisha Daniels",
            userJob: "Doctor",
            starRating: 4.6
        },
        {
            id: "3",
            reviewImage: review3,
            reviewTitle: "Through the Pebbles, I can get a house for my self",
            description: "By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!",
            userAvatar: avatar,
            userName: "Abeeb Kola",
            userJob: "Corper",
            starRating: "4.6"
        }
    ]);

    return (
        <section className="user-reviews-section">
            <UserReviewNavbar />
            <ReviewCard reviews={reviews} />
        </section>
    )
}

export default UserReviews
