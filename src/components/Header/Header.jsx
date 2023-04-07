import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import { NoEncryption } from "@mui/icons-material";
import Freelancer from "../../assets/Freelancer/Freelancer1.png";

const category = ["Website Design", "Wordpress", "Logo Design", "AI Services"];

const Header = () => {
  const SearchButton = styled(Button)(({ theme }) => ({
    width: "103px",
    fontFamily: "Roboto",
    fontWeight: "500",
    background: "#1DBF73",
    color: "white",
    margin: 0,
    borderRadius: "0px 4px 4px 0px",
    borderColor: "#1DBF73",
    "&:hover": {
      backgroundColor: "#19A262",
      color: "white",
      borderColor: "#19A262",
    },
  }));

  const CategoryButton = styled(Button)(({ theme }) => ({
    padding: "1px 12px 0px",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "500",
    background: "transparent",
    color: "white",
    borderRadius: "40px",
    borderColor: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "grey",
      borderColor: "white",
    },
    marginLeft: "0.7rem",
  }));

  return (
    <>
      <Box className="background1">
        <Navbar />
        <Box sx={{ height: "600px", display: { md: "flex", xs: "none" }, overflow:'hidden' }}>
          <Box
            sx={{
              flex: 1.3,
              margin: "11rem 8rem 0rem 8rem",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "600", color: "white" }}>
              Find the perfect <span  style={{marginLeft:'10px',fontFamily:"Domaine Display Narrow", fontStyle:"italic"}}>freelance</span> services for your business
            </Typography>
            <Box sx={{ display: "flex", marginTop: "1.3rem" }}>
              <Paper
                elevation={0}
                component="form"
                sx={{
                  borderRadius: "4px 0px 0px 4px",
                  shadow: "none",
                  display: "flex",
                  alignItems: "center",
                  width: 540,
                }}
              >
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder={`Try "building mobile app"`}
                  inputProps={{ "aria-label": "search google maps" }}
                />
              </Paper>
              <SearchButton disableElevation variant="contained">
                Search
              </SearchButton>
            </Box>
            <Box sx={{ marginTop: "1.3rem", display: "flex" }}>
              <Typography sx={{ fontWeight: "bold", color: "white" }}>
                Popular:
              </Typography>
              {category.map((cate) => (
                <CategoryButton variant="outlined">{cate}</CategoryButton>
              ))}
            </Box>
          </Box>
          <Box sx={{ flex: 1, marginTop:'2rem'}}>
            <img src={Freelancer} alt="freelancer"/>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
