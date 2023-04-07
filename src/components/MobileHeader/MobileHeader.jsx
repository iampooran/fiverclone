import React from "react";
import { Box } from "@mui/material";
import { Button, IconButton, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";

const MobileHeader = ({ cssClasses, freelancer }) => {
    const SearchButton = styled(Button)(({ theme }) => ({
        width: "100%",
        fontFamily: "Roboto",
        fontWeight: "500",
        background: "#1DBF73",
        color: "white",
        
        margin: 0,
        borderRadius: "4px 4px 4px 4px",
        borderColor: "#1DBF73",
        "&:hover": {
          backgroundColor: "#19A262",
          color: "white",
          borderColor: "#19A262",
        },
      }));

  return (
    <Box
      
      sx={{
        background:"#1A1B1D",
        width: "100%",
        height: "550px",
        display: { md: "none", xs: "flex" },
      }}
    >
      <Box
        sx={{
          margin: "9.5rem 4rem",
          
        }}
      >
        <Typography fontSize={32} sx={{ fontWeight: "600", color: "white" }}>
          Find the perfect{" "}
          <span
            style={{
              marginLeft: "10px",
              fontFamily: "Domaine Display Narrow",
              fontStyle: "italic",
            }}
          >
            freelance
          </span>{" "}
          services for your business
        </Typography>
        <Box sx={{ display: "flex", marginTop: "1.3rem" }}>
          <Paper
            elevation={0}
            component="form"
            sx={{
              borderRadius: "4px 4px 4px 4px",
              shadow: "none",
              display: "flex",
              alignItems: "center",
              width: "100%",
              marginBottom:'1rem'
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder={`Try "building mobile app"`}
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>
          
        </Box>
        <SearchButton disableElevation variant="contained">
            Search
          </SearchButton>
      </Box>
    </Box>
  );
};

export default MobileHeader;
