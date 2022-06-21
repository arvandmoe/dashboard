import React, { FC, MouseEventHandler, ReactNode } from "react";

interface SimpleButtonProps {
  text: string;
  isActive: boolean;
  icon: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const SimpleButton: FC<SimpleButtonProps> = ({
  text,
  isActive,
  icon,
  onClick,
}) => {
  return (
    <button
      className={
        "font-bold py-3 px-8 rounded-lg bg-white text-black shadow hover:bg-gray flex " +
        (isActive ? "bg-mgray" : "")
      }
      onClick={onClick}
    >
      <div className="pr-4">{icon}</div>
      {text}
    </button>
  );
};

export default SimpleButton;
