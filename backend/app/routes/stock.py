from fastapi import APIRouter
import yfinance as yf
from pydantic import BaseModel
from typing import List

router = APIRouter()

class StockRequest(BaseModel):
    symbols: List[str]

@router.post("/get_stock_data/")
def get_stock_data(request: StockRequest):
    stock_data = {}
    
    for symbol in request.symbols:
        try:
            stock = yf.Ticker(symbol)
            hist = stock.history(period="1mo")
            stock_data[symbol] = hist[['Close']].to_dict()
        except Exception as e:
            stock_data[symbol] = {"error": str(e)}
    
    return stock_data