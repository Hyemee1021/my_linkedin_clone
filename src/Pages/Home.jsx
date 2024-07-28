import React from "react";
import { SideBar } from "../SideBar";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen  justify-center items-center  gap-3 p-3">
      <div className="w-full md:w-1/4 bg-white p-4">
        <SideBar />
      </div>
      <div className="w-full md:w-2/4 bg-white">
        <h1>here is feed </h1>
      </div>
      <div className="w-full md:w-1/4 bg-white p-4">
        <h1>here is news </h1>
      </div>
    </div>
  );
};

export default Home;
