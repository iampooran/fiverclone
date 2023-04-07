import { Box } from "@mui/material";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import Slide from "../Slide/Slide";
import Heading from "../Heading/Heading";
import Freelancer1 from "../../assets/Freelancer/Freelancer1.png"
import Freelancer2 from "../../assets/Freelancer/Freelancer2.png"
import Freelancer3 from "../../assets/Freelancer/Freelancer3.png"
import Freelancer4 from "../../assets/Freelancer/Freelancer4.png"
import Freelancer5 from "../../assets/Freelancer/Freelancer5.png"
import Freelancer6 from "../../assets/Freelancer/Freelancer6.png"
import Freelancer7 from "../../assets/Freelancer/Freelancer7.png"
import Freelancer8 from "../../assets/Freelancer/Freelancer8.png"


const cssClasses = ['background1','background1','background1','background1','background1','background1','background1','background1'];
const freelancer = [Freelancer1,Freelancer2,Freelancer3,Freelancer4,Freelancer5,Freelancer6,Freelancer7,Freelancer8]

const totalFreelancer = [0,1,2,3,4,5,6,7]

const Header = () => {
  return (
    <>
      <Box>
        <Navbar />
        <Heading/>
        {totalFreelancer.map((frelance)=>
           <Slide cssClasses={cssClasses[frelance]} freelancer={freelancer[frelance]}/>
        )}
        
      </Box>
    </>
  );
};

export default Header;
