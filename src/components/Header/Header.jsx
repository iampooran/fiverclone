import { Box } from "@mui/material";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import Slide from "../Slide/Slide";
import Heading from "../Heading/Heading";
import Freelancer1 from "../../assets/Freelancer/Freelancer1.png";
import Freelancer4 from "../../assets/Freelancer/Freelancer4.png";
import Freelancer6 from "../../assets/Freelancer/Freelancer6.png";
import Freelancer7 from "../../assets/Freelancer/Freelancer7.png";
import Freelancer8 from "../../assets/Freelancer/Freelancer8.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const cssClasses = [
  "background1",
  "background2",
  "background3",
  "background4",
  "background5",
];
const freelancer = [
  Freelancer1,
  Freelancer4,
  Freelancer8,
  Freelancer6,
  Freelancer7,
];

const totalFreelancer = [0, 1, 2, 3, 4];

const Header = () => {
  return (
    <>
      <Box>
        <Navbar />
        <Heading />
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          swipeable={false}
        >
          {totalFreelancer.map((frelance) => (
            <Slide
              cssClasses={cssClasses[frelance]}
              freelancer={freelancer[frelance]}
            />
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default Header;
