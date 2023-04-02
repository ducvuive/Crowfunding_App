import React, { Fragment, useEffect } from "react";
import LayoutDashboard from "../layouts/LayoutDashboard";
import CampaignAddNews from "../modules/campaign/CampaignAddNews";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StartCampaignPage = () => {
  const { user } = useSelector((state) => state.auth);
  console.log("StartCampaignPage ~ user", user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || !user.email) {
      navigate("/login");
    }
    ///eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <Fragment>
      <CampaignAddNews></CampaignAddNews>
    </Fragment>
  );
};

export default StartCampaignPage;
