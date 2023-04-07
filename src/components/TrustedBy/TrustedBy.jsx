import { Box, Typography } from "@mui/material";
import React from "react";
import Meta from "../../assets/Brand/Meta.png"
import Google from "../../assets/Brand/Google.png"
import Netflix from "../../assets/Brand/Netflix.png"
import PG from "../../assets/Brand/PG.png"
import PayPal from "../../assets/Brand/PayPal.png"

const BrandLogo = [Meta,Google,Netflix,PG,PayPal];

const TrustedBy = () => {
  return <><Box sx={{ background: "#FAFAFA", color:"#B5B6BA", display:{md:"flex",xs:"none"}, padding:{md:'10px 18rem'}, justifyContent:"center"}}>
    <Typography variant="h6" sx={{marginTop:'0.8rem'}}>Trusted by:</Typography>
    {BrandLogo.map((logo,index)=>{
      return <img key={index} src={logo} alt="brand logo" style={{ display:"inline-block",marginLeft:"3rem"}} />
    })}
  </Box>
  <Box sx={{display:{xs:"flex",md:'none'}, flexDirection:"column", alignItems:"center",color:"#B5B6BA"}}>
  <Typography variant="h6" sx={{marginTop:'0.8rem'}}>Trusted by:</Typography>
    {BrandLogo.map((logo,index)=>{
      return <img key={index} src={logo} alt="brand logo" style={{ display:"inline-block"}} />
    })}
    </Box>
  </>;
};

export default TrustedBy;
