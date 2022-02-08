import React from 'react'
import './styles/css/resetPasswordForm.css'

const ResetPasswordForm = () => {

    return (
        <div className="reset-form-wrapper form">
            <form className="reset-form">
                <div className="heading">
                    <h1>Reset password</h1>
                </div>
                <div className="form-input-group">
                    <label className="form-input-label" for="password">Password</label>
                    <input className="form-input password" type="password" name="password" placeholder="********" pattern="^(?=.*[A-Z])(?=.*[a-z])[a-zA-Z\d]{6,}$" required />
                </div>

                <div className="form-input-group">
                    <label className="form-input-label" for="confirm-password">Confirm Password</label>
                    <input className="form-input password" type="password" name="confirm-password" placeholder="********" required />
                </div>

                <div className="form-input-group">
                    <label className="form-input-label" for="submit" hidden>button</label>
                    <button className="form-input" name="submit" type="submit" >Reset Password</button>
                </div>
            </form>
        </div>
    )
}

export default ResetPasswordForm
