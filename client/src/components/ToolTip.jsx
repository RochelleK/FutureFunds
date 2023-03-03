import React from "react";
import PropTypes from "prop-types";

const Tooltip = ({ children, text, position = "top" }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  return (
    <div className="relative inline-block">
      <div
        className="cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {showTooltip && (
        <div
          className={`absolute z-10 bg-black text-white p-2 rounded-md whitespace-nowrap ${
            position === "top"
              ? "top-full left-1/2 transform -translate-x-1/2 -translate-y-2"
              : ""
          } ${
            position === "right"
              ? "top-1/2 right-full transform translate-y-1/2"
              : ""
          } ${
            position === "bottom"
              ? "bottom-full left-1/2 transform -translate-x-1/2 translate-y-2"
              : ""
          } ${
            position === "left"
              ? "top-1/2 left-full transform -translate-y-1/2"
              : ""
          }`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
};

export default Tooltip;
