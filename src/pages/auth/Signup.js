import React from 'react'
import './auth.css'
import SignupForm from "../../components/forms/SignupForm"
import FormImage from '../../components/forms/FormImage';;

const Signup = () => {
    return (
        <div className="form-pages-wrapper">
            <FormImage body="We have the best of service apartments in your neigbourhood" />
            <SignupForm />
        </div>
    )
}

export default Signup
