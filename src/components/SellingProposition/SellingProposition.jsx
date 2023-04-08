import { Box, Typography } from "@mui/material";
import React from "react";
import data from "./data.json";
import demovideo from "../../assets/fiverrVideo.mp4"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const SellingProposition = () => {
  return (
    <Box sx={{ display: "flex", background: "#F1FDF7", marginTop:'4rem' }}>
      <Box sx={{ flex: 1, marginLeft:{md:"8rem",xs:'3.5rem'},marginRight:{md:"8rem",xs:'3.5rem'}, marginTop:'4rem', marginBottom:'4rem' }} >
        <Typography variant="h4" sx={{ color: "#404145" }}>
          A whole world of freelance talent at your fingertips
        </Typography>
        {data.map((singleData, index) => {
          return (
            <Box key={index} sx={{marginTop:'1.5rem'}}>
              
              <Typography
                sx={{ color: "#404145", fontWeight: "600" }}
                fontSize={18}
              >
              <CheckCircleOutlineIcon sx={{position:"relative",top:'5px'}}/>  
                <span style={{marginLeft:'0.5rem'}}>
                {singleData.title}
                </span>
              </Typography>
              <Typography
                sx={{ color: "#62646A", fontWeight: "400", marginTop:'0.5rem' }}
                fontSize={18}
              >
                {singleData.desc}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Box sx={{ flex: 1, marginLeft:'5rem',marginRight:'5rem', marginTop:'8rem', display:{xs:'none',md:'block'} }} >
      <video width="600" height="400" controls style={{borderRadius:"5px"}} poster="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png">
    <source src={demovideo} type="video/mp4"/>
    </video>
      </Box>
    </Box>
  );
};

export default SellingProposition;
