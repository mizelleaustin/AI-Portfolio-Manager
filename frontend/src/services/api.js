import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000"; // Ensure this matches your backend URL

export const fetchStockData = async (symbols) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/get_stock_data/`, {
      symbols: symbols.split(",").map((s) => s.trim()),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    throw error;
  }
};
