import React, { useState } from "react";
import "./tooltip.css";

interface TooltipProps {
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  let timer: number;

  const handleMouseEnter = () => {
    alert("mouse enter");
    timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
  };

  const handleMouseLeave = () => {
    alert("mouse leave");
    clearTimeout(timer);
    setShowTooltip(false);
  };

  return (
    <div
      className="tooltip-wrapper"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      {/* {children} */}
      {<div className="tooltip">Test tooltip</div>}
    </div>
  );
};

export default Tooltip;
