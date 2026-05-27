import React from 'react'
import Sidebar from './components/sidebar';
import MainContent from './components/mainContent';
import { Outlet } from 'react-router';

const Body = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body;