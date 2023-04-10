import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import GraphicDesign from "../../assets/Marketplace/GraphicsDesign.svg";
import OnlineMarketing from "../../assets/Marketplace/OnlineMarketing.svg";
import WritingTranslation from "../../assets/Marketplace/WritingTranslation.svg";
import VideoAnimation from "../../assets/Marketplace/VideoAnimation.svg";
import MusicAudio from "../../assets/Marketplace/MusicAudio.svg";
import Programming from "../../assets/Marketplace/Programming.svg";
import Business from "../../assets/Marketplace/Business.svg";
import Lifestyle from "../../assets/Marketplace/Lifestyle.svg";
import Data from "../../assets/Marketplace/Data.svg";
import Photography from "../../assets/Marketplace/Photography.svg";
import "./MarketPlace.css"

const marketplaceSign = [
  {
    id: 0,
    img: GraphicDesign
  },
  {
    id: 1,
    img: OnlineMarketing
  },
  {
    id: 2,
    img: WritingTranslation
  },
  {
    id: 3,
    img: VideoAnimation
  },
  {
    id: 4,
    img: MusicAudio
  },
  {
    id: 5,
    img: Programming
  },
  {
    id: 6,
    img: Business
  },
  {
    id: 7,
    img: Lifestyle
  },
  {
    id: 8,
    img: Data
  },
  {
    id: 9,
    img: Photography
  }
];

const marketplaceName = [
  "Graphic & Design",
  'Digital Marketing',
  'Writing & Translation',
  'Video & Animation',
  'Music & Audio',
  'Programming & Tech',
  'Business',
  'Lifestyle',
  'Data',
  'Photography'
]

const MarketPlace = () => {
  return (<>
    
    <Box sx={{marginLeft:{md:'3rem',xs:'1rem'},marginRight:{md:'3rem',xs:'1rem'}, marginTop:{md:'3rem',xs:'1rem'},marginBottom:'3rem'}}>
    <Typography fontSize={32} sx={{marginBottom:'1rem', fontWeight:'500', color:'#404145'}}>Explore the marketplace</Typography>
      <Grid container >
      {marketplaceSign.map((sign,index)=>{
        return <Grid key={index} className="parent" item md={2.4} xs={12} sx={{display:{md:'flex',xs:'block'},flexDirection:'column',alignItems:'center',textAlign:'center',padding:'2rem'}}>
          <img src={sign.img} alt="sign" style={{width:'48px',height:'48px'}}/>
          <hr className="child" width="20%" style={{marginTop:"5px",marginBottom:'5px'}}/>
          <Typography >
            {marketplaceName[sign.id]}
          </Typography>
        </Grid>
      })}
      </Grid>
    </Box>
    </>
  );
};

export default MarketPlace;
