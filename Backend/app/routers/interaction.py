from fastapi import APIRouter
from app.schemas import ChatRequest, ChatResponse
from app.langgraph.graph import graph

router = APIRouter(prefix="/chat", tags=["AI Chat"])


@router.post("/", response_model=ChatResponse)
def chat(request: ChatRequest):

    result = graph.invoke(
        {
            "message": request.message,
            "response": ""
        }
    )

    return ChatResponse(
        response=result["response"]
    )