import { Tab } from "@headlessui/react";
import InteractionForm from "../components/Form/InteractionForm";
import ChatBox from "../components/Chat/ChatBox";

const LogInteraction = () => {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Log Interaction
        </h1>

        <p className="text-gray-500 mt-2">
          Record Healthcare Professional interactions using a form or AI assistant.
        </p>
      </div>

      <Tab.Group>

        <Tab.List className="flex gap-3">

          <Tab
            className={({ selected }) =>
              `px-6 py-3 rounded-xl font-medium ${
                selected
                  ? "bg-blue-700 text-white"
                  : "bg-white border"
              }`
            }
          >
            Structured Form
          </Tab>

          <Tab
            className={({ selected }) =>
              `px-6 py-3 rounded-xl font-medium ${
                selected
                  ? "bg-blue-700 text-white"
                  : "bg-white border"
              }`
            }
          >
            AI Chat
          </Tab>

        </Tab.List>

        <Tab.Panels className="mt-6">

          <Tab.Panel>
            <InteractionForm />
          </Tab.Panel>

          <Tab.Panel>
            <ChatBox />
          </Tab.Panel>

        </Tab.Panels>

      </Tab.Group>

    </div>
  );
};

export default LogInteraction;