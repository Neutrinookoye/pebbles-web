import React from 'react'
import './styles/css/formImage.css'

const FormImage = ({ body }) => {
    return (
        <div className="image-wrapper">
            <div className="image-overlay">
                <h3>Pebbles signature</h3>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default FormImage
