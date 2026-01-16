import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import MainContent from './MainContent'



function DashboardLayout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        
        <Header  />
        <MainContent />
      </div>
    </div>
  );
}

export default DashboardLayout