import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/logo.png";
import { useScrollTrigger } from "@mui/material";
import scrolllogo from "../../assets/scrolllogo.png";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

const Search = styled("div")(({ theme }) => ({
  position: "absolute",
  color: "#404145",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: "1px solid #95979D",
  left: "8rem",
  bottom: "0.8rem",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "45ch",
      "&:focus": {
        width: "50ch",
      },
    },
  },
}));

const pages = [
  "Fiverr Business",
  "Explore",
  "English",
  "Become a Seller",
  "Sign in",
];

function Navbar() {
  const trigger = useScrollTrigger();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const JoinButton = styled(Button)(({ theme }) => ({
    fontFamily: "Roboto",
    borderColor: trigger ? "#1DBF73" : "white",
    color: trigger ? "#1DBF73" : "white",
    "&:hover": {
      backgroundColor: "#1DBF73",
      color: "white",
      borderColor: "#1DBF73",
    },
  }));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        position: trigger && "sticky",
        transition: "500ms",
        backgroundColor: { xs: "white", md: trigger ? "#fff" : "transparent" },
        padding: "0px 32px",
      }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {!trigger && (
              <img src={logo} alt="logo" style={{ width: 89, height: 27 }} />
            )}

            {trigger && (
              <img
                src={scrolllogo}
                alt="logo"
                style={{ width: 89, height: 27 }}
              />
            )}

            {trigger && (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="What service are you looking for today?"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            )}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              sx={{ color: "black" }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <JoinButton
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    display: { md: "none" },
                    borderColor: "#1DBF73",
                    color: "#1DBF73",
                  }}
                  variant="outlined"
                >
                  Join
                </JoinButton>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src={scrolllogo}
              alt="logo"
              style={{ width: 89, height: 27 }}
            />
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {pages.map((page,index) => (
              <Typography
                fontSize={17}
                fontWeight="500"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  cursor: "pointer",
                  my: 2,
                  color: trigger ? "black" : "white",
                  display: "block",
                  mr: 5,
                  ml: page === "Explore" && 3,
                }}
              >
                {page === "Explore" && (
                  <LanguageOutlinedIcon
                    sx={{ position: "absolute", right: "32.5rem" }}
                  />
                )}
                <span
                  style={{
                    color: page === "Fiverr Business" && trigger && "#1E1692",
                  }}
                >
                  {page}
                </span>
              </Typography>
            ))}
          </Box>
          <JoinButton
            onClick={handleCloseNavMenu}
            sx={{ my: 2, display: { md: "block", xs: "none" } }}
            variant="outlined"
          >
            Join
          </JoinButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
