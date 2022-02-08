import React from 'react'
import './auth.css'
import SignupFormIndividual from "../../components/forms/SignupFormIndividual"
import FormImage from '../../components/forms/FormImage';;

const SignupIndividual = () => {
    return (
        <div className="form-pages-wrapper">
            <FormImage body="We have the best of service apartments in your neigbourhood" />
            <SignupFormIndividual />
        </div>
    )
}

export default SignupIndividual
