import React from 'react'
import { useSelector } from 'react-redux'

import available from '../../../img/arrow_right.png'
import prohibit from '../../../img/Prohibit.png'

const DashboardHome = () => {
	const userLogin = useSelector((state) => state.userLogin)
	const { userDetail } = userLogin

	return (
		<div className='dashboardmain'>
			{/* <AdminHeader title={'Overview'} /> */}
			<div className='container'>
				<div className='dashboardmain__apartment container'>
					<div className='dashboardmain__apartment__div'>
						<div className='row'>
							<div className='col-lg-3 col-md-6'>
								<div className='dashboardmain__apartment--saved'>
									<svg
										width='23'
										height='22'
										viewBox='0 0 23 22'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M16.8125 15.8125H7L4.60264 2.62702C4.57384 2.46861 4.49035 2.32533 4.36674 2.22217C4.24313 2.11901 4.08723 2.0625 3.92623 2.0625H2.375'
											stroke='#A4A6B3'
											stroke-width='3'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
										<path
											d='M7.875 19.25C8.82424 19.25 9.59375 18.4805 9.59375 17.5312C9.59375 16.582 8.82424 15.8125 7.875 15.8125C6.92576 15.8125 6.15625 16.582 6.15625 17.5312C6.15625 18.4805 6.92576 19.25 7.875 19.25Z'
											stroke='#A4A6B3'
											stroke-width='3'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
										<path
											d='M16.8125 19.25C17.7617 19.25 18.5312 18.4805 18.5312 17.5312C18.5312 16.582 17.7617 15.8125 16.8125 15.8125C15.8633 15.8125 15.0938 16.582 15.0938 17.5312C15.0938 18.4805 15.8633 19.25 16.8125 19.25Z'
											stroke='#A4A6B3'
											stroke-width='3'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
										<path
											d='M6.375 12.375H17.165C17.487 12.375 17.7988 12.262 18.046 12.0557C18.2932 11.8493 18.4602 11.5628 18.5178 11.246L19.5625 5.5H5.125'
											stroke='#A4A6B3'
											stroke-width='3'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
									<h4>Saved apartments</h4>
									<span>43</span>
								</div>
							</div>
							<div className='col-lg-3 col-md-6'>
								<div className='dashboardmain__apartment--booked'>
									<svg
										width='14'
										height='19'
										viewBox='0 0 14 19'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M12.5 17.25L6.99936 13.8125L1.5 17.25V2.125C1.5 1.94266 1.57243 1.7678 1.70136 1.63886C1.8303 1.50993 2.00516 1.4375 2.1875 1.4375H11.8125C11.9948 1.4375 12.1697 1.50993 12.2986 1.63886C12.4276 1.7678 12.5 1.94266 12.5 2.125V17.25Z'
											stroke='#A4A6B3'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
									<h4>Booked apartments</h4>
									<span>16</span>
								</div>
							</div>
							{userDetail && userDetail.userDetails.role !== 'USER' ? (
								<>
									<div className='col-lg-3 col-md-6'>
										<div className='dashboardmain__apartment--booked'>
											<img src={available} alt='' />
											<h4>Available apartments</h4>
											<span>43</span>
										</div>
									</div>
									<div className='col-lg-3 col-md-6'>
										<div className='dashboardmain__apartment--booked'>
											<img src={prohibit} alt='' />
											<h4>Busy apartments</h4>
											<span>3</span>
										</div>
									</div>
								</>
							) : null}
						</div>
					</div>
				</div>
				<div className='container'>
					<div className='dashboardmain__apartment__div'>
						<div className='row'>
							<div className='col-md-5'>
								<div className='dashboardmain__booking'>
									<div className='dashboardmain__bookingtop'>
										<h4 className='dashboardmain__booking--heading'>
											My running Bookings
										</h4>
										<div className='row'>
											<div className='col-lg-6 col-md-12'>
												<div className='dashboardmain__booking--checkin'>
													<p className='dashboardmain__booking--text'>
														<svg
															width='30'
															height='30'
															viewBox='0 0 30 30'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
														>
															<circle cx='15' cy='15' r='15' fill='white' />
															<path
																d='M21.9963 7.4375H8.1531C7.77083 7.4375 7.46094 7.7453 7.46094 8.125V21.875C7.46094 22.2547 7.77083 22.5625 8.1531 22.5625H21.9963C22.3786 22.5625 22.6885 22.2547 22.6885 21.875V8.125C22.6885 7.7453 22.3786 7.4375 21.9963 7.4375Z'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M19.2275 5.71875V7.4375'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M10.9214 5.71875V7.4375'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M7.46094 11.5625H22.6885'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M11.6138 14.9998H14.0363L12.652 16.7185C12.8796 16.7185 13.1037 16.7743 13.3045 16.8808C13.5052 16.9874 13.6764 17.1415 13.8029 17.3294C13.9294 17.5174 14.0073 17.7334 14.0296 17.9584C14.052 18.1834 14.0182 18.4104 13.9311 18.6193C13.8441 18.8282 13.7065 19.0126 13.5306 19.1561C13.3547 19.2996 13.1459 19.3978 12.9227 19.442C12.6995 19.4862 12.4687 19.475 12.2509 19.4095C12.033 19.344 11.8348 19.2261 11.6737 19.0664'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M16.8052 16.031L18.1895 14.9998V19.4685'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
														</svg>
														<span>Check in</span>
													</p>
													<p className='dashboardmain__booking--date'>
														Tue, Jan 03
													</p>
												</div>
											</div>
											<div className='col-lg-6 col-md-12'>
												<div className='dashboardmain__booking--checkout'>
													<p className='dashboardmain__booking--text'>
														<svg
															width='30'
															height='30'
															viewBox='0 0 30 30'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
														>
															<circle cx='15' cy='15' r='15' fill='white' />
															<path
																d='M21.9963 7.4375H8.1531C7.77083 7.4375 7.46094 7.7453 7.46094 8.125V21.875C7.46094 22.2547 7.77083 22.5625 8.1531 22.5625H21.9963C22.3786 22.5625 22.6885 22.2547 22.6885 21.875V8.125C22.6885 7.7453 22.3786 7.4375 21.9963 7.4375Z'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M19.2275 5.71875V7.4375'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M10.9214 5.71875V7.4375'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M7.46094 11.5625H22.6885'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M11.6138 14.9998H14.0363L12.652 16.7185C12.8796 16.7185 13.1037 16.7743 13.3045 16.8808C13.5052 16.9874 13.6764 17.1415 13.8029 17.3294C13.9294 17.5174 14.0073 17.7334 14.0296 17.9584C14.052 18.1834 14.0182 18.4104 13.9311 18.6193C13.8441 18.8282 13.7065 19.0126 13.5306 19.1561C13.3547 19.2996 13.1459 19.3978 12.9227 19.442C12.6995 19.4862 12.4687 19.475 12.2509 19.4095C12.033 19.344 11.8348 19.2261 11.6737 19.0664'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M16.8052 16.031L18.1895 14.9998V19.4685'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
														</svg>
														<span>Check out</span>
													</p>
													<p className='dashboardmain__booking--date'>
														Tue, Jan 03
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className='dashboardmain__bookingbottom'>
										<div className='dashboardmain__counter'>
											{/* <div className='dashboardmain__counter--count'></div> */}
											<progress
												style={{ width: '100%' }}
												id='file'
												value='32'
												max='100'
											>
												32%
											</progress>
											<div className='dashboardmain__counter--details'>
												<span className='dashboardmain__counter--used'>
													Used days: <strong>4</strong>
												</span>
												<span className='dashboardmain__counter--available'>
													Available days: <strong>23</strong>
												</span>
											</div>
										</div>
										<ul className='dashboardmain__list'>
											<li className='dashboardmain__item'>
												<span className='dashboardmain__item--name'>
													Adults
												</span>
												<strong>3</strong>
											</li>
											<li className='dashboardmain__item'>
												<span className='dashboardmain__item--name'>
													Children
												</span>
												<strong>3</strong>
											</li>
											<li className='dashboardmain__item'>
												<span className='dashboardmain__item--name'>
													Roomes
												</span>
												<strong>3</strong>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='col-md-7'>
								<div className='dashboardmain__booking'>
									<div className='dashboardmain__bookingtop'>
										<h4 className='dashboardmain__booking--heading'>
											Food order
										</h4>
										<div className='row'>
											<div className='col-md-5'>
												<div className='dashboardmain__booking--checkout green'>
													<p className='dashboardmain__booking--text'>
														<svg
															width='31'
															height='30'
															viewBox='0 0 31 30'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
														>
															<circle
																cx='15.2461'
																cy='15'
																r='15'
																fill='white'
															/>
															<path
																d='M15 10.875V15'
																stroke='#21A58F'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M18.5724 17.0625L15 15'
																stroke='#21A58F'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M19.8267 12.5693H23.2642V9.13184'
																stroke='#21A58F'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M20.3475 20.3475C19.2899 21.4051 17.9424 22.1254 16.4754 22.4172C15.0084 22.709 13.4878 22.5592 12.106 21.9868C10.7241 21.4145 9.54299 20.4451 8.71201 19.2015C7.88103 17.9579 7.4375 16.4957 7.4375 15C7.4375 13.5043 7.88103 12.0421 8.71201 10.7985C9.54299 9.55486 10.7241 8.58555 12.106 8.01316C13.4878 7.44078 15.0084 7.29101 16.4754 7.58281C17.9424 7.87462 19.2899 8.59487 20.3475 9.65251L23.2643 12.5693'
																stroke='#21A58F'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
														</svg>
														<span>No. of days</span>
													</p>
													<p className='dashboardmain__booking--date'>
														14 days
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className='dashboardmain__bookingbottom'>
										<div className='dashboardmain__counter'>
											<progress
												style={{ width: '100%' }}
												id='file'
												value='40'
												max='100'
											>
												32%
											</progress>
											<div className='dashboardmain__counter--details'>
												<span className='dashboardmain__counter--used'>
													Used days: <strong>6</strong>
												</span>
												<span className='dashboardmain__counter--available'>
													Available days: <strong>23</strong>
												</span>
											</div>
										</div>
										<ul className='dashboardmain__list'>
											<li className='dashboardmain__item'>
												<span className='dashboardmain__item--name'>
													No. of times per day
												</span>
												<strong>3</strong>
											</li>
											<li className='dashboardmain__item'>
												<span className='dashboardmain__item--name'>
													Children
												</span>
												<strong>3</strong>
											</li>
											<li className='dashboardmain__item'>
												<span className='dashboardmain__item--name'>Adult</span>
												<strong>3</strong>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='col-md-5'>
								<div className='dashboardmain__booking'>
									<div className='dashboardmain__bookingtop'>
										<h4 className='dashboardmain__booking--heading'>
											Booked ride
										</h4>

										<div className='row'>
											<div className='col-lg-6 col-md-12'>
												<div className='dashboardmain__booking--checkin'>
													<p className='dashboardmain__booking--text'>
														<svg
															width='30'
															height='30'
															viewBox='0 0 30 30'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
														>
															<circle cx='15' cy='15' r='15' fill='white' />
															<path
																d='M21.9963 7.4375H8.1531C7.77083 7.4375 7.46094 7.7453 7.46094 8.125V21.875C7.46094 22.2547 7.77083 22.5625 8.1531 22.5625H21.9963C22.3786 22.5625 22.6885 22.2547 22.6885 21.875V8.125C22.6885 7.7453 22.3786 7.4375 21.9963 7.4375Z'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M19.2275 5.71875V7.4375'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M10.9214 5.71875V7.4375'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M7.46094 11.5625H22.6885'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M11.6138 14.9998H14.0363L12.652 16.7185C12.8796 16.7185 13.1037 16.7743 13.3045 16.8808C13.5052 16.9874 13.6764 17.1415 13.8029 17.3294C13.9294 17.5174 14.0073 17.7334 14.0296 17.9584C14.052 18.1834 14.0182 18.4104 13.9311 18.6193C13.8441 18.8282 13.7065 19.0126 13.5306 19.1561C13.3547 19.2996 13.1459 19.3978 12.9227 19.442C12.6995 19.4862 12.4687 19.475 12.2509 19.4095C12.033 19.344 11.8348 19.2261 11.6737 19.0664'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M16.8052 16.031L18.1895 14.9998V19.4685'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
														</svg>
														<span>Check in</span>
													</p>
													<p className='dashboardmain__booking--date'>
														Tue, Jan 03
													</p>
												</div>
											</div>
											<div className='col-lg-6 col-md-12'>
												<div className='dashboardmain__booking--checkout'>
													<p className='dashboardmain__booking--text'>
														<svg
															width='30'
															height='30'
															viewBox='0 0 30 30'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
														>
															<circle cx='15' cy='15' r='15' fill='white' />
															<path
																d='M21.9963 7.4375H8.1531C7.77083 7.4375 7.46094 7.7453 7.46094 8.125V21.875C7.46094 22.2547 7.77083 22.5625 8.1531 22.5625H21.9963C22.3786 22.5625 22.6885 22.2547 22.6885 21.875V8.125C22.6885 7.7453 22.3786 7.4375 21.9963 7.4375Z'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M19.2275 5.71875V7.4375'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M10.9214 5.71875V7.4375'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M7.46094 11.5625H22.6885'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M11.6138 14.9998H14.0363L12.652 16.7185C12.8796 16.7185 13.1037 16.7743 13.3045 16.8808C13.5052 16.9874 13.6764 17.1415 13.8029 17.3294C13.9294 17.5174 14.0073 17.7334 14.0296 17.9584C14.052 18.1834 14.0182 18.4104 13.9311 18.6193C13.8441 18.8282 13.7065 19.0126 13.5306 19.1561C13.3547 19.2996 13.1459 19.3978 12.9227 19.442C12.6995 19.4862 12.4687 19.475 12.2509 19.4095C12.033 19.344 11.8348 19.2261 11.6737 19.0664'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M16.8052 16.031L18.1895 14.9998V19.4685'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
														</svg>
														<span>Check out</span>
													</p>
													<p className='dashboardmain__booking--date'>
														Tue, Jan 03
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className='dashboardmain__bookingbottom '>
										<div className='dashboardmain__counter'>
											<progress
												style={{ width: '100%' }}
												id='file'
												value='40'
												max='100'
											>
												32%
											</progress>
											<div className='dashboardmain__counter--details'>
												<span className='dashboardmain__counter--used'>
													Used days: <strong>3</strong>
												</span>
												<span className='dashboardmain__counter--available'>
													Available days: <strong>30</strong>
												</span>
											</div>
										</div>
										<ul className='dashboardmain__list'>
											<li className='dashboardmain__item'>
												<span className='dashboardmain__item--name'>
													Adults
												</span>
												<strong>19</strong>
											</li>
											<li className='dashboardmain__item'>
												<span className='dashboardmain__item--name'>
													Children
												</span>
												<strong>3</strong>
											</li>
											<li className='dashboardmain__item'>
												<span className='dashboardmain__item--name'>
													Roomes
												</span>
												<strong>3</strong>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='col-md-7'>
								<div className='dashboardmain__booking dashboardmain__booking--color '>
									<div className='dashboardmain__bookingtop dash_bb'>
										<h4 className='dashboardmain__booking--heading'>
											Laundary service
										</h4>
										<div className='row'>
											<div className='col-lg-4 col-md-6'>
												<div className='dashboardmain__booking--checkin dashboardmain__booking--checkin--color'>
													<p className='dashboardmain__booking--text'>
														<svg
															width='30'
															height='30'
															viewBox='0 0 30 30'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
														>
															<circle cx='15' cy='15' r='15' fill='white' />
															<path
																d='M21.9963 7.4375H8.1531C7.77083 7.4375 7.46094 7.7453 7.46094 8.125V21.875C7.46094 22.2547 7.77083 22.5625 8.1531 22.5625H21.9963C22.3786 22.5625 22.6885 22.2547 22.6885 21.875V8.125C22.6885 7.7453 22.3786 7.4375 21.9963 7.4375Z'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M19.2275 5.71875V7.4375'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M10.9214 5.71875V7.4375'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M7.46094 11.5625H22.6885'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M11.6138 14.9998H14.0363L12.652 16.7185C12.8796 16.7185 13.1037 16.7743 13.3045 16.8808C13.5052 16.9874 13.6764 17.1415 13.8029 17.3294C13.9294 17.5174 14.0073 17.7334 14.0296 17.9584C14.052 18.1834 14.0182 18.4104 13.9311 18.6193C13.8441 18.8282 13.7065 19.0126 13.5306 19.1561C13.3547 19.2996 13.1459 19.3978 12.9227 19.442C12.6995 19.4862 12.4687 19.475 12.2509 19.4095C12.033 19.344 11.8348 19.2261 11.6737 19.0664'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M16.8052 16.031L18.1895 14.9998V19.4685'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
														</svg>
														<span>Check in</span>
													</p>
													<p className='dashboardmain__booking--date'>
														Tue, Jan 03
													</p>
												</div>
											</div>
											<div className='col-lg-4 col-md-6'>
												<div className='dashboardmain__booking--checkin dashboardmain__booking--checkin--color'>
													<p className='dashboardmain__booking--text'>
														<svg
															width='30'
															height='30'
															viewBox='0 0 30 30'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
														>
															<circle cx='15' cy='15' r='15' fill='white' />
															<path
																d='M21.9963 7.4375H8.1531C7.77083 7.4375 7.46094 7.7453 7.46094 8.125V21.875C7.46094 22.2547 7.77083 22.5625 8.1531 22.5625H21.9963C22.3786 22.5625 22.6885 22.2547 22.6885 21.875V8.125C22.6885 7.7453 22.3786 7.4375 21.9963 7.4375Z'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M19.2275 5.71875V7.4375'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M10.9214 5.71875V7.4375'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M7.46094 11.5625H22.6885'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M11.6138 14.9998H14.0363L12.652 16.7185C12.8796 16.7185 13.1037 16.7743 13.3045 16.8808C13.5052 16.9874 13.6764 17.1415 13.8029 17.3294C13.9294 17.5174 14.0073 17.7334 14.0296 17.9584C14.052 18.1834 14.0182 18.4104 13.9311 18.6193C13.8441 18.8282 13.7065 19.0126 13.5306 19.1561C13.3547 19.2996 13.1459 19.3978 12.9227 19.442C12.6995 19.4862 12.4687 19.475 12.2509 19.4095C12.033 19.344 11.8348 19.2261 11.6737 19.0664'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
															<path
																d='M16.8052 16.031L18.1895 14.9998V19.4685'
																stroke='#00349A'
																stroke-width='2'
																stroke-linecap='round'
																stroke-linejoin='round'
															/>
														</svg>
														<span>Check out</span>
													</p>
													<p className='dashboardmain__booking--date'>
														Tue, Jan 03
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className='row no-gutters'>
										<div className='col-md-7'>
											<div className='dashboardblue'>
												<svg
													width='160'
													height='160'
													viewBox='0 0 160 160'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path
														d='M160 80C160 124.183 124.183 160 80 160C35.8172 160 0 124.183 0 80C0 35.8172 35.8172 0 80 0C124.183 0 160 35.8172 160 80ZM11.531 80C11.531 117.814 42.1856 148.469 80 148.469C117.814 148.469 148.469 117.814 148.469 80C148.469 42.1856 117.814 11.531 80 11.531C42.1856 11.531 11.531 42.1856 11.531 80Z'
														fill='#FDFDFF'
													/>
													<path
														d='M160 80C160 90.5058 157.931 100.909 153.91 110.615C149.89 120.321 143.997 129.14 136.569 136.569C129.14 143.997 120.321 149.89 110.615 153.91C100.909 157.931 90.5057 160 80 160V148.469C88.9915 148.469 97.8949 146.698 106.202 143.257C114.509 139.816 122.057 134.773 128.415 128.415C134.773 122.057 139.816 114.509 143.257 106.202C146.698 97.8949 148.469 88.9915 148.469 80H160Z'
														fill='#00349A'
													/>
												</svg>
												<div className='dashboardblue__text'>
													<p className='dashboardblue__used'>Used days: 4</p>
													<p className='dashboardblue__available'>
														Available days: 23
													</p>
												</div>
											</div>
										</div>
										<div className='col-md-5'>
											<div className='dashboardblue__list'>
												<ul className='dashboardmain__list'>
													<li className='dashboardmain__item'>
														<span className='dashboardmain__item--name'>
															No of days
														</span>
														<strong>19</strong>
													</li>
													<li className='dashboardmain__item'>
														<span className='dashboardmain__item--name'>
															Children
														</span>
														<strong>3</strong>
													</li>
													<li className='dashboardmain__item'>
														<span className='dashboardmain__item--name'>
															Adults
														</span>
														<strong>3</strong>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DashboardHome
