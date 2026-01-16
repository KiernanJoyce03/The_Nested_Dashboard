import React from 'react'
import UserMenu from './UserMenu'
function Header({ user }) {
  return (
    <nav>
      <h1>Welcome back!</h1>
      
      <UserMenu user={user} />
    </nav>
  );
}

export default Header