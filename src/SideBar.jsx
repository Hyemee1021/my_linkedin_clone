import { Avatar } from "@mui/material";
import React from "react";

import background from "./assets/background.jpg";
export const SideBar = () => {
  return (
    <div className=" bg-white">
      <div className="side_top  ">
        <div className=" relative  ">
          <div className=" h-20 overflow-hidden ">
            {/* Set a fixed height for the parent div */}
            <img
              src={background}
              alt="background pic"
              className="w-full h-full object-cover
           rounded-t-md"
            />
          </div>

          <div className="absolute top-1/2   left-1/2 -translate-x-1/2  ">
            <Avatar />
          </div>

          <p className="  pt-8 text-center  pb-2 ">email</p>
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
