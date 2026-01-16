import React , {useContext}from 'react'

function Avatar({ user }) {
  
  return <img src={user.avatar} alt={user.name} />;
}

export default Avatar