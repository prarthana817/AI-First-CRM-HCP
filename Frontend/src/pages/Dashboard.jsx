import {
  Users,
  CalendarCheck,
  Clock3,
  Activity,
} from "lucide-react";

const cards = [
  {
    title: "Total HCP",
    value: "128",
    icon: <Users size={28} />,
    color: "bg-blue-600",
  },
  {
    title: "Today's Visits",
    value: "18",
    icon: <CalendarCheck size={28} />,
    color: "bg-green-600",
  },
  {
    title: "Pending Follow-ups",
    value: "12",
    icon: <Clock3 size={28} />,
    color: "bg-orange-500",
  },
  {
    title: "Interactions Logged",
    value: "342",
    icon: <Activity size={28} />,
    color: "bg-purple-600",
  },
];

const Dashboard = () => {
  return (
    <div>
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 mt-2">
          AI-First Healthcare CRM Dashboard
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">
                  {card.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {card.value}
                </h2>
              </div>

              <div
                className={`${card.color} p-4 rounded-xl text-white`}
              >
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Interactions */}
      <div className="mt-10 bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-5">
          Recent Interactions
        </h2>

        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="py-3">Doctor</th>
              <th>Hospital</th>
              <th>Interaction</th>
              <th>Follow-up</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-4">Dr. Amit Roy</td>
              <td>Apollo Hospital</td>
              <td>Product Discussion</td>
              <td>12 Jul 2026</td>

              <td>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Completed
                </span>
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-4">Dr. Sharma</td>
              <td>Fortis Hospital</td>
              <td>Sample Request</td>
              <td>15 Jul 2026</td>

              <td>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  Pending
                </span>
              </td>
            </tr>

            <tr>
              <td className="py-4">Dr. Priya Sen</td>
              <td>Medica</td>
              <td>Follow-up Visit</td>
              <td>18 Jul 2026</td>

              <td>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Scheduled
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;