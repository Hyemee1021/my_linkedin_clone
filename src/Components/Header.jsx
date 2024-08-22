import React from "react";
import logo from "../assets/linkedin.png";

// icon
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Link } from "react-router-dom";
import { HeaderOption } from "./HeaderOption";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

export const Header = () => {
  const user = useSelector(selectUser);
  console.log(user);

  const getfirtChar = (email) => {
    return email[0].toUpperCase();
  };

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
        <Link to="/">
          <HeaderOption Icon={HomeIcon} title="Home" />
        </Link>

        <Link to="/post">
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        </Link>

        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsActiveIcon} title="Notifications" />
        <HeaderOption
          avatar={true}
          title={user ? getfirtChar(user.email) : "Me"}
        />
      </div>
    </header>
  );
};
