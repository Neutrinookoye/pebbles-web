import React, { useState } from "react";
import "./styles/css/signUpForm.css";
import {
  faFacebook,
  faGoogle,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from "formik";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { getOtp, signUpUsers } from "../../redux/actions/Auth";
import { Redirect } from "react-router";

const SignupForm = () => {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");

  const [showForm, setShowForm] = useState(true);
  const [showOtpForm, setShowOtpForm] = useState(false);

  const handleOtp = (otp) => {
    setOtp(otp);
  };

  const Auth = useSelector((state) => state.Auth);
  if (Auth?.isAuthenticated) {
    return <Redirect to='/app/dashboard' />;
  }

  return (
    <div className='signup-form-wrapper form'>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          phoneNumber: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("values", { ...values, otp, role: "USER" });
          dispatch(signUpUsers({ ...values, otp, role: "USER" }));
          setSubmitting(false);
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
                    <h1>Create Account</h1>
                    <p>Enter your account details</p>
                  </div>

                  <div className='form-input-group'>
                    <label className='form-input-label' for='email'>
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
                    <label className='form-input-label' for='phone-number'>
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
                      required
                    />
                    {errors.phoneNumber &&
                      touched.phoneNumber &&
                      errors.phoneNumber}
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
                        setShowForm(false);
                        setShowOtpForm(true);
                        console.log(values.email);
                        dispatch(getOtp(values));
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
                      Enter the code sent via sms to{" "}
                      <span className='user-number'>+234 888 777 888</span>
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
                        width: "3rem",
                        height: "3rem",
                        margin: "0 1rem",
                        fontSize: "2rem",
                        borderRadius: 4,
                        border: "1px solid rgba(0,0,0,0.3)",
                      }}
                    />
                  </div>

                  <div className='form-input-group'>
                    <button
                      className='form-input'
                      type='submit'
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </div>
                </>
              )}
            </form>
          </>
        )}
      </Formik>

      <div className='alt-login'>
        <p>Or via</p>
        <p>
          <a href='#/'>
            <FontAwesomeIcon className='login-icons' icon={faFacebook} />
          </a>
          <a href='#/'>
            <FontAwesomeIcon className='login-icons' icon={faGoogle} />
          </a>
          <a href='#/'>
            <FontAwesomeIcon className='login-icons' icon={faApple} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
