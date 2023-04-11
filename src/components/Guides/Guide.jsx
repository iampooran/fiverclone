import { Box, Typography } from "@mui/material";
import React from "react";

const Guide = ({data}) => {
  return (
    <Box>
      <img src={data.img} alt="guide" width="90%"/>
      <Typography fontSize={18} sx={{fontWeight:'bold', color:'#404145'}}>
      {data.title}
      </Typography>
      <Typography sx={{color:"#747693"}}>
      {data.desc}
      </Typography>
    </Box>
  );
};

export default Guide;
