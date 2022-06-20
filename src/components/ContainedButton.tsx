import React, { FC } from "react";

interface ContainedButtonProps {
  text: string;
}

const ContainedButton: FC<ContainedButtonProps> = ({ text }) => {
  return (
    <button className="w-full bg-purple hover:bg-blue-700 text-white font-bold py-3 px-5 rounded mx-8">
      {text}
    </button>
  );
};

export default ContainedButton;
