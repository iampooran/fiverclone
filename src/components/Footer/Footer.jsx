import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import FooterLogo from "../../assets/scrolllogo.png";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

const socialIcons = [
  TwitterIcon,
  FacebookIcon,
  LinkedInIcon,
  PinterestIcon,
  InstagramIcon,
];

const footerMenu = [
  "Categories",
  "About",
  "Support",
  "Community",
  "More From Fiverr",
];

const categories = [
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  "Music & Audio",
  "Programming & Tech",
  "Data",
  "Business",
  "Lifestyle",
  "Photography",
  "Sitemap",
];

const about = [
  "Careers",
  "Press & News",
  "Partnerships",
  "Privacy Policy",
  "Terms of Service",
  "Intellectual Property Claims",
  "Investor Relations",
];

const support = [
  "Help & Support",
  "Trust & Safety",
  "Selling on Fiverr",
  "Buying on Fiverr",
];

const community = [
  "Customer Success Stories",
  "Community Hub",
  "Forum",
  "Events",
  "Blog",
  "Influencers",
  "Affiliates",
  "Podcast",
  "Invite a Friend",
  "Become a Seller",
  "Community Standards",
];

const moreFromFiverr = [
  "Fiverr Business",
  "Fiverr Pro",
  "Fiverr Logo Maker",
  "Fiverr Guides",
  "Get Inspired",
  "Fiverr Select",
  "ClearVoice",
  "Content Marketing",
  "Fiverr Workspace",
  "Invoice Software",
  "Learn",
  "Online Courses",
  "Working Not Working",
];

const iconSx = {
  color: "#74767E",
  marginTop: { xs: "1rem", md:'0rem' },
  marginLeft: { md: "2rem", xs: "0.5rem" },
  cursor: "pointer",
  "&:hover": {
    color: "black",
  },
};

const Footer = () => {
  return (
    <>
      <Divider />
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          marginLeft: { xs: "5rem", md: "5rem" },
          marginRight: { xs: "0rem", md: "5rem" },
          marginTop: "1rem",
          marginBottom: "2rem",
        }}
      >
        {footerMenu.map((menu,index) => {
          return (
            <React.Fragment key={index}>
              <Box sx={{ flex: 1 }} >
                <Typography
                  fontSize={16}
                  sx={{ fontWeight: "500", marginTop: "2rem" }}
                >
                  {menu}
                </Typography>
                {menu === "Categories" &&
                  categories.map((cat,index) => {
                    return (
                      <Typography
                        fontSize={16}
                        sx={{ marginTop: "15px", color: "#74767E" }}
                        key={index}
                      >
                        {cat}
                      </Typography>
                    );
                  })}
                {menu === "About" &&
                  about.map((aboutFooter, index) => {
                    return (
                      <Typography
                        fontSize={16}
                        sx={{ marginTop: "15px", color: "#74767E" }}
                        key={index}
                      >
                        {aboutFooter}
                      </Typography>
                    );
                  })}
                {menu === "Support" &&
                  support.map((supportFooter,index) => {
                    return (
                      <Typography
                        fontSize={16}
                        sx={{ marginTop: "15px", color: "#74767E" }}
                        key={index}
                      >
                        {supportFooter}
                      </Typography>
                    );
                  })}
                {menu === "Community" &&
                  community.map((communityFooter,index) => {
                    return (
                      <Typography
                        fontSize={16}
                        sx={{ marginTop: "15px", color: "#74767E" }}
                        key={index}
                      >
                        {communityFooter}
                      </Typography>
                    );
                  })}
                {menu === "More From Fiverr" &&
                  moreFromFiverr.map((moreFooter,index) => {
                    return (
                      <Typography
                        fontSize={16}
                        sx={{ marginTop: "15px", color: "#74767E" }}
                        key={index}
                      >
                        {moreFooter}
                      </Typography>
                    );
                  })}
              </Box>
            </React.Fragment>
          );
        })}
      </Box>
      <Divider />
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          marginTop: "1.2rem",
          marginBottom: "1rem",
          marginLeft: "4rem",
          marginRight: "4rem",
        }}
      >
        <Box sx={{ flex: 3, display: { xs: "block", md: "flex" }}}>
          <img
            src={FooterLogo}
            alt="footer logo"
            style={{ width: "70px", height: "22px" }}
          />
          
          <Typography sx={{ color: "#74767E", marginLeft:{md:'1rem'} }}>
            © Fiverr International Ltd. 2023
          </Typography>
          
        </Box>
        <Box sx={{ flex: 1.5, display: "felx", marginLeft: { xs: "2.5rem" },marginTop:{xs:'0.2rem'} }}>
            
          {socialIcons.map((Icon, index) => {
            return <Icon key={index} sx={iconSx} />;
          })}
        </Box>
        <Box
          sx={{
            flex: 1,
            marginLeft: { xs: "2.5rem" },
            marginTop: { xs: "1rem" },
          }}
        >
          <Typography
            sx={{
              position: "relative",
              color: "#74767E",
              cursor: "pointer",
              bottom:'1rem'
            }}
          >
            <LanguageOutlinedIcon sx={{ position: "relative", top: "6px" }} />
            English
            <span style={{ marginLeft: "3rem" }}>₹INR</span>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
