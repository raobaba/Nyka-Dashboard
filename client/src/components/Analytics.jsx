import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

function Analytics() {
  const pieChartConfig = {
    width: 400,
    height: 200,
  };

  const genderData = [
    { id: 0, value: 10 },
    { id: 1, value: 15 },
  ];

  const renderGenderSection = (label, data, color) => (
    <div className="border text-center">
      <label className="text-xl mb-4">{label}</label>
      <PieChart series={[{ data }]} {...pieChartConfig} />

      <div className="flex ml-28 mt-4">
        {data.map(({ id, value }) => (
          <div key={id} className="relative mr-4 flex items-center">
            <div className={`w-3 h-3 bg-${color}-500 mr-2`}></div>
            <span className="text-sm">{`${id === 0 ? 'Male' : 'Female'}: ${value}`}</span>
            <div className="absolute top-0 -mt-4 left-1/2 transform -translate-x-1/2">
              <div className={`w-0 h-0 border-t-4 border-transparent border-${color}-500 border-dashed`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex justfiy-between items-center">
      {renderGenderSection('Gender Overview Chart 1', genderData, 'blue')}
      {renderGenderSection('Gender Overview Chart 2', genderData, 'pink')}
    </div>
  );
}

export default Analytics;
