import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import HCP from "../pages/HCP";
import History from "../pages/History";
import LogInteraction from "../pages/LogInteraction";

import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/hcp" element={<HCP />} />
          <Route path="/history" element={<History />} />
          <Route path="/log" element={<LogInteraction />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;