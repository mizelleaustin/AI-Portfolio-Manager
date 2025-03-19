from pydantic import BaseModel
from typing import List

class StockRequest(BaseModel):
    symbols: List[str]
