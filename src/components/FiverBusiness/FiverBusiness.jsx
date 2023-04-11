import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./FiverBusiness.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import fiverBusiness from "../../assets/fiverBusiness.webp"
import { styled } from "@mui/material/styles";

const demoData = [
  "Connect to freelancers with proven business experience",
  "Get matched with the perfect talent by a customer success manager",
  "Manage teamwork and boost productivity with one powerful workspace",
];

const FiverBusiness = () => {
    const BusinessButton = styled(Button)(({ theme }) => ({
        fontFamily: "Roboto",
        borderColor: "#1DBF73",
        backgroundColor: "#1DBF73",
        color: "white",
        "&:hover": {
          backgroundColor: "#1F9F63",
          color: "white",
          borderColor: "#1DBF73",
        },
      }));
  return (
    <Box className="businessBox" sx={{ color: "white", display: {md:"flex",xs:'inline-block'},  }}>
      <Box sx={{ flex: "1",marginLeft:{md:'11rem', xs:'2rem'},marginRight:{md:'11rem',xs:'2rem'}, marginTop:'5rem',marginBottom:'5rem' }} >
        <Typography fontSize={24} sx={{ fontWeight: "600", display:'inline-block' }}>
          fiverr
        </Typography>
        <Typography fontSize={24} sx={{display:'inline-block' , marginLeft:'0.5rem'}}>business.</Typography>
        <Typography
          fontSize={12}
          sx={{
            fontWeight: "500",
            background: "#584AFF",
            paddingLeft: "6px",
            paddingRight: "6px",
            borderRadius: "1rem",
            display:'inline-block',
            marginLeft:'0.5rem'
          }}
        >
          NEW
        </Typography>
        <Typography fontSize={32} sx={{ fontWeight: "600", color: "white", marginTop:'1rem' }}>
          A business solution designed for{" "}
          <span
            style={{
              marginLeft: "10px",
              fontFamily: "Domaine Display Narrow",
              fontStyle: "italic",
            }}
          >
            teams
          </span>
        </Typography>
        <Typography fontSize={18} sx={{marginTop:'1rem'}}>
          Upgrade to a curated experience packed with tools and benefits,
          dedicated to businesses
        </Typography>
        {demoData.map((singleData,index)=>{
            return   <Typography  fontSize={16} key={index} sx={{marginTop:'1rem'}}>
            <CheckCircleOutlineIcon sx={{ color: "#7A7D85",position: "relative", top: "5px" }} />
            <span style={{ marginLeft: "0.5rem" }}>{singleData}</span>
          </Typography>

        })
          }
          <BusinessButton variant="contained" sx={{marginTop:'3rem'}}>Explore Fiverr Business</BusinessButton>
      </Box>
      <Box sx={{ flex: "1" ,marginTop:'5rem',marginBottom:'5rem', marginRight:{md:'1rem'}}}>
        <img src={fiverBusiness} alt="fiverr business" width="100%"/>
      </Box>
    </Box>
  );
};

export default FiverBusiness;
