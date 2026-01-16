import React , {useContext}from 'react'
import { UserContext } from './App'

function Avatar() {
  const user = useContext(UserContext);
  return <img src={user.profileImage} alt={user.name} />;
}

export default Avatar