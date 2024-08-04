import React from "react";
import { SideBar } from "../SideBar";
import { Feed } from "../Feed";
import { Post } from "../Post";
import { News } from "../News";
const Home = () => {
  return (
    <div className="flex  flex-col md:flex-row   justify-center  items-start  gap-3  px-10 mt-10 md:mt-8">
      <div className="w-full md:w-1/5  rounded-md ">
        <SideBar />
      </div>
      <div className="w-full md:w-3/5 ">
        <Feed />
        <Post />
      </div>
      <div className="w-full md:w-1/5 bg-white p-4 rounded-sm">
        <News />
      </div>
    </div>
  );
};

export default Home;
