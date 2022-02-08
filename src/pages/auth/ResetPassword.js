import React from 'react'
import './auth.css'
import ResetPasswordForm from '../../components/forms/ResetPasswordForm';
import FormImage from '../../components/forms/FormImage';

const ResetPassword = () => {
    return (
        <div className="form-pages-wrapper">
            <FormImage body="Change password" />
            <ResetPasswordForm />
        </div>
    )
}

export default ResetPassword
