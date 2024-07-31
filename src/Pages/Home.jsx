import React from "react";
import { SideBar } from "../SideBar";

const Home = () => {
  return (
    <div className="flex  flex-col md:flex-row   justify-center  items-start  gap-3  px-5 mt-10 md:mt-8">
      <div className="w-full md:w-1/5  rounded-md ">
        <SideBar />
      </div>
      <div className="w-full md:w-3/5 bg-white">
        <h1>here is feed </h1>
      </div>
      <div className="w-full md:w-1/5 bg-white p-4">
        <h1>here is news </h1>
      </div>
    </div>
  );
};

export default Home;
