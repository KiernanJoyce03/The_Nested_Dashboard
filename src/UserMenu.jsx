import React from 'react'
import Avatar from './Avatar'
function UserMenu({ user }) {
  return (
    <div className="menu">
      <span>Settings</span>
      
      <Avatar user={user} />
    </div>
  );
}

export default UserMenu