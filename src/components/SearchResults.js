import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useStateValue } from "../data/StateProvider";

export const SearchResults = () => {
  const [{ searchList }] = useStateValue();
  return (
    <>
      <button
        type="button"
        class="btn bg-spotify w-100"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <SearchIcon /> Search
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content bg-dark">
            <div class="modal-header">
              <h5 class="modal-title text-light" id="exampleModalLabel">
                <SearchIcon /> Showing results for:{" "}
                <small className="text-muted">Hello world</small>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <ul class="list-group">
                {["item 1", "item 2", "item 3", "item 4"].map((item, i) => (
                  <li
                    key={i}
                    class="list-group-item  bg bg-dark text-white"
                  >
                  <div className='row item-spotify'>
                      {item}
                  </div>
                  </li>
                ))}
              </ul>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn bg-spotify">
                New Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
