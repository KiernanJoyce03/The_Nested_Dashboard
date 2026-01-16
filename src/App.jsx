import React, {useState, createContext} from 'react'
import DashboardLayout from './DashboardLayout'
import './App.css'

export const UserContext = createContext(null);

function App() {
  
  const [user] = useState({ name: "Alex", profileImage: "https://i.pravatar.cc/150" });

  return (
    <div>
      <UserContext.Provider value={user}>
        <DashboardLayout  />
      </UserContext.Provider>
    </div>
  );
}

export default App
