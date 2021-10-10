import * as React from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function SliderItem({ value }) {
  return (
    <Box width={120} sx={{ mt: "10px" }}>
      <Slider
        defaultValue={value ? value : 0}
        aria-label="Default"
        valueLabelDisplay="auto"
        className="color-spotify"
      />
    </Box>
  );
}
