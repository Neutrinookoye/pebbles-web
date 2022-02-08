import React, {useState} from "react";
import AdminHeader from "../../../components/AdminHeader/AdminHeader";

const Checkbox = ({ text }) => {
  return (
    <label className='facilities__label'>
      <input type='checkbox' className='facilities__check' />
      <span className='facilities__psuedobox'>
        <svg
          width='28'
          height='28'
          viewBox='0 0 28 28'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2 14L9.99059 26L26 2'
            stroke='#00349A'
            stroke-width='2.51471'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </span>
      <span className='facilities__labeltext'>{text}</span>
    </label>
  );
};

function DashboardApartmentAdd() {
  const [apartmentName, setApartmentName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [apartmentCountry, setApartmentCountry] = React.useState("");
  const [apartmentState, setApartmentState] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [facilities, setFacilities] = React.useState([]);
  const [apartmentImages, setApartmentImages] = React.useState([]);
  const [apartmentInfo, setApartmentInfo] = React.useState("");
  const [numberOfRooms, setNumberOfRooms] = React.useState(0);

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const uploadImage = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "tutorial");
    data.append("cloud_name", "breellz");
    fetch("http://res.cloudinary.com/archub/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  console.log("url", url);

  return (
    <div>
      <AdminHeader title={"List an Apartment"} />
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
              />
            </div>
            <div className='profile__form-group'>
              <label className='profile__form-label'>Last name</label>
              <select className='profile__form-input'>
                <option>Ikeja</option>
              </select>
            </div>
          </div>
          <div className='profile__form-group'>
            <label className='profile__form-label'>Street Address</label>
            <input
              type='text'
              placeholder='House7, GRA Ikeja, Lagos'
              className='profile__form-input'
            />
          </div>
          <div className='profile__flex'>
            <div className='profile__form-group profile__smaller'>
              <label className='profile__form-label'>No of Living room</label>
              <select className='profile__form-input'>
                <option>2</option>
              </select>
            </div>
            <div className='profile__form-group profile__smaller'>
              <label className='profile__form-label'>No of Living room</label>
              <select className='profile__form-input'>
                <option>2</option>
              </select>
            </div>
            <div className='profile__form-group profile__smaller'>
              <label className='profile__form-label'>No of Living room</label>
              <select className='profile__form-input'>
                <option>2</option>
              </select>
            </div>
          </div>
          <div className='profile__flex'>
            <div className='profile__form-group profile__smaller'>
              <label className='profile__form-label'>No of Living room</label>
              <select className='profile__form-input'>
                <option>2</option>
              </select>
            </div>
            <div className='profile__form-group profile__longer'>
              <label className='profile__form-label'>Street Address</label>
              <input
                type='text'
                placeholder='House7, GRA Ikeja, Lagos'
                className='profile__form-input'
              />
            </div>
          </div>
          <div className='facilities'>
            <p className='facilities__text'>
              Please tick the box(s) if your apartment has any of the listed
              facilities below
            </p>
            <div className='facilities__checkboxes'>
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
            </div>
          </div>
          <div className='facilities__images'>
            <p className='facilities__images-text'>Upload Images</p>
            <label>
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
              <input type='file' onChange= {(e)=> setImage(e.target.files[0])} multiple style={{ display: "none" }} />
            </label>
            <div></div>
          </div>
          <button  className='profile__button facilities__button' onClick={(e) => uploadImage(e)}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default DashboardApartmentAdd;
