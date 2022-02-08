import React from 'react'
import './auth.css'
import SignupFormBusiness from "../../components/forms/SignupFormBusiness"
import FormImage from '../../components/forms/FormImage';;

const SignupBusiness = () => {
    return (
        <div className="form-pages-wrapper">
            <FormImage body="We have the best of service apartments in your neigbourhood" />
            <SignupFormBusiness />
        </div>
    )
}

export default SignupBusiness
