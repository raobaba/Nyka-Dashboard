import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

function Analytics() {
  return (
    <div className="flex justfiy-between items-center">
      <div className='border text-center'>
      <label className="text-xl mb-4">Gender Overview Chart</label>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10,  },
              { id: 1, value: 15,  }
            ],
          },
        ]}
        width={400}
        height={200}
      />

      <div className="flex ml-28 mt-4">
        <div className="relative mr-4 flex items-center">
          <div className="w-3 h-3 bg-blue-500 mr-2"></div>
          <span className="text-sm">Male: 10</span>
          <div className="absolute top-0 -mt-4 left-1/2 transform -translate-x-1/2">
            <div className="w-0 h-0 border-t-4 border-transparent border-blue-500 border-dashed"></div>
          </div>
        </div>
        <div className="relative flex items-center">
          <div className="w-3 h-3 bg-pink-500 mr-2"></div>
          <span className="text-sm">Female: 15</span>
          <div className="absolute top-0 -mt-4 left-1/2 transform -translate-x-1/2">
            <div className="w-0 h-0 border-t-4 border-transparent border-pink-500 border-dashed"></div>
          </div>
        </div>
      </div>
      </div>
      <div className='border text-center'>
      <label className="text-xl mb-4">Gender Overview Chart</label>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10,  },
              { id: 1, value: 15,  }
            ],
          },
        ]}
        width={400}
        height={200}
      />

      <div className="flex ml-28 mt-4">
        <div className="relative mr-4 flex items-center">
          <div className="w-3 h-3 bg-blue-500 mr-2"></div>
          <span className="text-sm">Male: 10</span>
          <div className="absolute top-0 -mt-4 left-1/2 transform -translate-x-1/2">
            <div className="w-0 h-0 border-t-4 border-transparent border-blue-500 border-dashed"></div>
          </div>
        </div>
        <div className="relative flex items-center">
          <div className="w-3 h-3 bg-pink-500 mr-2"></div>
          <span className="text-sm">Female: 15</span>
          <div className="absolute top-0 -mt-4 left-1/2 transform -translate-x-1/2">
            <div className="w-0 h-0 border-t-4 border-transparent border-pink-500 border-dashed"></div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Analytics;
