import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CampaignView from "./modules/campaign/CampaignView";
import Modal from "react-modal";
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage"));
const LayoutDashboard = lazy(() => import("./layouts/LayoutDashboard"));

const customStyles = {
  content: {},
};
Modal.setAppElement("#root");
Modal.defaultStyles = {};
function App() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route element={<LayoutDashboard></LayoutDashboard>}>
            <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
            <Route
              path="/campaign"
              element={<CampaignPage></CampaignPage>}
            ></Route>
            <Route
              path="/start-campaign"
              element={<StartCampaignPage></StartCampaignPage>}
            ></Route>
            <Route
              path="/campaign/:slug"
              element={<CampaignView></CampaignView>}
            ></Route>
          </Route>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
