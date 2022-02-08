import React from 'react'
import pics from "../../assets/pics.png"
function AdminHeader({title}) {
    return (
        <header className="dashboardmain__header">
            <h3 className="dashboard__heading">{title}</h3>
            <div className="dashboard__name">
            <h3>Akin Sam</h3>
            <img src={pics} alt="avatar" />
            </div>
        </header>
    )
}

export default AdminHeader
