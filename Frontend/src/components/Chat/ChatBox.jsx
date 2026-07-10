import { SendHorizontal, Bot } from "lucide-react";
import { useState } from "react";
import api from "../../api/api";

const ChatBox = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Bot className="text-blue-700" size={32} />

        <div>
          <h2 className="text-xl font-bold">
            AI CRM Assistant
          </h2>

          <p className="text-gray-500 text-sm">
            Describe your interaction naturally.
          </p>
        </div>
      </div>

      {/* Chat Area */}

      <div className="h-80 border rounded-xl bg-gray-50 p-5 overflow-y-auto space-y-4">

        {/* AI Message */}

        <div className="flex">
          <div className="bg-blue-100 rounded-xl px-4 py-3 max-w-xl">
            👋 Hello! Tell me about today's doctor visit.
          </div>
        </div>

        {/* User Message Example */}

        <div className="flex justify-end">
          <div className="bg-blue-700 text-white rounded-xl px-4 py-3 max-w-xl">
            I met Dr. Amit Roy from Apollo Hospital. We discussed our new
            diabetes medicine. He requested 20 samples and asked for a follow-up
            next Tuesday.
          </div>
        </div>

      </div>

      {/* Input */}

      <div className="flex gap-3 mt-5">

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe today's interaction..."
          className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
        />

        <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 rounded-xl transition">
          <SendHorizontal />
        </button>

      </div>

      {/* AI Extracted Information */}

      <div className="mt-8 border rounded-2xl bg-blue-50 p-6">

        <h3 className="text-xl font-bold text-blue-700 mb-6">
          AI Extracted Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500 text-sm">Doctor</p>
            <p className="font-semibold text-lg">
              Dr. Amit Roy
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Hospital</p>
            <p className="font-semibold text-lg">
              Apollo Hospital
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Interaction Type
            </p>
            <p className="font-semibold text-lg">
              Product Discussion
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Follow-up Date
            </p>
            <p className="font-semibold text-lg">
              15 July 2026
            </p>
          </div>

        </div>

        <div className="mt-6">

          <p className="text-gray-500 text-sm mb-2">
            AI Summary
          </p>

          <div className="bg-white rounded-xl p-4 border">
            Doctor showed interest in the new diabetes medication,
            requested 20 product samples, and scheduled a follow-up
            meeting for next week.
          </div>

        </div>

        <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl transition">
          Save to CRM
        </button>

      </div>

    </div>
  );
};

export default ChatBox;