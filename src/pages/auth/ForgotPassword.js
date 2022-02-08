import React from 'react'
import './auth.css'
import
ForgotPasswordForm from '../../components/forms/ForgotPasswordForm';
import FormImage from '../../components/forms/FormImage';

const ForgotPassword = () => {
    return (
        <div className="form-pages-wrapper">
            <FormImage body="Forgot password?" />
            <ForgotPasswordForm />
        </div>
    )
}

export default ForgotPassword
