import React from 'react'
import './styles/css/confirmNumberForm.css'

const ConfirmNumberForm = () => {
    return (
        <div className="confirm-wrapper form">
            <div className="heading">
                <h1>Confirm number</h1>
                <p>Enter the code sent via sms to <span className="user-number">+234 888 777 888</span></p>
            </div>

            <form className="confirm-form">

                <div className="digits">
                    <div className="form-input-group digit">
                        <label className="form-input-label" for="digit1" hidden></label>
                        <input className="form-input" type="" name="digit1" maxLength="1" pattern="[0-9]{1}" required />
                    </div>

                    <div className="form-input-group digit">
                        <label className="form-input-label" for="digit2" hidden></label>
                        <input className="form-input" type="" name="digit2" maxLength="1" pattern="[0-9]{1}" required />
                    </div>

                    <div className="form-input-group digit">
                        <label className="form-input-label" for="digit3" hidden></label>
                        <input className="form-input" type="" name="digit3" maxLength="1" pattern="[0-9]{1}" required />
                    </div>

                    <div className="form-input-group digit">
                        <label className="form-input-label" for="digit4" hidden></label>
                        <input className="form-input" type="" name="digit4" maxLength="1" pattern="[0-9]{1}" required />
                    </div>
                </div>

                <div className="form-input-group more-options">
                    <p>Didn't get a code? <a href="https:/example.com">More options</a></p>
                </div>

                <div className="form-input-group">
                    <label className="form-input-label" for="submit" hidden>button</label>
                    <button className="form-input" name="submit" type="submit" >Continue</button>
                </div>

            </form>
        </div>

    )
}

export default ConfirmNumberForm
