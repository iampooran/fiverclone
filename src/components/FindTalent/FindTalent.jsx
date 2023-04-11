import { Box, Typography, Button } from "@mui/material";
import React from "react";
import FindTalentImage from "../../assets/FindTalent.png";
import { styled } from "@mui/material/styles";
import "./FindTalent.css"

const FindTalent = () => {
  const LogoMakerButton = styled(Button)(({ theme }) => ({
    fontFamily: "Roboto",
    background:"#1DBF73",
    color:'white',
    borderColor: "#1DBF73",
    "&:hover": {
      backgroundColor: "#1DBF73",
      color: "white",
      borderColor: "#1DBF73",
    },
  }));
  return (
    <Box
      className="findTalentBox"
      sx={{
        color: "white",
        display: {md:"flex",xs:'block'},
        margin: {md:"5rem"},
        overflow: "hidden",
        borderRadius:{md:'1rem'},
        marginTop:{xs:'3rem'}
      }}
    >
      <Box sx={{ flex:1.4, margin:{md:'4rem'}, marginLeft:{md:'5rem',xs:'2.5rem'},marginRight:{md:'5rem'}, marginTop:{md:'7rem',xs:'2rem'},marginBottom:{md:'7rem',xs:'2rem'}}}>
        <Typography variant="h3" sx={{ fontWeight: 600, marginTop:'1rem' }}>
        Find the <span style={{fontFamily: "Domaine Display Narrow",
            fontStyle: "italic"}}>talent</span> needed to get your business <span style={{fontFamily: "Domaine Display Narrow",
            fontStyle: "italic"}}>growing</span>.
        </Typography>
        <LogoMakerButton variant="outlined" sx={{marginTop:'2.5rem'}}>
          Try Fiver Logo Maker
        </LogoMakerButton>
      </Box>
      <Box sx={{flex:1}}>
        <Typography sx={{ position: "relative",top:'1.2rem' }}>
          <img src={FindTalentImage} alt="logo maker"/>
        </Typography>
      </Box>
    </Box>
  );
};

export default FindTalent;
