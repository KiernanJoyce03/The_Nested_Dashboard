import React, {useState, createContext} from 'react'
import DashboardLayout from './DashboardLayout'
import './App.css'

function App() {
  
  const [user] = useState({ name: "Alex", avatar: "https://i.pravatar.cc/150" });

  return (
    <div>

      <DashboardLayout user={user} />
    </div>
  );
}

export default App
