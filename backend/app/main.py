from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import stock
from app.config import settings

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins (can be restricted later)
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],  # Allows all headers
)

app.include_router(stock.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the AI-Powered Portfolio Manager API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
