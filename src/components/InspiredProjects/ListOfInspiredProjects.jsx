import React from "react";
import InspiredProjects from "./InspiredProjects";
import { Box, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-grid-carousel";
import avatar1 from "../../assets/avatar/avatar1.webp"
import avatar2 from "../../assets/avatar/avatar2.webp"
import avatar3 from "../../assets/avatar/avatar3.webp"
import avatar4 from "../../assets/avatar/avatar4.webp"
import avatar5 from "../../assets/avatar/avatar5.webp"
import avatar6 from "../../assets/avatar/avatar6.webp"
import avatar7 from "../../assets/avatar/avatar7.webp"
import avatar8 from "../../assets/avatar/avatar8.webp"

import img1 from "../../assets/inspiredprojectsImages/img1.webp"
import img2 from "../../assets/inspiredprojectsImages/img2.webp"
import img3 from "../../assets/inspiredprojectsImages/img3.webp"
import img4 from "../../assets/inspiredprojectsImages/img4.webp"
import img5 from "../../assets/inspiredprojectsImages/img5.webp"
import img6 from "../../assets/inspiredprojectsImages/img6.webp"
import img7 from "../../assets/inspiredprojectsImages/img7.webp"
import img8 from "../../assets/inspiredprojectsImages/img8.webp"

const inspiredProjectsItem = [
  {
    img: img1,
    avatar: avatar1,
    title: "Social Media Design",
    author: "by fernandobengua",
  },
  {
    img: img2,
    avatar: avatar2,
    title: "Logo Design",
    author: "by burno_malagrino",
  },
  {
    img: img3,
    avatar: avatar3,
    title: "Logo Design",
    author: "by eveeelin",
  },
  {
    img: img4,
    avatar: avatar4,
    title: "Web & Mobile Design",
    author: "by skydesigner",
  },
  {
    img: img5,
    avatar: avatar5,
    title: "Portralts & Caricatures",
    author: "by noneyn",
  },
  {
    img: img6,
    avatar: avatar6,
    title: "Packaging Design",
    author: "by mijalzagier",
  },
  {
    img: img7,
    avatar: avatar7,
    title: "Flyer Design",
    author: "by spickex",
  },
  {
    img: img8,
    avatar: avatar8,
    title: "Animated GIFs",
    author: "by lamonastudio",
  },
];

const ListOfInspiredProjects = () => {
  return (
    <Box sx={{ background: "#F5F5F5",paddingTop:{md:'5rem',xs:'2rem'},paddingBottom:{md:'5rem',xs:'2rem'}, marginTop:'3rem', marginBottom:'3rem'}}>
      <Box sx={{marginLeft:{md:'7rem'},marginRight:{md:'7rem'}}}> 
      <Typography fontSize={32} sx={{marginBottom:'1rem', marginLeft:{md:'1rem',xs:'0.5rem'}, fontWeight:'500', color:'#404145'}}>
      Get inspired with projects made by our freelancers
      </Typography>
      <Carousel cols={4} rows={1} loop={true} hideArrow={false}>
        {inspiredProjectsItem.map((data, index) => {
          return (
            <Carousel.Item key={index}>
              <InspiredProjects key={index} data={data} />
            </Carousel.Item>
          );
        })}
      </Carousel>
      </Box>
    </Box>
  );
};

export default ListOfInspiredProjects;
