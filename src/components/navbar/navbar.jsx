import navStyles from "./navbar.module.scss";
import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    color: "#000",
  },
  search: {
    position: "relative",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#7a7a7a8c",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  },

  links: {
    color: "#313131ea",
    textDecoration: "none",
  },
  titleLink: {
    textDecoration: "none",
    color: "black",
  },
}));

export default function PrimarySearchAppBar(props) {
  // const classes = useStyles();

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <a className={classes.links} href="/#health">
          Health
        </a>
      </MenuItem>
      <MenuItem>
        <a className={classes.links} href="/#hormone">
          Hormone
        </a>
      </MenuItem>
      <MenuItem>
        <a className={classes.links} href="/#performance">
          Performance
        </a>
      </MenuItem>
      <MenuItem>
        <a className={classes.links} href="/#performance">
          Performance
        </a>
      </MenuItem>
      <MenuItem>
        <a className={classes.links} href="/#about">
          About
        </a>
      </MenuItem>
      <MenuItem>
        <a className={classes.links} href="/#blog">
          Blog
        </a>
      </MenuItem>
      <MenuItem>
        <a className={classes.links} href="/#contact">
          {" "}
          contact
        </a>
      </MenuItem>
    </Menu>
  );
  return (
    <div className={navStyles.container}>
      <AppBar
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.65)",
          color: "black",
          boxShadow: "none",
        }}
        className={navStyles.navBar}
        position="fixed"
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          ></IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <a className={classes.titleLink} href="/#home">
              {" "}
              Nutrition
            </a>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <MenuItem>
              {" "}
              <a className={classes.links} href="/#health">
                Health
              </a>{" "}
            </MenuItem>
            <MenuItem>
              <a className={classes.links} href="/#hormone">
                Hormone
              </a>
            </MenuItem>
            <MenuItem>
              <a className={classes.links} href="/#performance">
                Performance
              </a>
            </MenuItem>
            <MenuItem>
              <a className={classes.links} href="/#about">
                About
              </a>
            </MenuItem>
            <MenuItem>
              <a className={classes.links} href="/#blog">
                Blog
              </a>
            </MenuItem>
            <MenuItem>
              {" "}
              <a className={classes.links} href="/#contact">
                {" "}
                contact
              </a>{" "}
            </MenuItem>
            <Button>
              {" "}
              <Badge
                style={{ color: "#d72323", fontWeight: "bold!important" }}
                badgeContent={0}
                showZero
              >
                <ShoppingBasketIcon style={{ color: "#256d52" }} />
              </Badge>
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
