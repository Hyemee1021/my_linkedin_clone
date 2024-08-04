import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import NewsOptions from "./Components/NewsOptions";

export const News = () => {
  return (
    <div className="justify-center flex flex-col items-center gap-2 text- rounded-sm">
      <div className="flex gap-5 items-center pb-3 font-bold justify-center align-middle flex-row border-b text-lg w-full">
        <h1>Linked News</h1>
        <InfoIcon />
      </div>
      <div className="flex flex-col gap-5">
        <NewsOptions
          Icon={FiberManualRecordIcon}
          title="React Development - 1"
          message="News from frontend community"
        />
        <NewsOptions
          Icon={FiberManualRecordIcon}
          title="React Development - 2"
          message="News from frontend community"
        />
        <NewsOptions
          Icon={FiberManualRecordIcon}
          title="React Development - 3"
          message="News from frontend community"
        />
        <NewsOptions
          Icon={FiberManualRecordIcon}
          title="React Development - 4"
          message="News from frontend community"
        />
      </div>
    </div>
  );
};
