import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Buttons = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div>
      <button className={"btn btn" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Buttons;
