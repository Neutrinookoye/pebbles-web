import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/css/becomeHostForm.css'

const BecomeHostForm = () => {
	const navigate = useNavigate()
	const [selectedOption, setSelectedOption] = useState('')

	const handleChange = (e) => {
		setSelectedOption(e.target.value)
	}

	const handleSelectedOption = (e) => {
		e.preventDefault()
		if (selectedOption === 'individual') {
			navigate('/become-host/individual')
		} else if (selectedOption === 'business') {
			navigate('/become-host/business')
		}
	}

	useEffect(() => {}, [selectedOption])

	return (
		<div className='host-form-wrapper form'>
			<div className='heading'>
				<h1>Select your preferred</h1>
			</div>
			<form className='host-form'>
				<div className='host-image-wrapper'>
					<div className='host-image-overlay'></div>
				</div>

				<div className='form-input-group account'>
					<label className='form-input-label' for='account-type'>
						Individual
					</label>
					<input
						className='form-input'
						type='radio'
						name='account-type'
						value='individual'
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className='form-input-group account'>
					<label className='form-input-label' for='account-type'>
						Business
					</label>
					<input
						className='form-input'
						type='radio'
						name='account-type'
						value='business'
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className='form-input-group'>
					<label className='form-input-label' for='submit' hidden></label>
					<button
						className='form-input'
						// name='submit'
						onClick={(e) => handleSelectedOption(e)}
					>
						Continue
					</button>
				</div>

				<div className='form-input-group'>
					<label className='form-input-label' for='skip' hidden></label>
					<button className='form-input skip-btn' name='skip' type='button'>
						Skip
					</button>
				</div>
			</form>
		</div>
	)
}

export default BecomeHostForm
