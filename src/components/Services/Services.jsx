import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-grid-carousel";
import { Box, Typography } from "@mui/material";
import AIArtis from "../../assets/Services/AIArtists.webp";
import AnimatedExplainer from "../../assets/Services/AnimatedExplainer.jpg";
import BookCovers from "../../assets/Services/BookCovers.webp";
import DataEntry from "../../assets/Services/DataEntry.webp";
import Illustration from "../../assets/Services/Illustration.webp";
import LogoDesign from "../../assets/Services/LogoDesign.webp";
import SEO from "../../assets/Services/SEO.webp";
import Translation from "../../assets/Services/Translation.webp";
import Voiceover from "../../assets/Services/Voiceover.webp";
import Wordpress from "../../assets/Services/Wordpress.webp";

const serviceImages = [
  {
    subTitle:"Add talent to AI",
    title:"AI Artists",
    image: AIArtis,
  },
  {
    subTitle:"Build your brand",
    title:"Logo Design",
    image: LogoDesign,
  },
  {
    subTitle:"Customize your site",
    title:"WordPress",
    image: Wordpress,
  },
  {
    subTitle:"Share your message",
    title:"Voice Over",
    image: Voiceover,
  },
  {
    subTitle:"Engage your audience",
    title:"Video Explainer",
    image: AnimatedExplainer,
  },
  {
    subTitle:"Showcase your story",
    title:"Book Covers",
    image: BookCovers,
  },
  {
    subTitle:"Unlock growth online",
    title:"SEO",
    image: SEO,
  },
  {
    subTitle:"Color Yours Dreams",
    title:"Illustration",
    image: Illustration,
  },
  {
    subTitle:"Go global",
    title:"Translation",
    image: Translation,
  },
  {
    subTitle:"Learn Your Business",
    title:"Data Entry",
    image: DataEntry,
  },
];

const Services = () => {
  return (
    <div>
      <Box>
        <Typography
      
          variant="h4"
          sx={{
            position:"relative",
            color: "#404145",
            fontWeight: "600",
            marginLeft: "2rem",
            top:'1.5rem'
          }}
        >
          Popular professional services
        </Typography>
      </Box>
      <Carousel cols={5} rows={1} gap={10} loop={true} hideArrow={false}>
        {serviceImages.map((data, index) => {
          return (
            <Carousel.Item key={index} x>
              <ServiceCard key={index} data={data} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Services;
