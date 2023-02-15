import React from "react";
import LayoutDashboard from "../layouts/LayoutDashboard";
import CampaignAddNews from "../modules/campaign/CampaignAddNews";

const StartCampaignPage = () => {
  return (
    <LayoutDashboard>
      <CampaignAddNews></CampaignAddNews>
    </LayoutDashboard>
  );
};

export default StartCampaignPage;
