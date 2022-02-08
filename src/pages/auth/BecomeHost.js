import React from 'react'
import './auth.css'
import
BecomeHostForm from '../../components/forms/BecomeHostForm';
import FormImage from '../../components/forms/FormImage';

const BecomeHost = () => {
    return (
        <div className="form-pages-wrapper">
            <FormImage body="Become a Host" />
            <BecomeHostForm />
        </div>
    )
}

export default BecomeHost
