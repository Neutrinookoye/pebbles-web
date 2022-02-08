import React, { useState } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../bookings/bookings.scss";
import envelope from "../img/form-images/envelope.svg";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from "react-dates";
import 'react-dates/initialize'; // necessary for latest version import { SingleDatePicker } from 'react-dates'; 
import 'react-dates/lib/css/_datepicker.css';

const BookingForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [state, setState] = useState({});
  const [focusedInput, setFocusedInput] = useState(null);

  console.log("hee", startDate, endDate, state);

  const [bookingPage1, setbookingPage1] = useState(true);
  const [bookingPage2, setbookingPage2] = useState(false);
  const [bookingPage3, setbookingPage3] = useState(false);
  const [bookingPage4, setbookingPage4] = useState(false);
  const [makePayment, setmakePayment] = useState(false);

  const handleContinuePage2 = () => {
    setbookingPage1(false);
    setbookingPage2(true);
    setbookingPage3(false);
    setbookingPage4(false);
    setmakePayment(false);
  };
  const handleContinuePage3 = () => {
    setbookingPage1(false);
    setbookingPage2(false);
    setbookingPage3(true);
    setbookingPage4(false);
    setmakePayment(false);
  };
  const handleContinuePage4 = () => {
    setbookingPage1(false);
    setbookingPage2(false);
    setbookingPage3(false);
    setbookingPage4(true);
    setmakePayment(false);
  };
  const handleContinuePage5 = () => {
    setbookingPage1(false);
    setbookingPage2(false);
    setbookingPage3(false);
    setbookingPage4(false);
    setmakePayment(true);
  };

  return (
    <>
      {bookingPage1 && (
        <>
          <div className='image-wrapper booking'>
            <div className='image-overlay'>
              <h3>Pebbles signature</h3>
              <p>Welcome, start Booking</p>
            </div>
          </div>

          <div className='bookingPage form'>
            <form className='booking-form'>
              <div className='heading'>
                <h1>Start Booking</h1>
                <p>Enter your correct details</p>
              </div>

              <div className='form-input-group'>
                <label className='form-input-label' htmlFor='checkIn'>
                  Check-in Date
                </label>
                <input
                  className='form-input'
                  type='date'
                  name='checkIn'
                  required
                />
              </div>

              <div className='form-input-group'>
                <label className='form-input-label' htmlFor='checkOut'>
                  Date
                </label>

                <DateRangePicker
                  startDate={startDate} // momentPropTypes.momentObj or null,
                  startDateId='your_unique_start_date_id' // PropTypes.string.isRequired,
                  endDate={endDate} // momentPropTypes.momentObj or null,
                  endDateId='your_unique_end_date_id' // PropTypes.string.isRequired,
                  onDatesChange={({ startDate, endDate }) =>
                    setState({ startDate, endDate })
                  } // PropTypes.func.isRequired,
                  focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={(focusedInput) => setFocusedInput({ focusedInput })} // PropTypes.func.isRequired,
                />
              </div>

              <div className='form-input-group'>
                <label className='form-input-label' htmlFor='checkOut'>
                  Check-out Date
                </label>
                <input
                  className='form-input'
                  type='date'
                  name='checkOut'
                  required
                />
              </div>

              <div className='form-input-group'>
                <label className='form-input-label' htmlFor='guestNo'>
                  No. of Guests
                </label>
                <select className='form-input' name='guestNo' id='guestNo'>
                  <option value='0'>0</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </div>

              <p className='field-label'>Food</p>

              <div className='form-input-group'>
                <label className='form-input-label' htmlFor='foodPackage'>
                  Select your package
                </label>
                <select
                  className='form-input'
                  name='foodPackage'
                  id='foodPackage'
                >
                  <option value='chef'>Chef</option>
                </select>
              </div>

              <div className='form-input-group'>
                <label className='form-input-label' htmlFor='foodPackageDays'>
                  No. of days
                </label>
                <select
                  className='form-input'
                  name='foodPackageDays'
                  id='foodPackageDays'
                >
                  <option value='0'>0</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </div>

              <div className='form-input-group'>
                <label className='form-input-label' htmlFor='foodTimesPerDay'>
                  No. of times per day
                </label>
                <select
                  className='form-input'
                  name='foodTimesPerDay'
                  id='foodTimesPerDay'
                >
                  <option value='0'>0</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </div>

              <div className='form-input-group'>
                <button
                  className='form-input'
                  type='submit'
                  onClick={() => handleContinuePage2()}
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      {bookingPage2 && (
        <>
          <div className='image-wrapper booking'>
            <div className='image-overlay'>
              <h3>Pebbles signature</h3>
              <p>Welcome, start Booking</p>
            </div>
          </div>

          <div className='bookingPage form'>
            <div
              className='goback-button'
              onClick={() => {
                setbookingPage1(true);
                setbookingPage2(false);
                setbookingPage3(false);
                setbookingPage4(false);
                setmakePayment(false);
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>

            <form className='booking-form'>
              <div className='heading'>
                <h1>Continue Booking</h1>
                <p>Enter your correct details</p>
              </div>

              <p className='field-label'>Ride</p>

              <div className='form-input-group'>
                <label className='form-input-label' htmlFor='needRide'>
                  Confirm you need a ride
                </label>
                <select className='form-input' name='needRide' id='needRide'>
                  <option value='yes'>Yes</option>
                  <option value='no'>No</option>
                </select>
              </div>

              <div className='form-input-group'>
                <label className='form-input-label' htmlFor='needRideDays'>
                  No. of days
                </label>
                <select
                  className='form-input'
                  name='needRideDays'
                  id='needRideDays'
                >
                  <option value='0'>0</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </div>

              <p className='field-label'>Laundry</p>

              <div className='form-input-group'>
                <label className='form-input-label' htmlFor='needLaundry'>
                  Confirm you need laundry
                </label>
                <select
                  className='form-input'
                  name='needLaundry'
                  id='needLaundry'
                >
                  <option value='yes'>Yes</option>
                  <option value='no'>No</option>
                </select>
              </div>

              <div className='form-input-group'>
                <label className='form-input-label' htmlFor='needLaundryDays'>
                  No. of days
                </label>
                <select
                  className='form-input'
                  name='needLaundryDays'
                  id='needLaundryDays'
                >
                  <option value='0'>0</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </div>

              <div className='form-input-group'>
                <button
                  className='form-input'
                  type='submit'
                  onClick={() => handleContinuePage3()}
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      {bookingPage3 && (
        <>
          <div className='image-wrapper booking'>
            <div className='image-overlay'>
              <h3>Pebbles signature</h3>
              <p>Welcome, start Booking</p>
            </div>
          </div>

          <div className='bookingPage form'>
            <div
              className='goback-button'
              onClick={() => {
                setbookingPage1(false);
                setbookingPage2(true);
                setbookingPage3(false);
                setbookingPage4(false);
                setmakePayment(false);
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>

            <form className='booking-form'>
              <div className='heading'>
                <h1>Continue Booking</h1>
                <p>Enter your correct details</p>
              </div>

              <div className='form-input-group'>
                <label className='form-input-label' htmlFor='apartmentPrice'>
                  Apartment
                </label>
                <input
                  type='text'
                  name='apartmentPrice'
                  className='form-input'
                  disabled
                  placeholder='N50,000'
                />
              </div>

              <div className='form-input-group'>
                <label className='form-input-label' htmlFor='foodPrice'>
                  Food
                </label>
                <input
                  type='text'
                  name='foodPrice'
                  className='form-input'
                  disabled
                  placeholder='N5,000'
                />
              </div>

              <div className='form-input-group'>
                <label className='form-input-label' htmlFor='ridePrice'>
                  Ride
                </label>
                <input
                  type='text'
                  name='ridePrice'
                  className='form-input'
                  disabled
                  placeholder='N10,000'
                />
              </div>

              <div className='form-input-group'>
                <label className='form-input-label' htmlFor='laundryPrice'>
                  Laundry
                </label>
                <input
                  type='text'
                  name='laundryPrice'
                  className='form-input'
                  disabled
                  placeholder='N10,000'
                />
              </div>

              <div className='form-input-group'>
                <p className='form-input total-cost'>N75,000</p>
              </div>

              <div className='form-input-group'>
                <button
                  className='form-input'
                  type='submit'
                  onClick={() => handleContinuePage4()}
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      {bookingPage4 && (
        <>
          <div className='image-wrapper booking'>
            <div className='image-overlay'>
              <h3>Pebbles signature</h3>
              <p>Check up events in your selected area</p>
            </div>
          </div>

          <div className='bookingPage form'>
            <div
              className='goback-button'
              onClick={() => {
                setbookingPage1(false);
                setbookingPage2(false);
                setbookingPage3(true);
                setbookingPage4(false);
                setmakePayment(false);
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>

            <div className='heading event-heading'>
              <h1>Events in your area</h1>
            </div>
            <form className='booking-form '>
              <div className='booking-image-wrapper'>
                <div className='booking-image-overlay'></div>
              </div>

              <p className='field-label p-center'>
                It might interest you to know that there might be an event going
                on around your selected area
              </p>

              <div className='form-input-group'>
                <label className='form-input-label' for='submit' hidden></label>
                <button
                  className='form-input'
                  type='submit'
                  onClick={() => handleContinuePage5()}
                >
                  Proceed to payment
                </button>
              </div>

              <div className='form-input-group'>
                <label
                  className='form-input-label'
                  for='checkEvents'
                  hidden
                ></label>
                <button
                  className='form-input checkEvents-btn'
                  name='checkEvents'
                  type='button'
                >
                  Check Events
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      {makePayment && (
        <>
          <div className='image-wrapper complete-payment'>
            <div className='image-overlay'>
              <h3>Pebbles signature</h3>
              <p>Complete payment</p>
            </div>
          </div>

          <div className='bookingPage form'>
            <div
              className='goback-button'
              onClick={() => {
                setbookingPage1(false);
                setbookingPage2(false);
                setbookingPage3(false);
                setbookingPage4(true);
                setmakePayment(false);
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>

            <div className='heading'>
              <h1>Make payment</h1>
            </div>
            <form className='booking-form'>
              <p className='field-label'>
                A verification will be sent to the email address you provided.
              </p>

              <div className='form-input-group envelope'>
                <img className='' src={envelope} alt='envelope icon' />
              </div>

              <div className='form-input-group'>
                <label className='form-input-label' for='submit' hidden></label>
                <button className='form-input' type='submit'>
                  Pay with paystack
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default BookingForm;
