import React from "react";
import logo from "../assets/linkedin.png";
// icon
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

import { HeaderOption } from "./HeaderOption";
export const Header = () => {
  return (
    <header className="bg-white gap-2 p-4  md:p-2 flex flex-col md:flex-row items-center justify-between md:justify-around shadow-md">
      <div className="header_left gap-2 flex items-center mb-2 md:mb-0 w-full md:w-auto">
        <img alt="logo" src={logo} className="h-8 object-contain" />
        <div className="header_left_input bg-blue-100 rounded-md w-full md:w-64 p-1 ">
          <SearchIcon />
          <input
            type="text"
            className="bg-blue-100 p-1 border-none flex-grow"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="header_right  flex gap-7 md:gap-3 items-center">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsActiveIcon} title="Notifications" />
        <HeaderOption avatar={true} title="Me" />
      </div>
    </header>
  );
};
