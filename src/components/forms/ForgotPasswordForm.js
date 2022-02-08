import React from 'react'
import './styles/css/forgotPasswordForm.css'

const ForgotPassword = () => {

    return (
        <div className="forgotpw-form-wrapper form">
            <form className="forgotpw-form">
                <div className="heading">
                    <h1>Forgot password</h1>
                    <p>Can't remember your password? No worries. Enter your email attached to your MyArtStock account and we'll send you a reset link.</p>
                </div>
                <div className="form-input-group">
                    <label className="form-input-label" for="email">Email Address</label>
                    <input className="form-input" type="email" name="email" placeholder="abv@gmail.com" required />
                </div>

                <div className="form-input-group">
                    <label className="form-input-label" for="submit" hidden>button</label>
                    <button className="form-input" name="submit" type="submit" >Send reset link</button>
                </div>
            </form>
        </div>
    )
}

export default ForgotPassword
