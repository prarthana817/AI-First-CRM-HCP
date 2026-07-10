import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;