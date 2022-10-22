import "./Header.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [click, setClick] = useState(false);
  const [display, setDisplay] = useState("none");
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

  return (
    <section className="header">
      <div className="container flexSB">
        <div className="logo">
          <h1>GURU DD</h1>
          <span>ONLINE EDUCATION & LEARNING</span>
        </div>
        <button className="toggle" onClick={() => setClick(!click)}>
          <Link to="/account">
            <i className="fa fa-user icon" aria-hidden="true"></i>
          </Link>
        </button>
          {user ? (
            <div className="user">
              <Button
                variant="outlined"
                className="popBtn"
                onClick={handleLogout}
              >
                log out
              </Button>
              <p>Hi {user.displayName}</p>
              <Link to="/account">
                <i className="fa fa-user icon" aria-hidden="true"></i>
              </Link>
            </div>
          ) : (
            <Link to="/account">
              <i className="fa fa-user icon" aria-hidden="true"></i>
            </Link>
          )}
        </div>
    </section>
  );
}
