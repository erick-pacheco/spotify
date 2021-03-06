import React from "react";

const XSpread = ({ children }) => {
  return (
    <div className="div">
      <div class="row align-items-center text-center text-light">
        {children?.map((child, i) => (
          <div
            class="col hoverover animate__animated animate__backInLeft"
            key={i}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export const XSpread48 = ({ fade, four, eight }) => (
  <div class={`container ${fade}`}>
    <div class="row">
      <div class="col-6 col-md-4">{four}</div>
      <div class="col-md-8">{eight}</div>
    </div>
  </div>
);

export default XSpread;
