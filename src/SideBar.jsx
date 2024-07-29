import { Avatar } from "@mui/material";
import React from "react";

import background from "./assets/background.jpg";
export const SideBar = () => {
  return (
    <div>
      <div className="side_top">
        <div className="relative h-40 border">
          {/* Set a fixed height for the parent div */}
          <img
            src={background}
            alt="background pic"
            className="absolute inset-0 h-1/2 w-full object-cover 
           rounded-t-md"
          />
          <div className="absolute inset-x-0 bottom-1/3 flex justify-center">
            <Avatar />
          </div>

          <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            email
          </p>
        </div>
        {/* top 1/2 */}
        <div className="border py-3 px-2 mb-2 ">
          <div className=" px-5 flex justify-between ">
            <span>Who viewed you</span>
            <span>2345</span>
          </div>
          <div className=" mt-2 px-5 flex justify-between ">
            <span>View on posts</span>
            <span>2345</span>
          </div>
        </div>
      </div>
      {/* end of  side top */}
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
