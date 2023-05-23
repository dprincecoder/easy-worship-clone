// import React from "react";
// import "./tooltip.css";

// interface TooltipProps {
//   text: string;
// }

// const Tooltip: React.FC<TooltipProps> = ({ text }) => {
//   return (
//     <div className="tooltip-wrapper">
//       <div className="tooltip">{text}</div>
//     </div>
//   );
// };

// export default Tooltip;
import React from "react";
import { ITooltip, tooltipPostitionEnum } from "../../config";
import "./tooltip.css";

const Tooltip: React.FC<ITooltip> = ({
  content,
  position,
  disabled,
  children,
  tooltipRef
}) => {
  return (
    <div className="tooltipContainer">
      <div
        ref={tooltipRef}
        className={`tooltip${
          position === tooltipPostitionEnum.Down ? " down" : ""
        }${disabled ? " disabled" : ""}`}
      >
        {content}
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
