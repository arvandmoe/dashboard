import React from "react";
import ContainedButton from "./ContainedButton";

const SideBar = () => {
  return (
    <div className="flex flex-col justify-start items-center pt-12 mx-2 gap-4">
      <ContainedButton text="Campaign" />
      <ContainedButton text="Settings" />
    </div>
  );
};

export default SideBar;
