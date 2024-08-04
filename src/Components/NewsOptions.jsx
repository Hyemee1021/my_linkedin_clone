import React from "react";

const NewsOptions = ({ title, Icon, message }) => {
  return (
    <div className="flex flex-row md:flex-col gap-3">
      <div className="flex flex-row gap-1">
        <Icon className="text-blue-700" />
        <h1 className="font-semibold ">{title}</h1>
      </div>
      <p className="text-sm ">{message}</p>
    </div>
  );
};

export default NewsOptions;
