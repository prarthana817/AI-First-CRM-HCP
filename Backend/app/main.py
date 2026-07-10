from fastapi import FastAPI
from app.routers.interaction import router as interaction_router

app = FastAPI(
    title="AI First CRM API",
    version="1.0.0"
)

app.include_router(interaction_router)


@app.get("/")
def root():
    return {
        "status": "success",
        "message": "AI First CRM Backend Running"
    }