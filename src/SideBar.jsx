import { Avatar } from "@mui/material";
import React from "react";

import background from "./assets/background.jpg";
export const SideBar = () => {
  return (
    <div>
      <div className="side_top">
        <div>
          <img src={background} alt="" className="  rounded-md" />
          <Avatar />
          <p>email</p>
        </div>
        <div>
          <div>
            <span>Who viewed you</span>
            <span>2345</span>
          </div>
          <div>
            <span>View on posts</span>
            <span>2345</span>
          </div>
        </div>
      </div>
      <div className="side_bottom">
        <p>#JavaScript</p>
        <p>#React</p>
        <p>#frontend</p>
        <p>#Node.js</p>
        <p>#React-Redux</p>
      </div>
    </div>
  );
};
