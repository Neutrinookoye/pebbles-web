import React, { useEffect, useState } from 'react'
import './styles/css/signUpForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Formik } from 'formik'
import OtpInput from 'react-otp-input'
import { useDispatch, useSelector } from 'react-redux'
import { get_otp, user_register } from '../../redux/actions/userActions'
import { useNavigate } from 'react-router-dom'

const SignupFormIndividual = () => {
	const dispatch = useDispatch()

	let navigate = useNavigate()

	const [otp, setOtp] = useState('')

	const [showForm, setShowForm] = useState(true)
	const [showOtpForm, setShowOtpForm] = useState(false)

	const handleOtp = (otp) => {
		setOtp(otp)
	}

	const getOtpHandler = (valuess) => {
		dispatch(get_otp(valuess))
	}

	const getSubmitHandler = (val) => {
		let data = {
			...val,
			otp,
			role: 'INDIVIDUAL',
			googleSigned: 'true',
		}
		dispatch(user_register(data))
	}

	const userRegister = useSelector((state) => state.userRegister)
	const { userDetail } = userRegister

	useEffect(() => {
		if (userDetail) {
			navigate('/login')
		}
	}, [userDetail])

	return (
		<div className='signup-form-wrapper form'>
			<Formik
				initialValues={{
					email: '',
					password: '',
					confirmPassword: '',
					phoneNumber: '',
					fullName: '',
					country: '',
					state: '',
					city: '',
				}}
				validate={(values) => {
					const errors = {}
					if (!values.email) {
						errors.email = 'Required'
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = 'Invalid email address'
					}
					return errors
				}}
				onSubmit={(values, { setSubmitting }) => {
					console.log('values', {
						...values,
						otp,
						role: 'INDIVIDUAL',
						googleSigned: 'true',
					})
					// dispatch(
					// 	user_register({
					// 		...values,
					// 		otp,
					// 		role: 'USER',
					// 		googleSigned: 'true',
					// 	})
					// )
					setSubmitting(false)
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<>
						<form className='signup-form' onSubmit={handleSubmit}>
							{showForm && (
								<>
									<div className='heading'>
										<h1>Create Account (Individual)</h1>
										<p>Enter your account details</p>
									</div>

									<div className='form-input-group'>
										<label className='form-input-label' htmlFor='full-name'>
											Full Name
										</label>
										<input
											className='form-input'
											type='text'
											name='fullName'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.fullName}
											required
											placeholder='Enter Fullname'
										/>
										{errors.fullName && touched.fullName && errors.fullName}
									</div>

									<div className='form-input-group'>
										<label className='form-input-label' htmlFor='email'>
											Email Address
										</label>
										<input
											className='form-input'
											type='email'
											name='email'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.email}
											required
											placeholder='abv@gmail.com'
										/>
										{errors.email && touched.email && errors.email}
									</div>

									<div className='form-input-group'>
										<label className='form-input-label' htmlFor='phone-number'>
											Phone Number
										</label>
										<input
											className='form-input'
											type='tel'
											name='phoneNumber'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.phoneNumber}
											required
											placeholder='08092134560'
										/>
										{errors.phoneNumber &&
											touched.phoneNumber &&
											errors.phoneNumber}
									</div>

									<div className='form-input-group'>
										<label className='form-input-label' htmlFor='country'>
											Country
										</label>
										<input
											className='form-input'
											type='text'
											name='country'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.country}
											required
											placeholder='Country of Residence'
										/>
										{errors.country && touched.country && errors.country}
									</div>

									<div className='form-input-group'>
										<label className='form-input-label' htmlFor='state'>
											State
										</label>
										<input
											className='form-input'
											type='text'
											name='state'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.state}
											required
											placeholder='State of Residence'
										/>
										{errors.state && touched.state && errors.state}
									</div>

									<div className='form-input-group'>
										<label className='form-input-label' htmlFor='city'>
											City
										</label>
										<input
											className='form-input'
											type='text'
											name='city'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.city}
											required
											placeholder='City of Residence'
										/>
										{errors.city && touched.city && errors.city}
									</div>

									<div className='form-input-group'>
										<label className='form-input-label'>Password</label>
										<input
											className='form-input password'
											type='password'
											name='password'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.password}
											placeholder='********'
											required
										/>
										{errors.password && touched.password && errors.password}
									</div>

									<div className='form-input-group'>
										<label className='form-input-label'>Confirm Password</label>
										<input
											className='form-input password'
											type='password'
											name='confirmPassword'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.confirmPassword}
											placeholder='********'
											required
										/>
										{errors.confirmPassword &&
											touched.confirmPassword &&
											errors.confirmPassword}
									</div>
									<div className='form-input-group'>
										<p
											className='form-input'
											onClick={() => {
												setShowForm(false)
												setShowOtpForm(true)
												console.log(values.email)
												getOtpHandler(values)
											}}
										>
											Submit
										</p>
									</div>
								</>
							)}
							{showOtpForm && (
								<>
									<div className='heading'>
										<h1>Confirm number</h1>
										<p>
											Enter the code sent via sms to{' '}
											<span className='user-number'> {values.email} </span>
										</p>
									</div>

									<div className='otp'>
										<OtpInput
											onChange={handleOtp}
											value={otp}
											numInputs={6}
											separator={
												<span>
													<strong>.</strong>
												</span>
											}
											inputStyle={{
												width: '3rem',
												height: '3rem',
												margin: '0 1rem',
												fontSize: '2rem',
												borderRadius: 4,
												border: '1px solid rgba(0,0,0,0.3)',
											}}
										/>
									</div>

									<div className='form-input-group'>
										{/* <button
											className='form-input'
											type='submit'
											disabled={isSubmitting}
											
										>
											Submit
										</button> */}
										<p
											className='form-input'
											onClick={() => {
												setShowForm(false)
												setShowOtpForm(true)
												console.log(values.email)
												getSubmitHandler(values)
											}}
										>
											Submit
										</p>
									</div>
								</>
							)}
						</form>
					</>
				)}
			</Formik>
		</div>
	)
}

export default SignupFormIndividual
