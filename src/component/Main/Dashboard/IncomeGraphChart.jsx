import { Line } from '@ant-design/plots';
import React from 'react';

const IncomeGraphChart = () => {
  // Flatten the data into two series (income and expenses) for each year
  const data = [
    { year: '1991', value: 8, type: 'income' },
    { year: '1992', value: 9, type: 'income' },
    { year: '1993', value: 9.1, type: 'income' },
    { year: '1994', value: 10, type: 'income' },
    { year: '1995', value: 12, type: 'income' },
    { year: '1996', value: 12.9, type: 'income' },
    { year: '1997', value: 12.9, type: 'income' },

    { year: '1991', value: 5, type: 'expenses' },
    { year: '1992', value: 6, type: 'expenses' },
    { year: '1993', value: 6.2, type: 'expenses' },
    { year: '1994', value: 6.5, type: 'expenses' },
    { year: '1995', value: 7, type: 'expenses' },
    { year: '1996', value: 7.5, type: 'expenses' },
    { year: '1997', value: 8, type: 'expenses' },
  ];

  const config = {
    data,
    xField: 'year', // The x-axis field is year
    yField: 'value', // The y-axis field is the value (income or expenses)
    seriesField: 'type', // Distinguish between income and expenses based on the 'type' field
    shape: 'smooth', // Smooth line style

    scale: {
      y: {
        domainMin: 0,
      },
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 2,
    },
    // Enable the legend to distinguish between income and expenses
    legend: {
      position: 'top-left',
      itemName: {
        style: {
          fill: '#000', // Legend text color
        },
      },
    },
    // Define the colors explicitly based on the `type`
    color: (datum) => {
      if (datum.type === 'income') {
        return '#4caf50'; // Green color for "income"
      } else if (datum.type === 'expenses') {
        return '#ff9800'; // Orange color for "expenses"
      }
    },
  };

  return (
    <section className="w-full col-span-full md:col-span-4 bg-white rounded-lg border-2 border-[#344f47] shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
      <Line {...config} />
    </section>
  );
};

export default IncomeGraphChart;
