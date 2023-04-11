import { Box, Typography } from "@mui/material";
import React from "react";


const Testimonial = ({data}) => {
  return (
    <Box sx={{ display: {md:"flex",xs:"inline-block"}, marginTop:'3rem', marginBottom:'3rem', marginLeft:{md:'8rem',xs:'1rem'},marginRight:{md:'4rem',xs:'1rem'}}}>
      <Box sx={{ flex: 1 }}>
        <video
          width="100%"
          controls
          style={{ borderRadius: "5px" }}
          poster={data.poster}
        >
          <source src={data.videoLink} type="video/mp4" />
        </video>
      </Box>
      <Box sx={{ flex: 2, marginLeft:{md:'4rem',xs:'0rem'} }}>
        <Typography  variant="h5" sx={{fontSize:{md:20,xs:10}, color: "#74767E", display:"inline-block", borderRight:1, paddingRight:'1rem' }}>
          {data.title}
        </Typography>
        <Typography sx={{display:"inline-block", position:'relative', top:{md:'0.8rem',xs:'1rem'},left:'1rem'}}>
        <img
          src={data.companyLogo}
          alt="company logo"
          height={36}
          width={96}
        />
        </Typography>
        <Typography
          fontSize={30}
          sx={{ fontFamily: "Domaine Display Narrow", fontStyle: "italic" , color:'#003912', fontWeight:'500', lineHeight:'50px', marginTop:'1rem'}}
        >
          {data.desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default Testimonial;
