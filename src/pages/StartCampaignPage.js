import React, { Fragment } from "react";
import LayoutDashboard from "../layouts/LayoutDashboard";
import CampaignAddNews from "../modules/campaign/CampaignAddNews";

const StartCampaignPage = () => {
  return (
    <Fragment>
      <CampaignAddNews></CampaignAddNews>
    </Fragment>
  );
};

export default StartCampaignPage;
