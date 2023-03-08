import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ children, text, position = 'top' }) => {
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
          className={`absolute z-10 bg-white text-black font-light p-4 border-2 border-gray-300 h-min shadow-xl w-72 whitespace-normal break-words ${
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
          {/* <div className='border-t-4 border-green-300'>
            </div> */}
          {text}
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};

export default Tooltip;
