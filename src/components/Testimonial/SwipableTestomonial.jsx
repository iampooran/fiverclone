import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-grid-carousel";
import NaddamVideo from "../../assets/Testimonial/NAADAM.mp4"
import Rooted from "../../assets/Testimonial/rooted.mp4"
import Lavender from "../../assets/Testimonial/lavender.mp4"
import Herfest from "../../assets/Testimonial/herfest.mp4"
import Testimonial from './Testimonial'
import { Box } from '@mui/material';

import nadamLogo from "../../assets/companyLogo/naadam.png"
import lavenderLogo from "../../assets/companyLogo/lavender.png"
import haerfestLogo from "../../assets/companyLogo/haerfest.png"
import rootedLogo from "../../assets/companyLogo/rooted.png"

import nadamPoster from "../../assets/poster/naadam.webp"
import lavenderPoster from "../../assets/poster/lavender.webp"
import haerfestPoster from "../../assets/poster/haerfest.webp"
import rootedPoster from "../../assets/poster/rooted.webp"



const testomonialItem = [
    {
      title:"Caitlin Tormey, Chief Commercial Officer",
      companyLogo:nadamLogo,
      poster:nadamPoster,
      desc:`"We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."`,
      videoLink: NaddamVideo,
    },
    {
        title:"Kay Kim, Co-Founder",
        companyLogo:rootedLogo,
        desc:`"It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working."`,
        poster:rootedPoster,
        videoLink: Rooted,
      },
      {
        title:"Brighid Gannon, Co-Founder",
        companyLogo:lavenderLogo,
        poster:lavenderPoster,
        desc:`"We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."`,
        videoLink: Lavender,
      },
      {
        title:"Tim and Dan Joo, Co-Founders",
        companyLogo:haerfestLogo,
        poster:haerfestPoster,
        desc:`"When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."`,
        videoLink: Herfest,
      },
]

const SwipableTestomonial = () => {
  return (
    <Box sx={{width:{md:'95%'}, marginLeft:{md:'2rem'}}}>
    <Carousel cols={1} rows={1} loop={true} hideArrow={false}>
        {testomonialItem.map((data, index) => {
          return (
            <Carousel.Item key={index}>
              <Testimonial key={index} data={data} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Box>
  )
}

export default SwipableTestomonial