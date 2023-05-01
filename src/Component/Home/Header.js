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
import LaptopIcon from "@mui/icons-material/Laptop";
import { Link, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../state/actions/userAction";
import { useHistory } from "react-router-dom";

const pages = [
  {
    label: "PROFILE",
    link: "/personal-details",
  },
  { label: "RESUME", link: "/resume" },

  {
    label: "PREVIEW",
    link: "/template",
  },
  { label: "PREMIUM" },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const userAuth = useSelector((state) => state.token);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    history.push("/login");
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
        borderBottom: "1px solid gainsboro",
        px: 2,
      }}
    >
      <Container maxWidth="xl" sx={{ p: "0 !important" }}>
        <Toolbar disableGutters sx={{ maxHeight: { xs: "56px", md: "64px" } }}>
          <Box sx={{ display: { xs: "none", md: "flex" }, cursor: "pointer" }}>
            <LaptopIcon
              sx={{
                mr: 1,
                alignSelf: "center",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => history.push("/")}
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              PORT4LEO
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
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
              {pages.map((page, idx) => (
                <MenuItem key={idx} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              cursor: "pointer",
              display: { xs: "flex", md: "none" },
              flex: 1,
            }}
          >
            <LaptopIcon sx={{ mr: 1, alignSelf: "center" }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              onClick={() => history.push("/")}
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              PORT4LEO
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, idx) => (
              <>
                {page.link ? (
                  <Button
                    key={idx}
                    onClick={() => {
                      history.push(page.link);
                    }}
                    sx={{ my: 2, color: "black", display: "block" }}
                  >
                    {page.label}
                  </Button>
                ) : (
                  <Tooltip title="Coming Soon...!">
                    <Button
                      key={idx}
                      onClick={() => {
                        handleCloseNavMenu();
                      }}
                      sx={{ my: 2, color: "#ed5656", display: "block" }}
                    >
                      {page.label}
                    </Button>
                  </Tooltip>
                )}
              </>
            ))}
          </Box>

          {userAuth ? (
            <Box sx={{ flexGrow: 0, display: "flex" }}>
              <Button variant="contained" onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0, display: "flex" }}>
              <Button
                variant="contained"
                onClick={() => {
                  history.push("/login");
                }}
              >
                Login
              </Button>

              <Button
                variant="contained"
                sx={{ ml: 2 }}
                onClick={() => {
                  history.push("/register");
                }}
              >
                Sign up
              </Button>

              {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
