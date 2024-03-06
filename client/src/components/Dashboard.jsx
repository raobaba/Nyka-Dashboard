import React, { useState } from 'react';
import Analytics from './Analytics';
import { RxDashboard } from 'react-icons/rx';
import { SiGoogleanalytics } from 'react-icons/si';
import { CiLogout } from 'react-icons/ci';

function Dashboard() {
  const [activeContent, setActiveContent] = useState('dashboard');

  const handleButtonClick = (content) => {
    setActiveContent(content);
  };

  return (
    <div className='w-full border border-red-600 h-screen flex'>
      {/* Sidebar */}
      <div className='h-60 w-1/6 p-4 flex flex-col justify-between'>
        <h2 className='text-2xl font-bold'>Nyka Dashboard</h2>
        <div className='flex flex-col'>
          <button
            className={`flex items-center p-2 mb-3 rounded ${
              activeContent === 'dashboard' ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handleButtonClick('dashboard')}
          >
            <RxDashboard className='mr-2' />
            Dashboard
          </button>
          <button
            className={`flex items-center mb-3 p-2 rounded ${
              activeContent === 'analytics' ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handleButtonClick('analytics')}
          >
            <SiGoogleanalytics className='mr-2' />
            <Analytics/>
          </button>
          <button className='flex items-center hover:bg-blue-500 p-2 rounded'>
            <CiLogout className='mr-2' />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className='border w-5/6 p-4'>
        {activeContent === 'dashboard' && (
          <div>
            {/* Content for the Dashboard */}
            <h2>Dashboard Content</h2>
          </div>
        )}
        {activeContent === 'analytics' && (
          <div>
            {/* Render the Analytics component */}
            <Analytics />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
