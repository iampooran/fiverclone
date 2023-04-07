import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";

const category = ["Website Design", "Wordpress", "Logo Design", "AI Services"];

const Heading = () => {
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
    <Box sx={{position:'absolute', width:'45%', margin: '13rem 8rem'}}>
      <Typography variant="h3" sx={{ fontWeight: "600", color: "white" }}>
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
            borderRadius: "4px 0px 0px 4px",
            shadow: "none",
            display: "flex",
            alignItems: "center",
            width: 540,
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
  );
};

export default Heading;
