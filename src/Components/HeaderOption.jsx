import { Avatar } from "@mui/material";
import React from "react";

export const HeaderOption = ({ Icon, title, avatar }) => {
  return (
    <div className="text-gray-500  text-center flex flex-col items-center cursor-pointer ">
      {Icon && <Icon />}
      {avatar && <Avatar sx={{ width: 24, height: 24 }} />}
      {title && <span className="text-sm">{title}</span>}
    </div>
  );
};
