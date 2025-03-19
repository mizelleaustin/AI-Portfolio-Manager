import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const StockChart = ({ stockData, symbol }) => {
  if (!stockData || !stockData.Close) {
    return <p style={{ color: "red" }}>No stock data available.</p>;
  }

  const dates = Object.keys(stockData.Close);
  const prices = Object.values(stockData.Close);

  const predictionLabels = Object.keys(stockData.Predictions || {}).map((p, index) => {
    return dates[dates.length - 1] + `+${index + 1}`;
  });

  const predictionPrices = Object.values(stockData.Predictions || {});

  const data = {
    labels: [...dates, ...predictionLabels],
    datasets: [
      {
        label: `${symbol} Historical Prices`,
        data: [...prices, ...new Array(predictionPrices.length).fill(null)],
        borderColor: "blue",
        fill: false,
        tension: 0.1,
      },
      {
        label: `${symbol} AI Predictions`,
        data: [...new Array(prices.length).fill(null), ...predictionPrices],
        borderColor: "red",
        borderDash: [5, 5],
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
    scales: {
      x: { title: { display: true, text: "Date" } },
      y: { title: { display: true, text: "Closing Price ($)" } },
    },
  };

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd" }}>
      <h2>{symbol} Stock Trend with AI Predictions</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default StockChart;
