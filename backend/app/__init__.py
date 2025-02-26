from fastapi import FastAPI
from app.routes import stock_router
from app.config import settings

app = FastAPI()

# Register routers
app.include_router(stock_router)
