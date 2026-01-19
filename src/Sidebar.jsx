import React from 'react'
import './Sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar'>
      <p>logo</p>
      <button className="sidebar-button">Dashboard</button>
      
      <button className="sidebar-button">Profile</button>
      
      <button className="sidebar-button">Settings</button>
     
      <button className="sidebar-button">Logout</button>
    </div>
  )
}

export default Sidebar