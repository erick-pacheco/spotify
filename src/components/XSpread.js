import React from "react";

const XSpread = ({ children }) => {
  return (
    <div className="div">
      <div class="row align-items-center text-center">
        {children?.map((child, i) => (
          <div class="col hoverover" key={i}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default XSpread;
