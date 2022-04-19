import React, { useState } from 'react'
import { ReviewsCard } from './ReviewsCard'
import avatar1 from '../img/avatar1.png'
import avatar2 from '../img/avatar2.png'
import avatar3 from '../img/avatar3.png'

export const Reviews = () => {
	const [reviews, setreviews] = useState([
		{
			id: '1',
			userImage: avatar1,
			userName: 'John Samantha',
			userJob: 'Banker',
			date: '1wk',
			review:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eius tenetur blanditiis quo,doloribus sequi ipsam iusto ut quibusdam labore consectetur.',
		},
		{
			id: '2',
			userImage: avatar2,
			userName: 'Ife Tolu',
			userJob: 'Teacher',
			date: '2wk',
			review:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eius tenetur blanditiis quo,doloribus sequi ipsam iusto ut quibusdam labore consectetur.',
		},
		{
			id: '3',
			userImage: avatar3,
			userName: 'Matthew Sean',
			userJob: 'Doctor',
			date: '1mo',
			review:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eius tenetur blanditiis quo,doloribus sequi ipsam iusto ut quibusdam labore consectetur.',
		},
	])
	return (
		<section className='my-apartment-info-reviews'>
			<div className='review-wrapper'>
				<div className='review-header'>
					<div>
						<h2>Reviews</h2>
						<p>How others rated this apartment</p>
					</div>
					<button className='add-review'>Add Review</button>
				</div>
				<ReviewsCard reviews={reviews} />
			</div>
		</section>
	)
}
