import { Bell, Search, CircleUserRound } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-8 py-4 shadow-sm border-b">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          AI-First CRM
        </h1>
        <p className="text-sm text-gray-500">
          Healthcare Professional Management
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search HCP..."
            className="bg-transparent outline-none ml-2"
          />
        </div>

        <Bell className="cursor-pointer text-gray-600" />

        <CircleUserRound
          size={36}
          className="cursor-pointer text-blue-700"
        />
      </div>
    </header>
  );
};

export default Header;