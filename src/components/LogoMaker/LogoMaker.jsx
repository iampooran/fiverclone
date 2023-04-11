import { Box, Typography, Button } from "@mui/material";
import React from "react";
import "./LogoMaker.css";
import logoMakerImage from "../../assets/logoMakerPng.png";
import { styled } from "@mui/material/styles";

const LogoMaker = () => {
  const LogoMakerButton = styled(Button)(({ theme }) => ({
    fontFamily: "Roboto",
    borderColor: "white",
    backgroundColor: "white",
    color: "rgba(68, 110, 231, 1)",
    "&:hover": {
      backgroundColor: "white",
      color: "rgba(68, 110, 231, 1)",
      borderColor: "white",
    },
  }));
  return (
    <Box
      className="logoMakerBox"
      sx={{
        color: "white",
        display: {md:"flex",xs:'block'},
        margin: {md:"5rem"},
        overflow: "hidden",
        borderRadius:{md:'1rem'}
      }}
    >
      <Box sx={{ flex:1, margin:'4rem'}}>
        <Typography fontSize={25}>
          <span style={{ fontWeight: "600" }}>fiverr</span> logo maker
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 600, marginTop:'1rem' }}>
          Make an incredible logo
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            fontFamily: "Domaine Display Narrow",
            fontStyle: "italic",
          }}
        >
          {" "}
          in minutes
        </Typography>
        <Typography sx={{marginTop:'1rem'}}>
          Pre-designed by top talent. Just add your touch.
        </Typography>
        <LogoMakerButton variant="outlined" sx={{marginTop:'1rem'}}>
          Try Fiver Logo Maker
        </LogoMakerButton>
      </Box>
      <Box sx={{flex:1}}>
        <Typography sx={{ position: "relative",top:'1.2rem' }}>
          <img src={logoMakerImage} alt="logo maker" width="95%"/>
        </Typography>
      </Box>
    </Box>
  );
};

export default LogoMaker;
