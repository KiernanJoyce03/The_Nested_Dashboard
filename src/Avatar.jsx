import React , {useContext}from 'react'
import { UserContext } from './App'
import './Avatar.css'

function Avatar() {
  const user = useContext(UserContext);
  return <img className="avatar" src={user.profileImage} alt={user.name} />;
}

export default Avatar