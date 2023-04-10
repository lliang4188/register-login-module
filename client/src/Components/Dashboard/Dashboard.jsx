import React from 'react'
import './Dashboard.css'
import SideBar from '../SideBarSection/SideBar'
import Body from '../BodySection/Body'
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <SideBar />
      <Body />
    </div>
  )
}

export default Dashboard