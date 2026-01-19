import React from 'react'
import UserMenu from './UserMenu'
import './Header.css'
function Header() {
  return (
    <div className="header">
      <h1>Welcome back!</h1>
      
      <UserMenu  />
    </div>
  );
}

export default Header