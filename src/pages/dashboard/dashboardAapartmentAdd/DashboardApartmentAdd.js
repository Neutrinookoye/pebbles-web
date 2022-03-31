import React, { useState } from 'react'
// import Dropzone from 'react-dropzone'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import AdminHeader from '../../../components/AdminHeader/AdminHeader'
import { useSelector, useDispatch } from 'react-redux'
import { create_apartment } from '../../../redux/actions/apartmentActions'
import { MultiSelect } from 'react-multi-select-component'

function DashboardApartmentAdd() {
	const dispatch = useDispatch()
	let i = 0

	const createApartment = useSelector((state) => state.createApartment)
	const { loading } = createApartment

	const [apartmentName, setApartmentName] = React.useState('')
	const [address, setAddress] = React.useState('')
	const [apartmentCountry, setApartmentCountry] = React.useState('')
	const [apartmentState, setApartmentState] = React.useState('')
	const [typeOfApartment, setTypeOfApartment] = React.useState('')
	const [price, setPrice] = React.useState(0)
	const [facilities, setFacilities] = React.useState([])
	const [apartmentImages, setApartmentImages] = React.useState([])
	const [fileLength, setFileLength] = React.useState('')
	const [urlList, setUrlList] = React.useState([])

	const [apartmentInfo, setApartmentInfo] = React.useState('')
	const [numberOfRooms, setNumberOfRooms] = React.useState('')
	const [numberOfToilets, setNumberOfToilets] = React.useState('')
	const [numberOfBedrooms, setNumberOfBedrooms] = React.useState('')
	const [numberOfGuests, setNumberOfGuests] = React.useState('')
	// const [image, setImage] = React.useState(null)
	// const [url, setUrl] = React.useState('')
	const [uploading, setUploading] = useState(false)
	const [imageFile, setImageFile] = useState('')
	const [imageFormat, setImageFormat] = useState('')
	const [mainImage, setMainImage] = useState([])
	const [uploadedImage, setUploadedImage] = useState('')

	const getBase64 = (file) => {
		return new Promise((resolve) => {
			let baseURL = ''
			let reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onload = () => {
				// Make a fileInfo Object
				baseURL = reader.result
				resolve(baseURL)
			}
		})
	}

	const handleFileInputChange = async (e) => {
		let file = e.target.files
		setFileLength(file.length)
		mainImage.push(...file)
		console.log(mainImage)
		for (let i = 0; i < file.length; i++) {
			getBase64(file[i])
				.then((result) => {
					file[i]['base64'] = result
					console.log('File Is', file)
					let split = file[i].base64.split(',')
					setImageFile(split[1])
					console.log(imageFile)
					let type = file[i].type.split('/')
					setImageFormat(type[1])
				})
				.catch((err) => {
					console.log(err)
				})
		}
		uploadFileHandler(e, file)
	}

	const uploadFileHandler = (e, f) => {
		e.preventDefault()
		if (parseInt(mainImage.length) < 5) {
			const data = new FormData()
			mainImage.map((main) => {
				data.append('file', main)
				// data.append('image', main)
				data.append('upload_preset', 'pebbles')
				data.append('cloud_name', 'pebbles-signature')

				setUploading(true)

				fetch(
					'https://api.cloudinary.com/v1_1/pebbles-signature/image/upload',
					{
						method: 'post',
						body: data,
					}
				)
					.then((resp) => resp.json())
					.then((data) => {
						setUploading(false)
						// setMainImage(null)
						setUploadedImage(data.url)
						urlList.push(data.url)
						console.log(urlList)
						setImageFile('')
					})
					.catch((err) => {
						console.log(err)
						setUploading(false)
						// setMainImage(null)
						setImageFile('')
					})
			})
		} else {
			mainImage.length = 0
			alert('You can only upload a maximum of 5 images.')
		}
	}

	// console.log('url', url)

	const submitHandler = (e) => {
		e.preventDefault()
		let data = {
			apartmentName,
			address,
			apartmentCountry,
			apartmentState,
			typeOfApartment,
			price,
			facilities,
			apartmentImages: urlList,
			apartmentInfo,
			numberOfRooms,
			numberOfToilets,
			numberOfBedrooms,
			numberOfGuests,
		}
		dispatch(create_apartment(data))
		setApartmentName('')
		setAddress('')
		setApartmentCountry('')
		setApartmentState('')
		setTypeOfApartment('')
		setPrice('')
		setFacilities([])
		setApartmentImages([])
		setApartmentInfo('')
		setNumberOfRooms('')
		setNumberOfToilets('')
		setNumberOfBedrooms('')
		setNumberOfGuests('')
	}

	// const Checkbox = ({ text }) => {
	// 	return (
	// 		<label className='facilities__label'>
	// 			<input
	// 				type='checkbox'
	// 				className='facilities__check'
	// 				value={text}
	// 				name={text}
	// 				onChange={(e) => setFacilities(e.target.value)}
	// 			/>
	// 			{/* <span className='facilities__psuedobox'>
	// 				<svg
	// 					width='28'
	// 					height='28'
	// 					viewBox='0 0 28 28'
	// 					fill='none'
	// 					xmlns='http://www.w3.org/2000/svg'
	// 				>
	// 					<path
	// 						d='M2 14L9.99059 26L26 2'
	// 						stroke='#00349A'
	// 						stroke-width='2.51471'
	// 						stroke-linecap='round'
	// 						stroke-linejoin='round'
	// 					/>
	// 				</svg>
	// 			</span> */}
	// 			<span className='facilities__labeltext'>{text}</span>
	// 		</label>
	// 	)
	// }

	const options = [
		{ label: 'Swimming Pool ', value: 'swimming pool' },
		{ label: '24/7 Electricity ', value: '24/7 electricity' },
		{ label: 'Parking Lot ', value: 'parking lot' },
		{ label: 'Security ', value: 'security' },
		{ label: 'Wifi ', value: 'wifi' },
	]

	return (
		<div>
			<AdminHeader title={'List an Apartment'} />
			<div className='dashboardmain__apartment'>
				<form className='profile__form'>
					<div className='profile__flex'>
						<div className='profile__form-group'>
							<label className='profile__form-label'>
								Enter Apartment Name
							</label>
							<input
								type='text'
								placeholder='ABC Homes'
								className='profile__form-input'
								onChange={(e) => setApartmentName(e.target.value)}
							/>
						</div>
						<div className='profile__form-group'>
							<label className='profile__form-label'>
								Select Apartment Type
							</label>
							<select
								className='profile__form-input'
								onChange={(e) => setTypeOfApartment(e.target.value)}
							>
								<option value=''> --select-- </option>
								<option value='Flat'>Flat</option>
								<option value='Duplex'>Duplex</option>
							</select>
						</div>
					</div>
					<div className='profile__flex'>
						<div className='profile__form-group'>
							<label className='profile__form-label'>Select Country</label>
							<select
								className='profile__form-input'
								onChange={(e) => setApartmentCountry(e.target.value)}
							>
								<option value=''> --select-- </option>
								<option value='Nigeria'>Nigeria</option>
								<option value='Ukraine'>Ukraine</option>
							</select>
						</div>
						<div className='profile__form-group'>
							<label className='profile__form-label'>Select Area</label>
							<select
								className='profile__form-input'
								onChange={(e) => setApartmentState(e.target.value)}
							>
								<option value=''> --select-- </option>
								<option value='lagos'>Lagos</option>
							</select>
						</div>
					</div>
					<div className='profile__form-group'>
						<label className='profile__form-label'>Street Address</label>
						<input
							type='text'
							placeholder='House7, GRA Ikeja, Lagos'
							className='profile__form-input'
							onChange={(e) => setAddress(e.target.value)}
						/>
					</div>
					<div className='profile__flex'>
						<div className='profile__form-group profile__smaller'>
							<label className='profile__form-label'>No. of Living rooms</label>
							<select
								className='profile__form-input'
								onChange={(e) => setNumberOfRooms(e.target.value)}
							>
								<option value=''> --select-- </option>
								<option value='2'>2</option>
								<option value='3'>3</option>
							</select>
						</div>
						<div className='profile__form-group profile__smaller'>
							<label className='profile__form-label'>No. of Toilets</label>
							<select
								className='profile__form-input'
								onChange={(e) => setNumberOfToilets(e.target.value)}
							>
								<option value=''> --select-- </option>
								<option>2</option>
							</select>
						</div>
						<div className='profile__form-group profile__smaller'>
							<label className='profile__form-label'>No of Bedrooms</label>
							<select
								className='profile__form-input'
								onChange={(e) => setNumberOfBedrooms(e.target.value)}
							>
								<option value=''> --select-- </option>
								<option>2</option>
							</select>
						</div>
					</div>
					<div className='profile__flex'>
						<div className='profile__form-group profile__smaller'>
							<label className='profile__form-label'>No of Guests</label>
							<select
								className='profile__form-input'
								onChange={(e) => setNumberOfGuests(e.target.value)}
							>
								<option value=''> --select-- </option>
								<option>2</option>
							</select>
						</div>
						<div className='profile__form-group profile__longer'>
							<label className='profile__form-label'>
								Pricing (in Naira)/Night
							</label>
							<input
								type='text'
								placeholder='30,000'
								className='profile__form-input'
								onChange={(e) => setPrice(e.target.value)}
							/>
						</div>
					</div>
					<div className='facilities mb-4'>
						<p className='facilities__text'>
							Please tick the box(s) if your apartment has any of the listed
							facilities below
						</p>
						{/* <div className='facilities__checkboxes mb-5 pb-5'>
							<Checkbox text='Swimming pool' />
							<Checkbox text='24/7 Electricity' />
							<Checkbox text='Parking Lot' />
							<Checkbox text='Security' />
							<Checkbox text='WiFi' />
							<input
								type=''
								placeholder='Enter other Facilities'
								className='facilities__more'
							/>
						</div> */}
						<MultiSelect
							options={options}
							value={facilities}
							onChange={setFacilities}
							labelledBy='Select'
						/>
					</div>
					<div className='profile__form-group mt-4 pt-4'>
						<label className='profile__form-label'>Additional Info</label>
						<textarea
							className='profile__form-input'
							rows='8'
							onChange={(e) => setApartmentInfo(e.target.value)}
						></textarea>
					</div>
					<div className='facilities__images'>
						<p className='facilities__images-text'>
							Upload Images{' '}
							<span style={{ fontSize: '11px' }}>(Maximum of 5 images)</span>
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
										mainImage.map((item) => (
											<img
												key={i++}
												src={item.base64}
												style={{
													width: '8rem',
													height: '8rem',
													border: '1px solid #333',
													padding: '7px',
												}}
											/>
										))}
								</>
							)}
							<input
								type='file'
								// onChange={(e) => setImage(e.target.files[0])}
								onChange={handleFileInputChange}
								multiple
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
						className='profile__button facilities__button'
						type='submit'
						onClick={submitHandler}
					>
						{loading ? (
							<i className='fas fa-spinner fa-spin'></i>
						) : (
							<span>Register</span>
						)}
					</button>
				</form>
			</div>
		</div>
	)
}

export default DashboardApartmentAdd
