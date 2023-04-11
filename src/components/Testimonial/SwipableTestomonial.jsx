import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-grid-carousel";
import NaddamVideo from "../../assets/Testimonial/NAADAM.mp4"
import Rooted from "../../assets/Testimonial/rooted.mp4"
import Lavender from "../../assets/Testimonial/lavender.mp4"
import Herfest from "../../assets/Testimonial/herfest.mp4"
import Testimonial from './Testimonial'
import { Box } from '@mui/material';

const testomonialItem = [
    {
      title:"Caitlin Tormey, Chief Commercial Officer",
      companyLogo:"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/naadam-logo-x2.a79031d.png",
      poster:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg',
      desc:`"We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."`,
      videoLink: NaddamVideo,
    },
    {
        title:"Kay Kim, Co-Founder",
        companyLogo:"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/rooted-logo-x2.7da3bc9.png",
        desc:`"It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working."`,
        poster:"https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg",
        videoLink: Rooted,
      },
      {
        title:"Brighid Gannon, Co-Founder",
        companyLogo:"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lavender-logo-x2.3fff9e7.png",
        poster:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg',
        desc:`"We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."`,
        videoLink: Lavender,
      },
      {
        title:"Tim and Dan Joo, Co-Founders",
        companyLogo:"https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/haerfest-logo-x2.934ab63.png",
        poster:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg',
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