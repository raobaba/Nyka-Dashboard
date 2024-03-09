import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useSelector } from 'react-redux';

function Analytics() {
  const products = useSelector((state) => state.product.products);
  const maleProducts = products.filter((product) => product.gender === 'male');
  const femaleProducts = products.filter((product) => product.gender === 'female');
  const haircareProducts = products.filter((product) => product.category === 'haircare');
  const skincareProducts = products.filter((product) => product.category === 'skincare');
  const makeupProducts = products.filter((product) => product.category === 'makeup');

  const pieChartConfig = {
    width: 400,
    height: 200,
  };

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateChartData = (data) => {
    return data.map((item) => ({ ...item, color: generateRandomColor() }));
  };

  const genderData = generateChartData([
    { id: 0, value: maleProducts.length },
    { id: 1, value: femaleProducts.length },
  ]);

  const productData = generateChartData([
    { id: 0, value: makeupProducts.length },
    { id: 1, value: skincareProducts.length },
    { id: 2, value: haircareProducts.length },
  ]);

  const renderGenderSection = (label, data) => {
    return (
      <div className="border rounded-lg p-6 text-center shadow-md bg-white">
        <label className="text-xl mb-4 font-bold">{label}</label>
        <PieChart series={[{ data }]} {...pieChartConfig} />

        <div className="flex justify-center mt-4">
          {data.map(({ id, value, color }) => (
            <div key={id} className="mr-5">
              <div className={`w-6 h-6 bg-${color} rounded-full mb-2`}></div>
              <span className="text-sm">{`${value} ${data === genderData ? (id === 0 ? 'Male' : 'Female') : (id === 0 ? 'Makeup' : id === 1 ? 'Skincare' : 'Haircare')}`}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-around items-center p-8">
      {renderGenderSection('Gender Overview Chart 1', genderData)}
      {renderGenderSection('Product Overview Chart 2', productData)}
    </div>
  );
}

export default Analytics;
