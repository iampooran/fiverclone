import React from "react";
// import Freelancer from "../../assets/Freelancer/Freelancer1.png";
import { Box } from "@mui/material";

const Slide = ({cssClasses,freelancer}) => {
  return (
    <Box
    className={cssClasses}
      sx={{
        width:"100%",
        height: "650px",
        display: { md: "flex", xs: "none" },
        overflow: "hidden",
        justifyContent: "flex-end",
        
      }}
    >
      <Box sx={{ marginTop: "6rem", marginRight: "6rem", }}>
        <img src={freelancer} alt="freelancer"/>
      </Box>
    </Box>
  );
};

export default Slide;
