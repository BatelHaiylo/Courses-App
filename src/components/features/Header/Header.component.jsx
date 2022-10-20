import "./Header.css";
import { Link } from "react-router-dom";
import PopUp from "../Login/PopUp.component";
import Button from '@mui/material/Button';

export default function Header() {

  return (
    <>
      <section className="header">
        <div className="container flexSB">
          <div className="logo">
            <h1>GURU DD</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>
          <Button variant="outlined"  className="popBtn">log out</Button>
          {/* <PopUp /> */}
          <div className="user">
            <Link to="/profile">
              <i className="fa fa-user icon" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
