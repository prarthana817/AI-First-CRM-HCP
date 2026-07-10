# AI-First CRM HCP Module

An AI-powered CRM application for Healthcare Professionals (HCPs) that enables medical representatives to record doctor interactions using natural language or structured forms. The application uses LangGraph and Groq LLM to extract key information automatically.

---

## Features

- AI Chat for logging doctor interactions
- Structured Form for manual interaction entry
- Automatic extraction of:
  - Doctor Name
  - Hospital Name
  - Interaction Type
  - Follow-up Date
  - AI Summary
- FastAPI Backend
- React Frontend
- LangGraph Workflow
- Groq LLM Integration
- Swagger API Documentation

---

## Tech Stack

### Frontend
- React.js
- Vite
- Axios
- CSS

### Backend
- Python
- FastAPI
- LangGraph
- Groq API
- Pydantic
- Uvicorn

---

## Folder Structure

```
AI-First-CRM-HCP
│
├── Frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── Backend
│   ├── app
│   │   ├── routers
│   │   ├── services
│   │   ├── langgraph
│   │   ├── database.py
│   │   ├── models.py
│   │   └── schemas.py
│   ├── requirements.txt
│   ├── .env
│   └── main.py
│
└── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/prarthana817/AI-First-CRM-HCP.git
```

### Backend Setup

```bash
cd Backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

Swagger API:

```
http://127.0.0.1:8000/docs
```

---

### Frontend Setup

```bash
cd Frontend

npm install

npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## Environment Variables

Create a `.env` file inside the Backend folder.

```env
GROQ_API_KEY=your_groq_api_key
```

---

## API Endpoint

### POST /chat/

**Request**

```json
{
  "message": "I met Dr. Amit Roy from Apollo Hospital today. We discussed our new diabetes medicine. He requested 20 samples and asked for a follow-up next Tuesday."
}
```

**Response**

```json
{
  "response": "Doctor interaction summarized successfully."
}
```

---

## AI Workflow

1. User enters doctor interaction.
2. React sends the request to FastAPI.
3. FastAPI forwards the message to LangGraph.
4. LangGraph invokes the Groq LLM.
5. The AI extracts:
   - Doctor Name
   - Hospital
   - Interaction Type
   - Follow-up Date
   - Summary
6. The extracted information is displayed on the frontend.

---

## Future Enhancements

- User Authentication
- Doctor Database Integration
- Voice-to-Text Support
- CRM Analytics Dashboard
- Email & Follow-up Reminders

---

## Author

**Prarthana Ghosh**

B.Tech (Data Science)  
Aliah University
