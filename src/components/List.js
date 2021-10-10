import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export const List = ({ list }) => {
  return (
    list?.length >= 1 && (
      <div class="container table">
        <ul class="list-group list-group-flush bg bg-dark">
          {list?.map((item, i) => (
            <li class="list-group-item bg bg-dark text-white decorate-dot" key={i}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
