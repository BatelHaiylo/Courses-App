import "./Header.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MenuItem, Menu } from "@mui/material";
import IconButton from "@mui/material/IconButton";

export default function Header() {
  const [click, setClick] = useState(false);
  const [display, setDisplay] = useState("none");
  const [anchorEl, setAnchorEl] = useState(null);

  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="header">
      <div className="container flexSB">
        <div className="logo">
          <h1>GURU DD</h1>
          <span>ONLINE EDUCATION & LEARNING</span>
        </div>
        {user ? (
          <div className="user">
            <p className="desk-greeting">Hi {user.displayName}</p>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <i className="fa fa-user icon" aria-hidden="true"></i>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              className="user-menu"
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
                <p style={{ color: "#f24e1e" }} className="mobile-greeting">Hi {user.displayName}</p>
              </MenuItem>

              <MenuItem>
                <Button
                  variant="outlined"
                  className="popBtn"
                  onClick={handleClose}
                >
                  <Link to="/account" className="popBtn">
                    {" "}
                    Account
                  </Link>
                </Button>
              </MenuItem>

              <MenuItem>
                <Button
                  variant="outlined"
                  className="popBtn"
                  onClick={handleLogout}
                >
                  log out
                </Button>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <i className="fa fa-user icon" aria-hidden="true"></i>
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              className="user-menu"
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
              <Button
                  variant="outlined"
                  className="popBtn"
                  onClick={handleClose}
                >
                  <Link to="/account" className="popBtn">
                    {" "}
                    log in
                  </Link>
                </Button>
              </MenuItem>
            </Menu>
          </>
        )}
      </div>
    </section>
  );
}
