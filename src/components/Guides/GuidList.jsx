import React from "react";
import Guide from "./Guide";
import { Box, Grid, Typography } from "@mui/material";
import createLogo from "../../assets/Guides/createLogo.webp";
import digitalMarketing from "../../assets/Guides/digitalMarketing.webp";
import onlineBusiness from "../../assets/Guides/onlineBusiness.webp";

const guideData = [
  {
    img: createLogo,
    title: "Start an online business and work from home",
    desc: "A complete guide to starting a small business online",
  },
  {
    img: digitalMarketing,
    title: "Digital marketing made easy",
    desc: "A practical guide to understand what is digital marketing ",
  },
  {
    img: onlineBusiness,
    title: "Create a logo for your business",
    desc: "A step-by-step guide to create a memorable business logo",
  },
];

const GuidList = () => {
  return (
    <Box sx={{marginLeft:{md:'5rem', xs:'2rem'}, marginRight:{md:'2rem'}}}>
      <Typography
        fontSize={32}
        sx={{
          marginBottom: {md:"1rem"},
          fontWeight: "500",
          color: "#404145",
        }}
      >
        Fiverr guides
      </Typography>
      <Grid container>
        {guideData.map((data,index) => {
          return (
            <Grid item xs={12} md={4} sx={{marginTop:{xs:'1rem'}}} key={index}>
              <Guide data={data}/>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default GuidList;
