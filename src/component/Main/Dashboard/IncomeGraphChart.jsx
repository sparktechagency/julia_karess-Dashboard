/* eslint-disable react/prop-types */
import { DatePicker } from "antd";
import { Line } from '@ant-design/plots';
import { useState } from "react";
import dayjs from 'dayjs'; // Ensure dayjs is imported

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-2 border border-gray-300 rounded shadow-lg">
        <p className="label font-semibold">{`Month: ${label}`}</p>
        <p className="intro">{`Total Income: $${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

const IncomeGraphChart = () => {
  const [selectedYear, setSelectedYear] = useState(dayjs(new Date()).year()); // Initialize selected year as current year

  // Demo data for income (replace the real API call with this static data)
  const demoData = [
    { month: "Jan", totalEarnings: 5000 },
    { month: "Feb", totalEarnings: 4000 },
    { month: "Mar", totalEarnings: 7000 },
    { month: "Apr", totalEarnings: 8000 },
    { month: "May", totalEarnings: 9000 },
    { month: "Jun", totalEarnings: 10000 },
    { month: "Jul", totalEarnings: 11000 },
    { month: "Aug", totalEarnings: 10000 },
    { month: "Sep", totalEarnings: 9000 },
    { month: "Oct", totalEarnings: 14000 },
    { month: "Nov", totalEarnings: 15000 },
    { month: "Dec", totalEarnings: 16000 }
  ];

  // Prepare data for chart based on the demo data
  const chartData = demoData.map((item) => ({
    month: item.month,
    income: item.totalEarnings,
  }));

  const config = {
    data: chartData,
    xField: 'month',
    yField: 'income',
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 2,
      stroke: '#2cb5eb',
    },
    area: {
      style: {
        fill: 'linear-gradient(-90deg, white 0%, #2cb5eb 100%)',
      },
    },
    tooltip: {
      customContent: (title, items) => <CustomTooltip active={true} payload={items} label={title} />,
    },
  };

  const handleDateChange = (date) => {
    if (date) {
      setSelectedYear(date.year()); // Get year from the selected dayjs object
    }
  };

  return (
    <section className="w-full col-span-full md:col-span-4 bg-white rounded-lg border-2 border-[#2cb5eb] shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
      <div className="pr-4 py-4">
        <Line {...config} />
      </div>
    </section>
  );
};

export default IncomeGraphChart;
