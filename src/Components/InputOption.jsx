import React from "react";

const InputOption = ({ Icon, title }) => {
  return (
    <div className="flex flex-col items-center align-middle text-center">
      {Icon && <Icon className="text-blue-900" />}
      {title && <p className="text-sm ">{title}</p>}
    </div>
  );
};

export default InputOption;
