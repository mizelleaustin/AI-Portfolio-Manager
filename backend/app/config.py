import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Settings:
    PROJECT_NAME: str = "AI-Powered Portfolio Manager"
    API_VERSION: str = "v1"
    DEBUG_MODE: bool = os.getenv("DEBUG_MODE", "False").lower() == "true"
    
    # Database settings (if needed later)
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./test.db")

    # CORS settings (can be restricted later)
    ALLOWED_ORIGINS = ["*"]

settings = Settings()