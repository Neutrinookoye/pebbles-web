import React, { useState } from 'react'
import './styles/css/loginForm.css'
import { faTimes, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
// import {
//   loginIndividual,
//   loginUsers,
//   loginHost,
//   LOGIN_SUCCESS,
//   LOGIN_FAIL,
// } from "../../redux/actions/Auth";
import { user_login } from '../../redux/actions/userActions'
import { useNavigate } from 'react-router-dom'
// import firstScreen from "../../img/first-screen.png";

const LoginForm = ({ openLoginModal }) => {
	const dispatch = useDispatch()

	let navigate = useNavigate()

	const userLogin = useSelector((state) => state.userLogin)
	const { userDetail, error, loading } = userLogin

	const [isLoading, setIsLoading] = useState(false)

	if (userDetail?.userDetails) {
		navigate('/app/dashboard')
	}

	return (
		<div className='modal-wrapper' onClick={openLoginModal}>
			<div className='form-page modal-box' onClick={(e) => e.stopPropagation()}>
				<Formik
					initialValues={{ loginId: '', password: '' }}
					validate={(values) => {
						const errors = {}
						if (!values.loginId) {
							errors.loginId = 'Required'
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.loginId)
						) {
							errors.loginId = 'Invalid email address'
						}
						return errors
					}}
					onSubmit={async (values, { setSubmitting }) => {
						// dispatch(loginUsers(values));
						setIsLoading(true)
						dispatch(user_login({ ...values }))
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
						<form onSubmit={handleSubmit} className='login-form'>
							<h1>Log In</h1>

							<div className='form-input-group'>
								<label className='form-input-label' for='email'>
									Email Address
								</label>
								<input
									type='email'
									name='loginId'
									className='form-input'
									placeholder='abv@gmail.com'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.loginId}
									required
								/>
								{errors.loginId && touched.loginId && errors.loginId}
							</div>

							<div className='form-input-group'>
								<label className='form-input-label' for='password'>
									Password
								</label>
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

							<div className='form-input-group checkbox'>
								<input className='form-input' type='checkbox' name='checkbox' />
								<label className='form-input-label' for='checkbox'>
									Keep me logged in
								</label>
							</div>

							<div className='form-input-group'>
								<button
									className='form-input'
									type='submit'
									disabled={isSubmitting}
								>
									{loading ? (
										<i className='fas fa-spinner fa-spin'></i>
									) : (
										'Continue'
									)}
								</button>
							</div>

							<div className='form-input-group paragraphs'>
								<p>
									If you do not have account, sign up <a href='/signup'>here</a>
								</p>
								<p>
									<a href='/forgot-password'>Forgot your password?</a>
								</p>
							</div>
						</form>
					)}
				</Formik>
			</div>
		</div>
	)
}

export default LoginForm
