import React from 'react';
import Analytics from './Analytics';
import Sidebar from './Sidebar';

function Dashboard() {
  return (
    <div className='w-full border border-red-600 h-screen flex justify-between'>
      <div className='border w-2/12'>
       
      </div>
      <div className='border w-10/12'>
      <Sidebar/>
      <Analytics/>
      </div>
    </div>
  )
}

export default Dashboard