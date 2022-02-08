import React from 'react'
import ConfirmNumberForm from '../../components/forms/ConfirmNumberForm';

import FormImage from '../../components/forms/FormImage';
import './auth.css'

const ConfirmNumber = () => {
    return (
        <div className="form-pages-wrapper">
            <FormImage body="Confirm Number" />
            <ConfirmNumberForm />
        </div>
    )
}

export default ConfirmNumber
