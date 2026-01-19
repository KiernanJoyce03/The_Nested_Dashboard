import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import './DashboardLayout.css'


function DashboardLayout() {
  return (
    <div className="layout">
      <Header className="header" />
      <div className="content">
        <Sidebar className="sidebar" />
        <MainContent className="main-content" />
      </div>
    </div>
  );
}

export default DashboardLayout