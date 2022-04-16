import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../../../components/Loader'
import './DashboardProfile.scss'
import {
	get_user_details,
	update_user,
} from '../../../redux/actions/userActions'

function DashboardProfile() {
	const dispatch = useDispatch()

	const getUserProfile = useSelector((state) => state.getUserProfile)
	const { loading, userProfile } = getUserProfile

	const userUpdate = useSelector((state) => state.userUpdate)
	const { loading: loadingUpdate, success } = userUpdate

	const [fullName, setFullName] = useState('')
	const [email, setEmail] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [state, setStatee] = useState('')
	const [country, setCountry] = useState('')
	const [city, setCity] = useState('')

	const [validId, setValidId] = useState('')
	const [profilePicture, setProfilePicture] = useState('') 

	const [imageFile, setImageFile] = useState('');
	const [imageFormat, setImageFormat] = useState('');
	const [mainImage, setMainImage] = useState(null);
	const [uploadedImage, setUploadedImage] = useState('');
	const [uploading, setUploading] = useState(false);

	let i = 0

	const userLogin = useSelector((state) => state.userLogin)
	const { userDetail } = userLogin

	const getBase64 = (file) => {
		return new Promise((resolve) => {
			let baseURL = '';
			let reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				// Make a fileInfo Object
				baseURL = reader.result;
				resolve(baseURL);
			};
		});
	};

	const handleFileInputChange = (e) => {
		let file = e.target.files[0];
		setMainImage(file);
		getBase64(file)
			.then((result) => {
				file['base64'] = result;
				console.log('File Is', file);
				let split = file.base64.split(',');
				setImageFile(split[1]);
				let type = file.type.split('/');
				setImageFormat(type[1]);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const uploadFileHandler = () => {
		const formData = new FormData();
		formData.append('file', mainImage);
		formData.append('image', mainImage);
		formData.append('upload_preset', 'pebbles')
		formData.append('cloud_name', 'pebbles-signature')

		setUploading(true);

		fetch('https://api.cloudinary.com/v1_1/pebbles-signature/image/upload', {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json())
			.then((data) => {
				setUploading(false);
				setMainImage(null);
				setUploadedImage(data.url);
				setImageFile('');
			})
			.catch((err) => {
				console.log(err);
				setUploading(false);
				setMainImage(null);
				setImageFile('');
			});
	};

	const updateHandler = (e) => {
		e.preventDefault()
		let data = {
			fullName,
			phoneNumber,
			state,
			country,
			city,
			profilePicture: uploadedImage,
			email,
			// validId,
		}
		dispatch(update_user(data))
	}

	useEffect(() => {
		if (!userProfile || userProfile.user._id != userDetail.userDetails._id) {
			dispatch(get_user_details())
		} else {
			setFullName(userProfile.user.fullName)
			setEmail(userProfile.user.email)
			setPhoneNumber(userProfile.user.phoneNumber)
			setStatee(userProfile.user.state)
			setCountry(userProfile.user.country)
			setCity(userProfile.user.city)
		}
		//   return () => {
		//     second
		//   }
	}, [dispatch, userDetail, userProfile.user._id, success])

	useEffect(() => {
		if (uploadedImage != '') {
			console.log(uploadedImage);
		}
	}, [uploadedImage]);

	return (
		<div className='profile'>
			{/* <AdminHeader title={'Profile'} /> */}
			{loading ? (
				<Loader />
			) : userProfile ? (
				<div className='dashboardmain__apartment'>
					<form className='profile__form' onSubmit={updateHandler}>
						<div className='profile__flex'>
							{/* <div className='profile__form-group'>
										<label className='profile__form-label'>Last name</label>
										<input
											type='text'
											placeholder='Doe'
											className='profile__form-input'
										/>
									</div> */}
						</div>
						<div className='profile__form-group'>
							<label className='profile__form-label'>Full name</label>
							<input
								type='text'
								placeholder='John Doe'
								className='profile__form-input'
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
							/>
						</div>
						<div className='profile__form-group'>
							<label className='profile__form-label'>Email</label>
							<input
								type='email'
								placeholder='johnDoe@gmail.com'
								className='profile__form-input'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className='profile__form-group'>
							<label className='profile__form-label'>Phone Number</label>
							<input
								type='text'
								placeholder='07012345678'
								className='profile__form-input'
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
							/>
						</div>
						<div className='profile__form-group'>
							<label className='profile__form-label'>Country</label>
							<input
								type='text'
								placeholder='Nigeria'
								className='profile__form-input'
								value={country}
								onChange={(e) => setCountry(e.target.value)}
							/>
						</div>
						<div className='profile__form-group'>
							<label className='profile__form-label'>State</label>
							<input
								type='text'
								placeholder='Lagos'
								className='profile__form-input'
								value={state}
								onChange={(e) => setStatee(e.target.value)}
							/>
						</div>
						<div className='profile__form-group'>
							<label className='profile__form-label'>City</label>
							<input
								type='text'
								placeholder='Ikeja'
								className='profile__form-input'
								value={city}
								onChange={(e) => setCity(e.target.value)}
							/>
						</div>
						{/* <div className='profile__form-group'>
									<label className='profile__form-label'>Password</label>
									<input
										type='password'
										placeholder='**********'
										className='profile__form-input'
									/>
								</div> */}
						<div className='profile__form-group'>
							<label className='profile__form-label'>Valid ID</label>
							<div className='profile__form-file'>
								<span className='profile__form-file-num'>1 item uploaded</span>
								<label>
									Select image
									<input
										id='file'
										type='file'
										placeholder='1 item uploaded'
										className='profile__form-input'
									/>
								</label>
							</div>
						</div>

						<div className='facilities__images'>
						<p className='facilities__images-text'>
							Profile Picture
						</p>

						<label>
							{uploadedImage == '' ? (
								<svg
									width='100'
									height='100'
									viewBox='0 0 100 100'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<rect
										x='0.5'
										y='0.5'
										width='99'
										height='99'
										rx='5.5'
										stroke='#A4A6B3'
									/>
									<path
										d='M46.9998 60H52.9998C57.9998 60 59.9998 58 59.9998 53V47C59.9998 42 57.9998 40 52.9998 40H46.9998C41.9998 40 39.9998 42 39.9998 47V53C39.9998 58 41.9998 60 46.9998 60Z'
										stroke='#A4A6B3'
										stroke-width='2.51471'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
									<path
										d='M46.9998 47.9999C48.1043 47.9999 48.9998 47.1045 48.9998 45.9999C48.9998 44.8954 48.1043 43.9999 46.9998 43.9999C45.8952 43.9999 44.9998 44.8954 44.9998 45.9999C44.9998 47.1045 45.8952 47.9999 46.9998 47.9999Z'
										stroke='#A4A6B3'
										stroke-width='2.51471'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
									<path
										d='M40.6702 56.9501L45.6002 53.6401C46.3902 53.1101 47.5302 53.1701 48.2402 53.7801L48.5702 54.0701C49.3502 54.7401 50.6102 54.7401 51.3902 54.0701L55.5502 50.5001C56.3302 49.8301 57.5902 49.8301 58.3702 50.5001L60.0002 51.9001'
										stroke='#A4A6B3'
										stroke-width='2.51471'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							) : (
								<>
									{mainImage &&
											<img
												src={mainImage.base64}
												style={{
													width: '8rem',
													height: '8rem',
													border: '1px solid #333',
													padding: '7px',
												}}
											/>
										}
								</>
							)}
							<input
								type='file'
								// onChange={(e) => setImage(e.target.files[0])}
								onChange={handleFileInputChange}
								// style={{ display: 'none' }}
							/>
							{imageFile && (
								<div className='col-md-12'>
									{/* <img
										src={`data:image/${imageFormat};base64,${imageFile}`}
										className='img-fluid'
										alt='User'
										height='150px'
										width='150px'
									/> */}
									{/* <p> {fileLength} Files selected. </p> */}
									<div className='mt-2'>
										<button
											className='btn btn-primary'
											onClick={uploadFileHandler}
											disabled={uploading ? true : false}
										>
											Save{' '}
											{uploading && <i className='fas fa-spinner fa-spin'></i>}
										</button>
									</div>
								</div>
							)}
							<input
								type='text'
								value={uploadedImage}
								onChange={(e) => setUploadedImage(e.target.value)}
								className='site-form mb-3 d-none'
							/>
						</label>
					</div>

						<button
							className='profile__button'
							type='submit'
							disabled={loading ? true : false}
						>
							{loadingUpdate ? (
								<i className='fas fa-spinner fa-spin'></i>
							) : (
								<span>Update</span>
							)}
						</button>
					</form>
				</div>
			) : (
				<p>Nothing to show</p>
			)}
		</div>
	)
}

export default DashboardProfile
