import React from 'react'
import "./DashboardProfile.scss"
import AdminHeader from '../../../components/AdminHeader/AdminHeader'

function DashboardProfile() {
    return (
        <div className="profile">
            <AdminHeader title={"Profile"} />
            <div className="dashboardmain__apartment">
                <form className="profile__form">
                    <div className="profile__flex">
                        <div className="profile__form-group">
                            <label className="profile__form-label">First name</label>
                            <input type="text" placeholder="John" className="profile__form-input" />
                        </div>
                        <div className="profile__form-group">
                            <label className="profile__form-label">Last name</label>
                            <input type="text" placeholder="Doe" className="profile__form-input" />
                        </div>
                    </div>
                    <div className="profile__form-group">
                        <label className="profile__form-label">Email</label>
                        <input type="email" placeholder="johnDoe@gmail.com" className="profile__form-input" />
                    </div>
                    <div className="profile__form-group">
                        <label className="profile__form-label">Phone Number</label>
                        <input type="text" placeholder="07012345678" className="profile__form-input" />
                    </div>
                    <div className="profile__form-group">
                        <label className="profile__form-label">Password</label>
                        <input type="password" placeholder="**********" className="profile__form-input" />
                    </div>
                    <div className="profile__form-group">
                        <label className="profile__form-label">Valid ID</label>
                        <div className="profile__form-file">
                            <span className="profile__form-file-num">1 item uploaded</span>
                            <label>Select image
                                <input id="file" type="file" placeholder="1 item uploaded" className="profile__form-input" />
                            </label>
                        </div>
                    </div>
                    <button className="profile__button">Edit</button>
                </form>
            </div>
        </div>
    )
}

export default DashboardProfile
