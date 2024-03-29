import React from "react";
import ReactModal from "react-modal";
import { Outlet } from "react-router-dom";
import { Button } from "../components/button";
import Overlay from "../components/common/Overlay";
import CampaignPerk from "../modules/campaign/CampaignPerk";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";
import DashboardTopbar from "../modules/dashboard/DashboardTopbar";
import RequiredAuthPage from "../pages/RequiredAuthPage";

const LayoutDashboard = ({ children }) => {
  return (
    <RequiredAuthPage>
      <div className="min-h-screen p-10 bg-lite">
        <Overlay></Overlay>
        <DashboardTopbar></DashboardTopbar>
        <div className="flex items-start gap-x-10">
          <DashboardSidebar></DashboardSidebar>
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </RequiredAuthPage>
  );
};

export default LayoutDashboard;
