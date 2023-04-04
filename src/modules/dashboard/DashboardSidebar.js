import React from "react";
import classNames from "../../utils/className";
import { NavLink } from "react-router-dom";
import {
  IconCampaign,
  IconDarkmode,
  IconDashboard,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from "../../components/icons";
import { useDispatch } from "react-redux";
import { authLogout } from "../../store/auth/auth-slice";

const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/logout",
  },
  {
    icon: <IconDarkmode></IconDarkmode>,
    title: "Light/Dark",
    url: "#",
    onClick: () => {},
  },
];

const navlinkClass =
  "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8  last:mt-auto last:bg-white last:shadow-sdprimary";
const DashboardSidebar = () => {
  const dispatch = useDispatch();
  return (
    // flex-shrink-0 de co dinh chieu rong, de cho campaign flex-1 chiem het chieu rong con lai
    <div className="w-full md:w-[76px] flex-shrink-0 rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] px-[14px] py-10 flex flex-col">
      {sidebarLinks.map((link) => {
        if (link.url === "/logout")
          return (
            <button
              onClick={() => dispatch(authLogout())}
              className={navlinkClass}
              key={link.title}
            >
              <span>{link.icon}</span>
              <span className="md:hidden">{link.title}</span>
            </button>
          );
        return (
          <NavLink
            to={link.url}
            key={link.title}
            className={({ isActive }) =>
              isActive
                ? `${navlinkClass} text-primary bg-primary bg-opacity-20`
                : `${navlinkClass} text-icon-color`
            }
          >
            <span>{link.icon}</span>
            <span className="md:hidden">{link.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default DashboardSidebar;
