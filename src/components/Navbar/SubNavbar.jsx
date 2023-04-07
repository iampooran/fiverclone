import { Box, Typography, useScrollTrigger } from "@mui/material";
import React from "react";

const subNavbarMenu = [
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  "Music & Audio",
  "Programming & Tech",
  "Photography",
  "Business",
  "AI Services",
];

const SubNavbar = () => {
    const trigger = useScrollTrigger();
  return <Box sx={{ color: "black", display:trigger ? {md:'flex', xs:"none"} : {md:'none',xs:"none"}, justifyContent:"center"}}>
    {subNavbarMenu.map((list,index)=>{
        return <Typography key={index} fontSize={16} sx={{marginLeft:2,color:"#95979D", marginRight:2.5, marginBottom:0.4, marginTop:1.2,cursor:"pointer"}}>
            {list}
        </Typography>
    })}
  </Box>;
};

export default SubNavbar;
