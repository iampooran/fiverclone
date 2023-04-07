import * as React from "react";
import { Box, Typography } from "@mui/material";

export default function ServiceCard({data}) {
  return (
    <>
      
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{color:"white"}}>
        <Typography sx={{position:"relative",top:"4.5rem",left:"1rem"}}>{data.subTitle}</Typography>
        <Typography variant="h6" sx={{position:"relative",top:"4.5rem",left:"1rem"}}>{data.title}</Typography>
          <img src={data.image} alt="services" style={{borderRadius:'7px'}}/>
        </Box>
      </Box>
    </>
  );
}
