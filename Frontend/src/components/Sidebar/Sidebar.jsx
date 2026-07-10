import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  History,
  Stethoscope,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: "HCP",
    path: "/hcp",
    icon: <Users size={20} />,
  },
  {
    name: "Log Interaction",
    path: "/log",
    icon: <ClipboardList size={20} />,
  },
  {
    name: "History",
    path: "/history",
    icon: <History size={20} />,
  },
];

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-blue-700 text-white flex flex-col">
      <div className="flex items-center gap-3 p-6 border-b border-blue-600">
        <Stethoscope size={30} />
        <h1 className="text-2xl font-bold">AI CRM</h1>
      </div>

      <nav className="mt-6 flex flex-col gap-2 px-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-white text-blue-700 font-semibold"
                  : "hover:bg-blue-600"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;