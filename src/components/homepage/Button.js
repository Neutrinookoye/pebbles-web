import React from 'react'
import "./css/navBar.css"

const Button = ({ text, onOpen }) => {
    return (
        <button onClick={onOpen} className="blue-btn">
            {text}
        </button>
    )
}

export default Button
