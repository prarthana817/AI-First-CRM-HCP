from langgraph.graph import StateGraph, END
from typing import TypedDict
from app.services.groq_service import generate_response


class GraphState(TypedDict):
    message: str
    response: str


def ai_node(state: GraphState):
    ai_reply = generate_response(state["message"])

    return {
        "message": state["message"],
        "response": ai_reply
    }


workflow = StateGraph(GraphState)

workflow.add_node("ai", ai_node)

workflow.set_entry_point("ai")

workflow.add_edge("ai", END)

graph = workflow.compile()