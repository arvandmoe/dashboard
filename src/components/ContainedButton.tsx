import React, { FC, MouseEventHandler, ReactNode } from "react";

interface ContainedButtonProps {
  text: string;
  isActive: Boolean;
  icon: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>
}

const ContainedButton: FC<ContainedButtonProps> = ({
  text,
  isActive,
  icon,
  onClick
}) => {
  return (
    <button
      className={
        "w-full font-bold py-3 rounded-lg hover:bg-purple hover:text-white " +
        (isActive ? "bg-purple text-white shadow" : "bg-white text-purple")
      }
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
};

export default ContainedButton;
