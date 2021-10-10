import React from "react";

const YSpread = ({ items_pos, children }) => {
  return (
    <div>
      <div class="container">
        {children?.map((child, i) => (
          <div
            key={i}
            className={`row hoverover justify-content-${items_pos || "center"} text-light`}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YSpread;
