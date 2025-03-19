import React, { useState } from "react";
import { fetchStockData } from "../services/api";
import StockChart from "./StockChart";

const StockPortfolio = () => {
  const [symbols, setSymbols] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const handleFetchData = async () => {
    setError("");
    try {
      const response = await fetchStockData(symbols);
      setData(response);
    } catch (err) {
      setError("Failed to fetch stock data.");
    }
  };

  return (
    <div>
      <h2>Stock Portfolio</h2>
      <input
        type="text"
        placeholder="Enter stock symbols (e.g., AAPL, TSLA)"
        value={symbols}
        onChange={(e) => setSymbols(e.target.value)}
      />
      <button onClick={handleFetchData}>Fetch Data</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {Object.entries(data).map(([symbol, stockInfo]) => (
        <StockChart key={symbol} symbol={symbol} stockData={stockInfo} />
      ))}
    </div>
  );
};

export default StockPortfolio;
