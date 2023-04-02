import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CampaignView from "./modules/campaign/CampaignView";
import Modal from "react-modal";
import LayoutPayment from "./layouts/LayoutPayment";
import { useDispatch, useSelector } from "react-redux";
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage"));
const LayoutDashboard = lazy(() => import("./layouts/LayoutDashboard"));
const ShippingPage = lazy(() => import("./pages/ShippingPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));

const customStyles = {
  content: {},
};
Modal.setAppElement("#root");
Modal.defaultStyles = {};
function App() {
  const { user } = useSelector((state) => state.auth);
  console.log("App ~ user:", user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.id) {
      //
    } else {
    }
  }, [user]);
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
          <Route element={<LayoutPayment></LayoutPayment>}>
            <Route
              path="/checkout"
              element={<CheckoutPage></CheckoutPage>}
            ></Route>
            <Route
              path="/shipping-address"
              element={<ShippingPage></ShippingPage>}
            ></Route>
          </Route>
          <Route path="/register" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="/login" element={<SignInPage></SignInPage>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
